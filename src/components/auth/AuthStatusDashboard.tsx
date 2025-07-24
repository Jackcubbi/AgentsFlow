import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/contexts/AuthContext";
import {
  User,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  LogIn,
  LogOut,
  UserPlus,
  Settings,
  Database,
  Server,
} from "lucide-react";

interface AuthStatusDashboardProps {
  visible?: boolean;
}

const AuthStatusDashboard = ({ visible = false }: AuthStatusDashboardProps) => {
  const { user, isAuthenticated, loading, logout } = useAuth();
  const [serverStatus, setServerStatus] = useState<
    "checking" | "online" | "offline"
  >("checking");
  const [dbStatus, setDbStatus] = useState<"checking" | "connected" | "error">(
    "checking",
  );
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    checkServerStatus();
    checkDatabaseStatus();
    setAuthToken(localStorage.getItem("authToken"));
  }, []);

  const checkServerStatus = async () => {
    try {
      const response = await fetch("/api/health");
      if (response.ok) {
        setServerStatus("online");
      } else {
        setServerStatus("offline");
      }
    } catch (error) {
      setServerStatus("offline");
    }
  };

  const checkDatabaseStatus = async () => {
    try {
      const response = await fetch("/api/db-status");
      if (response.ok) {
        setDbStatus("connected");
      } else {
        setDbStatus("error");
      }
    } catch (error) {
      setDbStatus("error");
    }
  };

  const formatTokenPayload = (token: string) => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return {
        userId: payload.id,
        email: payload.email,
        isHost: payload.isHost,
        issuedAt: new Date(payload.iat * 1000).toLocaleString(),
        expiresAt: new Date(payload.exp * 1000).toLocaleString(),
      };
    } catch (error) {
      return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
      case "connected":
        return "text-green-500";
      case "offline":
      case "error":
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
        return <CheckCircle className="h-4 w-4" />;
      case "offline":
      case "error":
        return <AlertCircle className="h-4 w-4" />;
      case "checking":
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 space-y-4">
      {/* Authentication Status */}
      <Card className="border-primary/20 bg-background/95 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            Authentication Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Status:</span>
            <Badge
              variant={isAuthenticated ? "default" : "secondary"}
              className="text-xs"
            >
              {loading ? (
                <>
                  <Clock className="h-3 w-3 mr-1" />
                  Loading...
                </>
              ) : isAuthenticated ? (
                <>
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Authenticated
                </>
              ) : (
                <>
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Not Authenticated
                </>
              )}
            </Badge>
          </div>

          {user && (
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <User className="h-3 w-3" />
                <span>
                  {user.firstName} {user.lastName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>Email:</span>
                <span className="font-mono">{user.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>ID:</span>
                <span className="font-mono">{user.id}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Host:</span>
                <Badge
                  variant={user.isHost ? "default" : "secondary"}
                  className="text-xs"
                >
                  {user.isHost ? "Yes" : "No"}
                </Badge>
              </div>
            </div>
          )}

          {authToken && (
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span>Token:</span>
                <span className="font-mono text-xs truncate">
                  {authToken.substring(0, 20)}...
                </span>
              </div>
              {(() => {
                const payload = formatTokenPayload(authToken);
                return payload ? (
                  <div className="space-y-1 pl-4 border-l-2 border-primary/20">
                    <div>Issued: {payload.issuedAt}</div>
                    <div>Expires: {payload.expiresAt}</div>
                  </div>
                ) : (
                  <div className="text-red-500">Invalid token format</div>
                );
              })()}
            </div>
          )}

          {isAuthenticated && (
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="w-full text-xs"
            >
              <LogOut className="h-3 w-3 mr-1" />
              Logout
            </Button>
          )}
        </CardContent>
      </Card>

      {/* System Status */}
      <Card className="border-blue-200 bg-background/95 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Settings className="h-4 w-4 text-blue-500" />
            System Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Server className="h-3 w-3" />
              <span className="text-sm">API Server:</span>
            </div>
            <div
              className={`flex items-center gap-1 text-sm ${getStatusColor(serverStatus)}`}
            >
              {getStatusIcon(serverStatus)}
              <span className="capitalize">{serverStatus}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="h-3 w-3" />
              <span className="text-sm">Database:</span>
            </div>
            <div
              className={`flex items-center gap-1 text-sm ${getStatusColor(dbStatus)}`}
            >
              {getStatusIcon(dbStatus)}
              <span className="capitalize">{dbStatus}</span>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            <div>API: http://localhost:3001</div>
            <div>DB: SQLite (database.sqlite)</div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              checkServerStatus();
              checkDatabaseStatus();
            }}
            className="w-full text-xs"
          >
            Refresh Status
          </Button>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border-green-200 bg-background/95 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <UserPlus className="h-4 w-4 text-green-500" />
            Quick Test Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Alert className="p-2">
            <AlertDescription className="text-xs">
              Use these actions to test the authentication system during
              development.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => {
                // Test login with demo credentials
                console.log("Test login triggered");
              }}
            >
              <LogIn className="h-3 w-3 mr-1" />
              Test Login
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => {
                // Clear all auth data
                localStorage.removeItem("authToken");
                window.location.reload();
              }}
            >
              Clear Auth
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthStatusDashboard;
