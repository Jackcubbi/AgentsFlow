import { z } from "zod";

// Password strength validation
export const passwordRequirements = {
  minLength: 8,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: true,
};

export const passwordSchema = z
  .string()
  .min(
    passwordRequirements.minLength,
    `Password must be at least ${passwordRequirements.minLength} characters`,
  )
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/\d/, "Password must contain at least one number")
  .regex(
    /[^A-Za-z0-9]/,
    "Password must contain at least one special character",
  );

export const emailSchema = z
  .string()
  .email("Please enter a valid email address")
  .min(1, "Email is required");

export const nameSchema = z
  .string()
  .min(2, "Name must be at least 2 characters")
  .max(50, "Name must not exceed 50 characters")
  .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces");

// Login validation schema
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
});

// Registration validation schema
export const registerSchema = z
  .object({
    firstName: nameSchema,
    lastName: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    company: z.string().optional(),
    companySize: z.string().optional(),
    useCase: z.string().optional(),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Password strength calculation
export function calculatePasswordStrength(password: string): {
  score: number;
  label: string;
  color: string;
  checks: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    special: boolean;
  };
} {
  const checks = {
    length: password.length >= passwordRequirements.minLength,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    numbers: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const score = Object.values(checks).filter(Boolean).length;

  let label = "Very Weak";
  let color = "bg-red-500";

  if (score >= 5) {
    label = "Very Strong";
    color = "bg-green-500";
  } else if (score >= 4) {
    label = "Strong";
    color = "bg-blue-500";
  } else if (score >= 3) {
    label = "Good";
    color = "bg-yellow-500";
  } else if (score >= 2) {
    label = "Fair";
    color = "bg-orange-500";
  }

  return { score, label, color, checks };
}

// Email validation
export function validateEmail(email: string): {
  isValid: boolean;
  error?: string;
} {
  try {
    emailSchema.parse(email);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { isValid: false, error: error.errors[0]?.message };
    }
    return { isValid: false, error: "Invalid email" };
  }
}

// Check if email exists (for registration)
export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const response = await fetch(`/api/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.exists;
    }
    return false;
  } catch (error) {
    console.error("Email check failed:", error);
    return false;
  }
}

// Format validation errors for UI display
export function formatValidationErrors(
  errors: z.ZodError,
): Record<string, string> {
  const formatted: Record<string, string> = {};

  errors.errors.forEach((error) => {
    const path = error.path.join(".");
    formatted[path] = error.message;
  });

  return formatted;
}

// Auth API error handling
export interface AuthResponse {
  success: boolean;
  user?: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    isHost: boolean;
  };
  token?: string;
  error?: string;
  errors?: Array<{ field: string; message: string }>;
}

export function handleAuthError(error: any): string {
  if (error?.response?.data?.error) {
    return error.response.data.error;
  }

  if (error?.response?.data?.errors) {
    return error.response.data.errors
      .map((e: any) => e.msg || e.message)
      .join(", ");
  }

  if (error?.message) {
    return error.message;
  }

  return "An unexpected error occurred. Please try again.";
}
