import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import LanguageToggle from "./LanguageToggle";
import { Bot, ArrowLeft } from "lucide-react";

interface HeaderProps {
  variant?: "default" | "simple" | "auth";
  showLanguageToggle?: boolean;
  showAuthButtons?: boolean;
  onLoginClick?: () => void;
  customActions?: React.ReactNode;
}

const Header = ({
  variant = "default",
  showLanguageToggle = true,
  showAuthButtons = true,
  onLoginClick,
  customActions,
}: HeaderProps) => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const renderActions = () => {
    if (customActions) {
      return customActions;
    }

    if (variant === "simple") {
      return (
        <Link to="/">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t('header.backHome')}
          </Button>
        </Link>
      );
    }

    return (
      <div className="flex items-center space-x-4">
        {showLanguageToggle && <LanguageToggle />}

        {showAuthButtons && (
          <>
            {user ? (
              <Link to="/dashboard">
                <Button size="sm">
                  {t('header.dashboard')}
                </Button>
              </Link>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onLoginClick}
                >
                  {t('header.signIn')}
                </Button>
              </div>
            )}
          </>
        )}

        {/* Mobile auth buttons for non-logged users */}
        {showAuthButtons && !user && (
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onLoginClick}
            >
              {t('header.signIn')}
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-primary bg-clip-text">
            Alfa Automations
          </span>
        </Link>

        <div className="demo-place hidden md:flex lg:flex items-center justify-center w-full md:w-auto space-x-4">
          <span className="text-red-600 text-sm md:text-base lg:text-xl">This is a test version (demo) of the service.</span>
        </div>

        {renderActions()}
      </div>
    </nav>
  );
};

export default Header;
