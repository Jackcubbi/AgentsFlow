import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import AuthModals from "@/components/auth/AuthModals";
import AuthStatusDashboard from "@/components/auth/AuthStatusDashboard";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import {
  Bot,
  ArrowLeft,
  User,
  Mail,
  Lock,
  Shield,
  CheckCircle,
  AlertCircle,
  UserPlus,
  LogIn,
  LogOut,
  Settings,
  TestTube,
  Database,
  Server,
  Clock,
} from "lucide-react";

const AuthTest = () => {
  const { user, isAuthenticated, loading, login, register, logout } = useAuth();
  const navigate = useNavigate();

  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [showStatusDashboard, setShowStatusDashboard] = useState(true);

  // Test credentials
  const [testCredentials, setTestCredentials] = useState({
    email: "test@agentflow.com",
    password: "TestPass123!",
    firstName: "John",
    lastName: "Doe",
  });

  // System status
  const [systemStatus, setSystemStatus] = useState({
    api: "checking",
    database: "checking",
    auth: "checking",
  });

  useEffect(() => {
    checkSystemStatus();
  }, []);

  const checkSystemStatus = async () => {
    // Check API
    try {
      const apiResponse = await fetch("/api/health");
      setSystemStatus((prev) => ({
        ...prev,
        api: apiResponse.ok ? "online" : "offline",
      }));
    } catch (error) {
      setSystemStatus((prev) => ({ ...prev, api: "offline" }));
    }

    // Check Database
    try {
      const dbResponse = await fetch("/api/db-status");
      setSystemStatus((prev) => ({
        ...prev,
        database: dbResponse.ok ? "connected" : "error",
      }));
    } catch (error) {
      setSystemStatus((prev) => ({ ...prev, database: "error" }));
    }

    // Check Auth
    setSystemStatus((prev) => ({
      ...prev,
      auth: isAuthenticated ? "authenticated" : "unauthenticated",
    }));
  };

  const handleTestLogin = async () => {
    try {
      const success = await login(
        testCredentials.email,
        testCredentials.password,
      );
      if (success) {
        toast.success("Test login successful!");
      } else {
        toast.error("Test login failed - user may not exist");
      }
    } catch (error) {
      toast.error("Test login error");
    }
  };

  const handleTestRegister = async () => {
    try {
      const success = await register({
        email: testCredentials.email,
        password: testCredentials.password,
        firstName: testCredentials.firstName,
        lastName: testCredentials.lastName,
      });
      if (success) {
        toast.success("Test registration successful!");
      } else {
        toast.error("Test registration failed");
      }
    } catch (error) {
      toast.error("Test registration error");
    }
  };

  const clearAuthData = () => {
    localStorage.removeItem("authToken");
    logout();
    toast.info("Authentication data cleared");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
      case "connected":
      case "authenticated":
        return "text-green-500";
      case "offline":
      case "error":
      case "unauthenticated":
        return "text-red-500";
      case "checking":
      default:
        return "text-yellow-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "online":
      case "connected":
      case "authenticated":
        return <CheckCircle className="h-4 w-4" />;
      case "offline":
      case "error":
      case "unauthenticated":
        return <AlertCircle className="h-4 w-4" />;
      case "checking":
      default:
        return <Clock className="h-4 w-4 animate-spin" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              AgentFlow
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-primary/20">
              <TestTube className="w-3 h-3 mr-1" />
              Authentication Testing
            </Badge>
            <h1 className="text-4xl font-bold">
              AgentFlow
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {" "}
                Auth System
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive registration and login testing environment with
              real-time validation, error handling, and system status
              monitoring.
            </p>
          </div>

          {/* System Status Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                System Status Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Server className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">API Server</p>
                      <p className="text-sm text-muted-foreground">
                        Backend API
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${getStatusColor(systemStatus.api)}`}
                  >
                    {getStatusIcon(systemStatus.api)}
                    <span className="capitalize text-sm font-medium">
                      {systemStatus.api}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium">Database</p>
                      <p className="text-sm text-muted-foreground">SQLite</p>
                    </div>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${getStatusColor(systemStatus.database)}`}
                  >
                    {getStatusIcon(systemStatus.database)}
                    <span className="capitalize text-sm font-medium">
                      {systemStatus.database}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="font-medium">Authentication</p>
                      <p className="text-sm text-muted-foreground">JWT Token</p>
                    </div>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${getStatusColor(systemStatus.auth)}`}
                  >
                    {getStatusIcon(systemStatus.auth)}
                    <span className="capitalize text-sm font-medium">
                      {systemStatus.auth}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={checkSystemStatus}
                  className="flex items-center gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Refresh Status
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowStatusDashboard(!showStatusDashboard)}
                  className="flex items-center gap-2"
                >
                  <TestTube className="h-4 w-4" />
                  {showStatusDashboard ? "Hide" : "Show"} Debug Panel
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Current User Status */}
          {isAuthenticated && user && (
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="h-5 w-5" />
                  Currently Authenticated
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-green-700">User Information</Label>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>
                          {user.firstName} {user.lastName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        <span>ID: {user.id}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-green-700">Account Details</Label>
                    <div className="space-y-2">
                      <Badge variant={user.isHost ? "default" : "secondary"}>
                        {user.isHost ? "Host Account" : "Regular User"}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        Token expires in:{" "}
                        {(() => {
                          const token = localStorage.getItem("authToken");
                          if (token) {
                            try {
                              const payload = JSON.parse(
                                atob(token.split(".")[1]),
                              );
                              const expiry = new Date(payload.exp * 1000);
                              const now = new Date();
                              const diff = expiry.getTime() - now.getTime();
                              const days = Math.floor(
                                diff / (1000 * 60 * 60 * 24),
                              );
                              return `${days} days`;
                            } catch {
                              return "Unknown";
                            }
                          }
                          return "No token";
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => navigate("/dashboard")}
                    className="flex items-center gap-2"
                  >
                    <Settings className="h-4 w-4" />
                    Go to Dashboard
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={logout}
                    className="flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Authentication Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Modal Authentication */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-primary" />
                  Modal Authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Test the enhanced authentication modals with comprehensive
                  validation, password strength checking, and real-time
                  feedback.
                </p>
                <div className="space-y-2">
                  <Button
                    onClick={() => setLoginOpen(true)}
                    className="w-full flex items-center gap-2"
                  >
                    <LogIn className="h-4 w-4" />
                    Open Login Modal
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setRegisterOpen(true)}
                    className="w-full flex items-center gap-2"
                  >
                    <UserPlus className="h-4 w-4" />
                    Open Registration Modal
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Direct API Testing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TestTube className="h-5 w-5 text-green-500" />
                  Direct API Testing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Test authentication directly using predefined credentials.
                  Useful for development and debugging.
                </p>

                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label>Test Credentials</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        placeholder="Email"
                        value={testCredentials.email}
                        onChange={(e) =>
                          setTestCredentials((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                      />
                      <Input
                        placeholder="Password"
                        type="password"
                        value={testCredentials.password}
                        onChange={(e) =>
                          setTestCredentials((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      onClick={handleTestLogin}
                      disabled={loading}
                      className="flex items-center gap-2"
                    >
                      <LogIn className="h-4 w-4" />
                      Test Login
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleTestRegister}
                      disabled={loading}
                      className="flex items-center gap-2"
                    >
                      <UserPlus className="h-4 w-4" />
                      Test Register
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Debug Actions */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <AlertCircle className="h-5 w-5" />
                Debug Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Alert className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  These actions are for development testing only. Use with
                  caution.
                </AlertDescription>
              </Alert>

              <div className="flex gap-2">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={clearAuthData}
                  className="flex items-center gap-2"
                >
                  <AlertCircle className="h-4 w-4" />
                  Clear Auth Data
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.location.reload()}
                  className="flex items-center gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Reload Page
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Features List */}
          <Card>
            <CardHeader>
              <CardTitle>Authentication Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">
                    ✅ Implemented Features
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Email/password authentication with JWT
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Real-time form validation with Zod schema
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Password strength indicator with requirements
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Email availability checking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Comprehensive error handling and user feedback
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Token-based session management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Protected routes and automatic redirects
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      SQLite database with bcrypt password hashing
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">
                    🔄 Future Enhancements
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      OAuth integration (Google, GitHub)
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      Email verification
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      Password reset functionality
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      Two-factor authentication
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      Rate limiting and account lockout
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      Role-based access control
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      Session management with refresh tokens
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Authentication Modals */}
      <AuthModals
        loginOpen={loginOpen}
        registerOpen={registerOpen}
        onLoginOpenChange={setLoginOpen}
        onRegisterOpenChange={setRegisterOpen}
      />

      {/* Debug Status Dashboard */}
      <AuthStatusDashboard visible={showStatusDashboard} />
    </div>
  );
};

export default AuthTest;
