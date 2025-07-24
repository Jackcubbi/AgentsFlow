import { useState } from "react";
import EnhancedLoginModal from "./EnhancedLoginModal";
import EnhancedRegisterModal from "./EnhancedRegisterModal";

interface AuthModalsProps {
  loginOpen: boolean;
  registerOpen: boolean;
  onLoginOpenChange: (open: boolean) => void;
  onRegisterOpenChange: (open: boolean) => void;
}

const AuthModals = ({
  loginOpen,
  registerOpen,
  onLoginOpenChange,
  onRegisterOpenChange,
}: AuthModalsProps) => {
  const handleSwitchToRegister = () => {
    onLoginOpenChange(false);
    setTimeout(() => onRegisterOpenChange(true), 200);
  };

  const handleSwitchToLogin = () => {
    onRegisterOpenChange(false);
    setTimeout(() => onLoginOpenChange(true), 200);
  };

  return (
    <>
      <EnhancedLoginModal
        open={loginOpen}
        onOpenChange={onLoginOpenChange}
        onSwitchToRegister={handleSwitchToRegister}
      />
      <EnhancedRegisterModal
        open={registerOpen}
        onOpenChange={onRegisterOpenChange}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  );
};

export default AuthModals;
