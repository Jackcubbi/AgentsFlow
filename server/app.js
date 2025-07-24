import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { body, validationResult } from "express-validator";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Initialize SQLite Database
const db = new sqlite3.Database("./database.sqlite", (err) => {
  if (err) {
    console.error("Error opening database:", err);
  } else {
    console.log("Connected to SQLite database");
    initializeTables();
  }
});

// Create tables
function initializeTables() {
  // Users table
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      isHost BOOLEAN DEFAULT FALSE,
      profileImage TEXT,
      phone TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Properties table
  db.run(`
    CREATE TABLE IF NOT EXISTS properties (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      hostId INTEGER NOT NULL,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      location TEXT NOT NULL,
      latitude REAL,
      longitude REAL,
      pricePerNight REAL NOT NULL,
      maxGuests INTEGER NOT NULL,
      bedrooms INTEGER NOT NULL,
      bathrooms INTEGER NOT NULL,
      amenities TEXT, -- JSON string
      images TEXT, -- JSON string array
      isActive BOOLEAN DEFAULT TRUE,
      rating REAL DEFAULT 0,
      reviewCount INTEGER DEFAULT 0,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (hostId) REFERENCES users (id)
    )
  `);

  // Bookings table
  db.run(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      propertyId INTEGER NOT NULL,
      guestId INTEGER NOT NULL,
      checkIn DATE NOT NULL,
      checkOut DATE NOT NULL,
      guests INTEGER NOT NULL,
      totalPrice REAL NOT NULL,
      status TEXT DEFAULT 'pending',
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (propertyId) REFERENCES properties (id),
      FOREIGN KEY (guestId) REFERENCES users (id)
    )
  `);

  // Reviews table
  db.run(`
    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      propertyId INTEGER NOT NULL,
      guestId INTEGER NOT NULL,
      rating INTEGER NOT NULL,
      comment TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (propertyId) REFERENCES properties (id),
      FOREIGN KEY (guestId) REFERENCES users (id)
    )
  `);
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "server/uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname),
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access token required" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    req.user = user;
    next();
  });
};

// Check if email exists (for registration validation)
app.post(
  "/api/check-email",
  [body("email").isEmail().normalizeEmail()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    db.get("SELECT id FROM users WHERE email = ?", [email], (err, user) => {
      if (err) {
        return res.status(500).json({ error: "Server error" });
      }

      res.json({ exists: !!user });
    });
  },
);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Database status endpoint
app.get("/api/db-status", (req, res) => {
  db.get("SELECT 1 as test", (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        error: err.message,
      });
    }

    res.json({
      status: "connected",
      timestamp: new Date().toISOString(),
    });
  });
});

// Get current user
app.get("/api/me", authenticateToken, (req, res) => {
  db.get(
    "SELECT id, email, firstName, lastName, isHost FROM users WHERE id = ?",
    [req.user.id],
    (err, user) => {
      if (err || !user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ user });
    },
  );
});

// Auth Routes
app.post(
  "/api/register",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
    body("firstName").notEmpty().trim(),
    body("lastName").notEmpty().trim(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, firstName, lastName, isHost } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      db.run(
        "INSERT INTO users (email, password, firstName, lastName, isHost) VALUES (?, ?, ?, ?, ?)",
        [email, hashedPassword, firstName, lastName, isHost || false],
        function (err) {
          if (err) {
            if (err.code === "SQLITE_CONSTRAINT") {
              return res.status(400).json({ error: "Email already exists" });
            }
            return res.status(500).json({ error: "Registration failed" });
          }

          const token = jwt.sign(
            { id: this.lastID, email, isHost: isHost || false },
            JWT_SECRET,
            { expiresIn: "7d" },
          );

          res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
              id: this.lastID,
              email,
              firstName,
              lastName,
              isHost: isHost || false,
            },
          });
        },
      );
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
);

app.post(
  "/api/login",
  [body("email").isEmail().normalizeEmail(), body("password").notEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    db.get(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, user) => {
        if (err) {
          return res.status(500).json({ error: "Server error" });
        }

        if (!user) {
          return res.status(401).json({ error: "Invalid credentials" });
        }

        try {
          const isValidPassword = await bcrypt.compare(password, user.password);
          if (!isValidPassword) {
            return res.status(401).json({ error: "Invalid credentials" });
          }

          const token = jwt.sign(
            { id: user.id, email: user.email, isHost: user.isHost },
            JWT_SECRET,
            { expiresIn: "7d" },
          );

          res.json({
            message: "Login successful",
            token,
            user: {
              id: user.id,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              isHost: user.isHost,
            },
          });
        } catch (error) {
          res.status(500).json({ error: "Server error" });
        }
      },
    );
  },
);

// Property Routes
app.get("/api/properties", (req, res) => {
  const { location, maxPrice, guests } = req.query;
  let query = `
    SELECT p.*, u.firstName, u.lastName
    FROM properties p
    JOIN users u ON p.hostId = u.id
    WHERE p.isActive = 1
  `;
  const params = [];

  if (location) {
    query += " AND p.location LIKE ?";
    params.push(`%${location}%`);
  }

  if (maxPrice) {
    query += " AND p.pricePerNight <= ?";
    params.push(maxPrice);
  }

  if (guests) {
    query += " AND p.maxGuests >= ?";
    params.push(guests);
  }

  query += " ORDER BY p.createdAt DESC";

  db.all(query, params, (err, properties) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch properties" });
    }

    // Parse JSON fields
    const formattedProperties = properties.map((property) => ({
      ...property,
      amenities: property.amenities ? JSON.parse(property.amenities) : [],
      images: property.images ? JSON.parse(property.images) : [],
    }));

    res.json(formattedProperties);
  });
});

app.post(
  "/api/properties",
  authenticateToken,
  upload.array("images", 10),
  [
    body("title").notEmpty().trim(),
    body("description").notEmpty().trim(),
    body("location").notEmpty().trim(),
    body("pricePerNight").isFloat({ min: 0 }),
    body("maxGuests").isInt({ min: 1 }),
    body("bedrooms").isInt({ min: 0 }),
    body("bathrooms").isInt({ min: 0 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!req.user.isHost) {
      return res
        .status(403)
        .json({ error: "Only hosts can create properties" });
    }

    const {
      title,
      description,
      location,
      latitude,
      longitude,
      pricePerNight,
      maxGuests,
      bedrooms,
      bathrooms,
      amenities,
    } = req.body;

    const images = req.files
      ? req.files.map((file) => `/uploads/${file.filename}`)
      : [];
    const amenitiesJSON = JSON.stringify(amenities || []);
    const imagesJSON = JSON.stringify(images);

    db.run(
      `INSERT INTO properties
     (hostId, title, description, location, latitude, longitude, pricePerNight,
      maxGuests, bedrooms, bathrooms, amenities, images)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        req.user.id,
        title,
        description,
        location,
        latitude,
        longitude,
        pricePerNight,
        maxGuests,
        bedrooms,
        bathrooms,
        amenitiesJSON,
        imagesJSON,
      ],
      function (err) {
        if (err) {
          return res.status(500).json({ error: "Failed to create property" });
        }

        res.status(201).json({
          message: "Property created successfully",
          propertyId: this.lastID,
        });
      },
    );
  },
);

