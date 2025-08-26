import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import AuthModals from "@/components/auth/AuthModals";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ArrowRight,
  Bot,
  Zap,
  Shield,
  Users,
  Brain,
  Workflow,
  MessageSquare,
  BarChart3,
  Globe,
  Clock,
  Sparkles,
  ChevronRight,
  PlayCircle,
  Code,
  Database,
  Smartphone,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Features = () => {
  const { t } = useTranslation();
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Header
        variant="default"
        showLanguageToggle={true}
        showAuthButtons={true}
        onLoginClick={() => setLoginOpen(true)}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184)_1px,transparent_0)] bg-[size:20px_20px] opacity-20 h-auto flex-grow" />

        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <Badge
              variant="secondary"
              className="mb-4 bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              {t('features.badge')}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {t('features.title')}
              <span className="text-primary bg-clip-text block">
                {t('features.titleHighlight')}
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('features.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-purple-500/10 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0  opacity-20 h-auto flex-grow" />

        <div className="container relative">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Smartphone className="w-6 h-6 text-primary" />,
                translationKey: 'voice'
              },
              {
                icon: <Database className="w-6 h-6 text-primary" />,
                translationKey: 'ocr'
              },
              {
                icon: <Brain className="w-6 h-6 text-primary" />,
                translationKey: 'context'
              },
              {
                icon: <Globe className="w-6 h-6 text-primary" />,
                translationKey: 'integration'
              },
              {
                icon: <Workflow className="w-6 h-6 text-primary" />,
                translationKey: 'workflows'
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-primary" />,
                translationKey: 'replies'
              },
              {
                icon: <Users className="w-6 h-6 text-primary" />,
                translationKey: 'agents'
              },
              {
                icon: <Shield className="w-6 h-6 text-primary" />,
                translationKey: 'hosting'
              },
              {
                icon: <Clock className="w-6 h-6 text-primary" />,
                translationKey: 'prototype'
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-primary" />,
                translationKey: 'scalable'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-background/60 backdrop-blur-sm rounded-2xl border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {feature.icon}
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {t(`features.list.${feature.translationKey}.title`)}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`features.list.${feature.translationKey}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col items-center space-y-6">
              <h3 className="text-2xl font-semibold">
                {t('features.cta.title')}
              </h3>
              <Button
                size="lg"
                className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-xl hover:shadow-primary/25 transition-all duration-300"
                onClick={() => setRegisterOpen(true)}
              >
                {t('features.cta.button')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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

export default Features;
