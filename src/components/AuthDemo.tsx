import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthModals from "@/components/auth/AuthModals";
import {
  MousePointer,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Zap,
  Shield,
} from "lucide-react";

const AuthDemo = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-primary/5">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Choose Your
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {" "}
              Authentication Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AgentFlow offers flexible authentication options - quick modals for
            seamless experience or dedicated pages for focused interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Modal Option */}
          <Card className="relative bg-background border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <MousePointer className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Quick Modals</CardTitle>
              <CardDescription className="text-base">
                Fast, seamless authentication without leaving the page
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Instant access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">No page reload</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Maintains context</span>
                </li>
              </ul>

              <div className="space-y-3">
                <Button
                  onClick={() => setLoginOpen(true)}
                  className="w-full bg-gradient-to-r from-primary to-purple-600"
                >
                  Try Login Modal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  onClick={() => setRegisterOpen(true)}
                  variant="outline"
                  className="w-full border-primary/20 hover:bg-primary/5"
                >
                  Try Register Modal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Page Option */}
          <Card className="relative bg-background border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                <ExternalLink className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Dedicated Pages</CardTitle>
              <CardDescription className="text-base">
                Full-screen focused experience for complex forms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Zap className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">More space for details</span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">Better mobile experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">Dedicated focus</span>
                </li>
              </ul>

              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600"
                >
                  <Link to="/login">
                    Visit Login Page
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-500/20 hover:bg-blue-500/5"
                >
                  <Link to="/register">
                    Visit Register Page
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Both options provide the same secure authentication experience with
            AgentFlow's AI-powered platform
          </p>
        </div>
      </div>

      {/* Modal Components */}
      <AuthModals
        loginOpen={loginOpen}
        registerOpen={registerOpen}
        onLoginOpenChange={setLoginOpen}
        onRegisterOpenChange={setRegisterOpen}
      />
    </section>
  );
};

export default AuthDemo;
