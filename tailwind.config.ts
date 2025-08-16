import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1920px",
      },
    },
    extend: {
      fontFamily: {
        // Airbnb's font stack
        airbnb: [
          "Cereal",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        sans: [
          "Cereal",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        // Custom brand color palette
        brand: {
          aero: "#6CC1E3", // Light blue
          "dark-cornflower": "#2E4392", // Dark blue
          "bright-gray": "#E6E9EF", // Light gray
          "celestial-blue": "#4995BE", // Medium blue
          "macaroni-cheese": "#F9CA89", // Orange
        },
        // Exact Airbnb brand colors
        airbnb: {
          primary: "#FF385C", // Signature Airbnb red
          "text-primary": "#222222", // Main text color
          "text-secondary": "#6A6A6A", // Secondary text
          "text-muted": "#C1C1C1", // Muted text
          "border-light": "#DDDDDD", // Light borders
          "bg-light": "#F7F7F7", // Light background
          "bg-gray": "#F2F2F2", // Button backgrounds
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        "2xl": "20px", // Airbnb card radius
        "4xl": "32px", // Airbnb search form radius
        full: "100px", // Airbnb button radius
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "airbnb-card":
          "rgba(0, 0, 0, 0.02) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 8px 24px 0px",
        "airbnb-search": "rgba(0, 0, 0, 0.1) 0px 3px 12px 0px",
      },
      fontWeight: {
        "airbnb-light": "300",
        "airbnb-normal": "400",
        "airbnb-medium": "500",
        "airbnb-semibold": "600",
        "airbnb-bold": "700",
        "airbnb-extrabold": "800",
      },
      fontSize: {
        // Airbnb's typography scale
        "airbnb-xs": ["12px", { lineHeight: "16px" }],
        "airbnb-sm": ["14px", { lineHeight: "20px" }],
        "airbnb-base": ["16px", { lineHeight: "24px" }],
        "airbnb-lg": ["18px", { lineHeight: "28px" }],
        "airbnb-xl": ["20px", { lineHeight: "28px" }],
        "airbnb-2xl": ["24px", { lineHeight: "32px" }],
        "airbnb-3xl": ["30px", { lineHeight: "36px" }],
      },
      spacing: {
        "18": "4.5rem",
        "66": "16.5rem",
      },
      aspectRatio: {
        "20/19": "20 / 19",
        "1/1": "1 / 1", // Airbnb square images
        "4/3": "4 / 3", // Alternative Airbnb ratio for some listings
      },
      letterSpacing: {
        tighter: "-0.18px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
