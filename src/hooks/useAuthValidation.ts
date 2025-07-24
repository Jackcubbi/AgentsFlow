import { useState, useCallback } from "react";
import { z } from "zod";
import {
  loginSchema,
  registerSchema,
  calculatePasswordStrength,
  formatValidationErrors,
  checkEmailExists,
  type AuthResponse,
} from "@/lib/auth-validation";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  company?: string;
  companySize?: string;
  useCase?: string;
  acceptTerms: boolean;
  acceptMarketing?: boolean;
}

export function useLoginValidation() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { login } = useAuth();

  const validateLogin = useCallback(
    async (data: LoginFormData): Promise<boolean> => {
      try {
        setErrors({});
        loginSchema.parse(data);
        return true;
      } catch (error) {
        if (error instanceof z.ZodError) {
          setErrors(formatValidationErrors(error));
        }
        return false;
      }
    },
    [],
  );

  const handleLogin = useCallback(
    async (data: LoginFormData): Promise<boolean> => {
      setIsLoading(true);
      setErrors({});

      try {
        // Validate form data
        const isValid = await validateLogin(data);
        if (!isValid) {
          setIsLoading(false);
          return false;
        }

        // Attempt login
        const success = await login(data.email, data.password);

        if (success) {
          toast.success("Welcome back to AgentFlow!");
          return true;
        } else {
          setErrors({
            general:
              "Invalid email or password. Please check your credentials and try again.",
          });
          toast.error("Login failed. Please check your credentials.");
          return false;
        }
      } catch (error: any) {
        console.error("Login error:", error);

        // Handle specific error responses
        if (error.response?.status === 401) {
          setErrors({ general: "Invalid email or password." });
          toast.error("Invalid credentials");
        } else if (error.response?.status === 429) {
          setErrors({
            general: "Too many login attempts. Please try again later.",
          });
          toast.error("Too many attempts");
        } else {
          setErrors({ general: "Login failed. Please try again." });
          toast.error("Login failed");
        }

        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [login, validateLogin],
  );

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    isLoading,
    errors,
    handleLogin,
    validateLogin,
    clearErrors,
  };
}

export function useRegisterValidation() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [emailChecking, setEmailChecking] = useState(false);
  const { register } = useAuth();

  const validateRegister = useCallback(
    async (data: RegisterFormData): Promise<boolean> => {
      try {
        setErrors({});
        registerSchema.parse(data);
        return true;
      } catch (error) {
        if (error instanceof z.ZodError) {
          setErrors(formatValidationErrors(error));
        }
        return false;
      }
    },
    [],
  );

  const checkEmailAvailability = useCallback(
    async (email: string): Promise<boolean> => {
      if (!email || email.length < 3) return true;

      setEmailChecking(true);
      try {
        const exists = await checkEmailExists(email);
        if (exists) {
          setErrors((prev) => ({
            ...prev,
            email: "This email is already registered",
          }));
          return false;
        } else {
          setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors.email;
            return newErrors;
          });
          return true;
        }
      } catch (error) {
        console.error("Email check error:", error);
        return true; // Don't block registration if check fails
      } finally {
        setEmailChecking(false);
      }
    },
    [],
  );

  const handleRegister = useCallback(
    async (data: RegisterFormData): Promise<boolean> => {
      setIsLoading(true);
      setErrors({});

      try {
        // Validate form data
        const isValid = await validateRegister(data);
        if (!isValid) {
          setIsLoading(false);
          return false;
        }

        // Check email availability
        const emailAvailable = await checkEmailAvailability(data.email);
        if (!emailAvailable) {
          setIsLoading(false);
          return false;
        }

        // Attempt registration
        const success = await register({
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
        });

        if (success) {
          toast.success(
            "Welcome to AgentFlow! Your account has been created successfully.",
          );
          return true;
        } else {
          setErrors({ general: "Registration failed. Please try again." });
          toast.error("Registration failed");
          return false;
        }
      } catch (error: any) {
        console.error("Registration error:", error);

        // Handle specific error responses
        if (error.response?.status === 400) {
          const errorData = error.response.data;
          if (errorData.error === "Email already exists") {
            setErrors({
              email:
                "This email is already registered. Please use a different email or try logging in.",
            });
            toast.error("Email already exists");
          } else if (errorData.errors) {
            const formattedErrors: Record<string, string> = {};
            errorData.errors.forEach((err: any) => {
              formattedErrors[err.param || err.path || "general"] =
                err.msg || err.message;
            });
            setErrors(formattedErrors);
            toast.error("Please fix the form errors");
          } else {
            setErrors({ general: errorData.error || "Registration failed" });
            toast.error("Registration failed");
          }
        } else {
          setErrors({ general: "Registration failed. Please try again." });
          toast.error("Registration failed");
        }

        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [register, validateRegister, checkEmailAvailability],
  );

  const getPasswordStrength = useCallback((password: string) => {
    return calculatePasswordStrength(password);
  }, []);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    isLoading,
    errors,
    emailChecking,
    handleRegister,
    validateRegister,
    checkEmailAvailability,
    getPasswordStrength,
    clearErrors,
  };
}
