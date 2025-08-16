import { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import NotificationsDropdown from "@/components/notifications/NotificationsDropdown";
import {
  Bot,
  BarChart3,
  CreditCard,
  Settings,
  User,
  LogOut,
  ChevronDown,
  Home,
  Menu,
  Users,
  Key,
  HelpCircle,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  activeTab?: string;
}

const DashboardLayout = ({ children, activeTab }: DashboardLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
      current: location.pathname === "/dashboard",
    },
    {
      name: "Usage & Analytics",
      href: "/dashboard/usage",
      icon: BarChart3,
      current: location.pathname === "/dashboard/usage",
    },
    {
      name: "Billing",
      href: "/dashboard/billing",
      icon: CreditCard,
      current: location.pathname === "/dashboard/billing",
    },
    {
      name: "Team",
      href: "/dashboard/team",
      icon: Users,
      current: location.pathname === "/dashboard/team",
    },
    {
      name: "API Keys",
      href: "/dashboard/api-keys",
      icon: Key,
      current: location.pathname === "/dashboard/api-keys",
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      current: location.pathname === "/dashboard/settings",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Alfa Automations
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <NotificationsDropdown />

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-3"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-white">
                      {user?.firstName?.[0] || "U"}
                      {user?.lastName?.[0] || ""}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => navigate("/dashboard/settings")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigate("/dashboard/billing")}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help & Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-muted/30 border-r min-h-[calc(100vh-4rem)] p-4">
          <nav className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  item.current
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Quick Stats */}
          <div className="mt-8 p-4 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-lg border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Current Plan</span>
            </div>
            <p className="text-lg font-bold text-primary">Professional</p>
            <p className="text-xs text-muted-foreground">
              18,547 / 25,000 conversations used
            </p>
            <div className="w-full bg-secondary rounded-full h-2 mt-2">
              <div
                className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full"
                style={{ width: "74%" }}
              ></div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
