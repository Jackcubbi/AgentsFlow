import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import LanguageToggle from "@/components/LanguageToggle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AuthModals from "@/components/auth/AuthModals";
import {
  Bot,
  Check,
  ArrowRight,
  MessageSquare,
  FileText,
  Mic,
  Shield,
  Clock,
  Mail,
  Zap,
  Building2,
  Crown,
} from "lucide-react";

const Pricing = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [isAnnual, setIsAnnual] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const openLoginModal = () => {
    setLoginOpen(true);
  };

  const openRegisterModal = () => {
    setRegisterOpen(true);
  };

  const plans = [
    {
      id: "starter",
      name: t('pricing.plans.starter.name'),
      price: "€149",
      setupFee: "€299",
      description: t('pricing.plans.starter.description'),
      icon: Bot,
      color: "from-blue-500 to-blue-600",
      features: [
        { icon: Bot, text: t('pricing.plans.starter.features.assistants') },
        { icon: MessageSquare, text: t('pricing.plans.starter.features.messages') },
        { icon: FileText, text: t('pricing.plans.starter.features.ocr') },
        { icon: Mic, text: t('pricing.plans.starter.features.voice') },
        { icon: Clock, text: t('pricing.plans.starter.features.logs') },
        { icon: Mail, text: t('pricing.plans.starter.features.support') },
      ],
      buttonText: t('pricing.getStarted'),
      popular: false,
    },
    {
      id: "pro",
      name: t('pricing.plans.pro.name'),
      price: "€349",
      setupFee: "€599",
      description: t('pricing.plans.pro.description'),
      icon: Zap,
      color: "from-green-500 to-green-600",
      features: [
        { icon: Bot, text: t('pricing.plans.pro.features.assistants') },
        { icon: MessageSquare, text: t('pricing.plans.pro.features.messages') },
        { icon: FileText, text: t('pricing.plans.pro.features.ocr') },
        { icon: Mic, text: t('pricing.plans.pro.features.voice') },
        { icon: Building2, text: t('pricing.plans.pro.features.integrations') },
        { icon: Zap, text: t('pricing.plans.pro.features.support') },
        { icon: Clock, text: t('pricing.plans.pro.features.logs') },
      ],
      buttonText: t('pricing.upgrade'),
      popular: true,
    },
    {
      id: "business",
      name: t('pricing.plans.business.name'),
      price: "€749",
      setupFee: "€999",
      description: t('pricing.plans.business.description'),
      icon: Building2,
      color: "from-purple-500 to-purple-600",
      features: [
        { icon: Bot, text: t('pricing.plans.business.features.assistants') },
        { icon: MessageSquare, text: t('pricing.plans.business.features.messages') },
        { icon: FileText, text: t('pricing.plans.business.features.ocr') },
        { icon: Mic, text: t('pricing.plans.business.features.voice') },
        { icon: Shield, text: t('pricing.plans.business.features.sla') },
        { icon: Building2, text: t('pricing.plans.business.features.webhooks') },
        { icon: Clock, text: t('pricing.plans.business.features.logs') },
      ],
      buttonText: t('pricing.upgrade'),
      popular: false,
    },
    {
      id: "enterprise",
      name: t('pricing.plans.enterprise.name'),
      price: t('pricing.plans.enterprise.price'),
      setupFee: t('pricing.plans.enterprise.setupFee'),
      description: t('pricing.plans.enterprise.description'),
      icon: Crown,
      color: "from-orange-500 to-red-600",
      features: [
        { icon: Shield, text: t('pricing.plans.enterprise.features.deployment') },
        { icon: Building2, text: t('pricing.plans.enterprise.features.sso') },
        { icon: FileText, text: t('pricing.plans.enterprise.features.audit') },
        { icon: Shield, text: t('pricing.plans.enterprise.features.dpa') },
        { icon: Zap, text: t('pricing.plans.enterprise.features.sla') },
        { icon: Crown, text: t('pricing.plans.enterprise.features.quotas') },
      ],
      buttonText: t('pricing.contactSales'),
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Header
        variant="default"
        showLanguageToggle={false}
        showAuthButtons={true}
        onLoginClick={openLoginModal}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-purple-500/10">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="border-primary/20 bg-primary/5">
              <Crown className="w-3 h-3 mr-1" />
              {t('pricing.badge')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {t('pricing.title')}
              <span className="block bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t('pricing.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('pricing.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <Card
                  key={plan.id}
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                    plan.popular
                      ? 'border-primary shadow-lg scale-105 bg-gradient-to-br from-background to-primary/5'
                      : 'hover:scale-105'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-purple-600 text-white text-xs font-semibold text-center py-2">
                      {t('pricing.mostPopular')}
                    </div>
                  )}

                  <CardHeader className={plan.popular ? "pt-8" : ""}>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        {plan.id !== 'enterprise' && <span className="text-muted-foreground">/mo</span>}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t('pricing.setupFee')}: {plan.setupFee}
                      </p>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      {plan.features.map((feature, index) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div key={index} className="flex items-start space-x-3">
                            <FeatureIcon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90'
                          : ''
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Overage Information */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-secondary/20 to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  {t('pricing.overage.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <MessageSquare className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <div className="font-semibold">+1,000 {t('pricing.overage.messages')}</div>
                    <div className="text-primary font-bold">€19</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <FileText className="h-8 w-8 mx-auto mb-2 text-green-500" />
                    <div className="font-semibold">+100 {t('pricing.overage.ocrPages')}</div>
                    <div className="text-primary font-bold">€9</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <Mic className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                    <div className="font-semibold">+60 {t('pricing.overage.voiceMin')}</div>
                    <div className="text-primary font-bold">€15</div>
                  </div>
                </div>
                <Separator />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('pricing.overage.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="mt-12 max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">{t('pricing.hosting.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('pricing.hosting.description')}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-green-600" />
                  <h3 className="font-semibold mb-2">{t('pricing.reports.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('pricing.reports.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t('pricing.cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('pricing.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600">
                {t('pricing.cta.getStarted')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                {t('pricing.cta.contactSales')}
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

export default Pricing;