// Get properties with coordinates for map
app.get("/api/properties/map", (req, res) => {
  const { bounds } = req.query;

  let query = `
    SELECT p.*, u.firstName, u.lastName
    FROM properties p
    JOIN users u ON p.hostId = u.id
    WHERE p.isActive = 1 AND p.latitude IS NOT NULL AND p.longitude IS NOT NULL
  `;
  const params = [];

  // Add bounds filtering if provided
  if (bounds) {
    const [minLat, minLng, maxLat, maxLng] = bounds.split(",").map(Number);
    query += " AND p.latitude BETWEEN ? AND ? AND p.longitude BETWEEN ? AND ?";
    params.push(minLat, maxLat, minLng, maxLng);
  }

  query += " ORDER BY p.createdAt DESC";

  db.all(query, params, (err, properties) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch properties" });
    }

    // Parse JSON fields and add random coordinates for demo
    const formattedProperties = properties.map((property) => ({
      ...property,
      amenities: property.amenities ? JSON.parse(property.amenities) : [],
      images: property.images ? JSON.parse(property.images) : [],
      // Add random LA area coordinates if not set
      latitude: property.latitude || 34.0522 + (Math.random() - 0.5) * 0.2,
      longitude: property.longitude || -118.2437 + (Math.random() - 0.5) * 0.2,
    }));

    res.json(formattedProperties);
  });
});

// Get user's properties (for hosts)
app.get("/api/my-properties", authenticateToken, (req, res) => {
  if (!req.user.isHost) {
    return res
      .status(403)
      .json({ error: "Only hosts can view their properties" });
  }

  db.all(
    "SELECT * FROM properties WHERE hostId = ? ORDER BY createdAt DESC",
    [req.user.id],
    (err, properties) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch properties" });
      }

      const formattedProperties = properties.map((property) => ({
        ...property,
        amenities: property.amenities ? JSON.parse(property.amenities) : [],
        images: property.images ? JSON.parse(property.images) : [],
      }));

      res.json(formattedProperties);
    },
  );
});

// Booking Routes
app.post(
  "/api/bookings",
  authenticateToken,
  [
    body("propertyId").isInt(),
    body("checkIn").isDate(),
    body("checkOut").isDate(),
    body("guests").isInt({ min: 1 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { propertyId, checkIn, checkOut, guests } = req.body;

    // First, get property details to calculate total price
    db.get(
      "SELECT * FROM properties WHERE id = ?",
      [propertyId],
      (err, property) => {
        if (err || !property) {
          return res.status(404).json({ error: "Property not found" });
        }

        if (guests > property.maxGuests) {
          return res
            .status(400)
            .json({ error: "Too many guests for this property" });
        }

        // Calculate total price (simplified - just nights * price)
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        const nights = Math.ceil(
          (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24),
        );
        const totalPrice = nights * property.pricePerNight;

        db.run(
          "INSERT INTO bookings (propertyId, guestId, checkIn, checkOut, guests, totalPrice) VALUES (?, ?, ?, ?, ?, ?)",
          [propertyId, req.user.id, checkIn, checkOut, guests, totalPrice],
          function (err) {
            if (err) {
              return res
                .status(500)
                .json({ error: "Failed to create booking" });
            }

            res.status(201).json({
              message: "Booking created successfully",
              bookingId: this.lastID,
              totalPrice,
            });
          },
        );
      },
    );
  },
);

// Get user's bookings
app.get("/api/my-bookings", authenticateToken, (req, res) => {
  db.all(
    `SELECT b.*, p.title, p.location, p.images
     FROM bookings b
     JOIN properties p ON b.propertyId = p.id
     WHERE b.guestId = ?
     ORDER BY b.createdAt DESC`,
    [req.user.id],
    (err, bookings) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch bookings" });
      }

      const formattedBookings = bookings.map((booking) => ({
        ...booking,
        images: booking.images ? JSON.parse(booking.images) : [],
      }));

      res.json(formattedBookings);
    },
  );
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "File too large" });
    }
  }
  res.status(500).json({ error: error.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
