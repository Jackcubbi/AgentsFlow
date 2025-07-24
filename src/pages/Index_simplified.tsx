import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AuthModals from "@/components/auth/AuthModals";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ArrowRight,
  Bot,
  Sparkles,
  ArrowUp,
  Mic,
} from "lucide-react";

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [showToTop, setShowToTop] = useState(false);

  // Redirect logged-in users to dashboard
  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  // Handle scroll to show/hide "To top" button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowToTop(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openLoginModal = () => {
    setLoginOpen(true);
  };

  const openRegisterModal = () => {
    setRegisterOpen(true);
  };

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-purple-600">
            <Bot className="h-8 w-8 text-white animate-pulse" />
          </div>
          <h2 className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            AgentFlow
          </h2>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between -mt-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              AgentFlow
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <Button variant="outline" size="sm" onClick={openLoginModal}>
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-purple-600"
              onClick={openRegisterModal}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu for Authentication */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={openLoginModal}>
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-purple-600"
              onClick={openRegisterModal}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-purple-500/10">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184)_1px,transparent_0)] bg-[size:20px_20px] opacity-20 h-auto flex-grow" />

        <div className="container relative flex flex-col justify-start items-center pt-5 pb-8">
          {/* Section Label */}
          <div className="text-center mb-5">
            <Badge
              variant="outline"
              className="text-xs uppercase tracking-wider border-primary/30 bg-primary/5 text-primary font-mono"
            >
              <Bot className="w-3 h-3 mr-2" />
              AI AUTOMATION PLATFORM
            </Badge>
          </div>

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto text-center space-y-12">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
                <div className="block">AI agents for</div>
                <div className="block bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  your business
                </div>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Deploy intelligent AI agents that handle customer support,
                automate workflows, and scale your operations 24/7. The most
                powerful platform for business automation.
              </p>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
              <Button
                size="lg"
                className="h-16 px-12 text-base font-semibold bg-gradient-to-r from-primary to-purple-600 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 rounded-full uppercase tracking-wide"
                onClick={openRegisterModal}
              >
                Sign Up
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-12 text-base font-semibold border-2 border-primary/20 hover:bg-primary/5 rounded-full uppercase tracking-wide"
              >
                Read the docs
              </Button>
            </div>

            {/* Interactive Demo Section */}
            <div className="relative pt-5">
              <div className="max-w-4xl mx-auto">
                {/* Demo Button */}
                <div className="relative inline-block">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-20 px-16 text-lg font-semibold bg-gradient-to-r from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 text-gray-900 rounded-full shadow-2xl border-2 border-amber-200/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-4">
                      <span>Talk to AgentFlow Free</span>
                      <div className="relative">
                        <Mic className="h-6 w-6" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full animate-ping opacity-20"></div>
                      </div>
                    </div>
                  </Button>

                  {/* Audio Visualization */}
                  <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div className="flex items-end gap-1 opacity-30">
                      {[...Array(40)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-primary to-purple-600 rounded-full animate-pulse"
                          style={{
                            width: "3px",
                            height: `${Math.random() * 60 + 20}px`,
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: `${Math.random() * 2 + 1}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ARCHIVED SECTIONS - Uncomment as needed */}
      {/* 
      
      STATS SECTION:
      <section className="py-16 bg-gradient-to-r from-primary/5 to-purple-500/5 border-y border-primary/10">
        Stats content...
      </section>

      FEATURES SECTION:
      <section id="features" className="py-20">
        Features content...
      </section>

      PRICING SECTION:
      <section id="pricing" className="py-20 bg-gradient-to-br from-secondary/30 to-primary/5">
        Pricing content...
      </section>

      TESTIMONIALS SECTION:
      <section id="testimonials" className="py-20">
        Testimonials content...
      </section>

      AUTH DEMO SECTION:
      <AuthDemo />

      CTA SECTION:
      <section className="py-20 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background relative overflow-hidden">
        CTA content...
      </section>

      */}

      {/* Footer */}
      <footer className="border-t bg-gradient-to-br from-secondary/30 to-background">
        <div className="container py-16">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  AgentFlow
                </span>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Intelligent AI agents for business automation and growth.
                Transform your operations with enterprise-grade AI that scales.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 AgentFlow. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie-policy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating "To Top" Button */}
      {showToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
          size="icon"
        >
          <ArrowUp className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
          <span className="sr-only">Scroll to top</span>
        </Button>
      )}

      {/* Authentication Modals */}
      <AuthModals
        loginOpen={loginOpen}
        registerOpen={registerOpen}
        onLoginOpenChange={setLoginOpen}
        onRegisterOpenChange={setRegisterOpen}
      />
    </div>
  );
};

export default Index;
