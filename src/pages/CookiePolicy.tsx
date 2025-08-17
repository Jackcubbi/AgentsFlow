import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Bot,
  ArrowLeft,
  Calendar,
  FileText,
  Cookie,
  AlertTriangle,
  CheckCircle,
  Mail,
  Settings,
  Eye,
  Shield,
  Globe,
  BarChart,
  Target,
  RefreshCw,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AuthModals from "@/components/auth/AuthModals";

const CookiePolicy = () => {
  const { t } = useTranslation();
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  // Helper function to safely get translation arrays
  const getTranslationArray = (key: string): string[] => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result : [];
  };

  // Helper function to safely split and extract retention period values
  const getRetentionValue = (key: string): string => {
    const translation = t(key);
    if (typeof translation === 'string' && translation.includes(':')) {
      const parts = translation.split(':');
      return parts.length > 1 ? parts[1].trim() : translation;
    }
    return translation || '';
  };

  // Helper function to safely extract retention period labels
  const getRetentionLabel = (key: string): string => {
    const translation = t(key);
    if (typeof translation === 'string' && translation.includes(':')) {
      const parts = translation.split(':');
      return parts[0];
    }
    return translation || '';
  };

  const openLoginModal = () => {
    setLoginOpen(true);
  };

  const openRegisterModal = () => {
    setRegisterOpen(true);
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Header
        variant="default"
        showLanguageToggle={false}
        showAuthButtons={true}
        onLoginClick={openLoginModal}
      />

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-purple-500/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="border-primary/20">
              <Cookie className="w-3 h-3 mr-1" />
              {t('cookies.badge')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('cookies.title')}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {" "}
                {t('cookies.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('cookies.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{t('cookies.lastUpdated')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>{t('cookies.version')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Cookie Notice */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Cookie className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">
                      {t('cookies.notice.title')}
                    </h3>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      {t('cookies.notice.content')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Are Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cookie className="h-5 w-5 text-primary" />
                  1. {t('cookies.sections.whatAreCookies.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t('cookies.sections.whatAreCookies.content')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">{t('cookies.sections.whatAreCookies.types.session.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('cookies.sections.whatAreCookies.types.session.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">{t('cookies.sections.whatAreCookies.types.persistent.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('cookies.sections.whatAreCookies.types.persistent.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">{t('cookies.sections.whatAreCookies.types.firstParty.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('cookies.sections.whatAreCookies.types.firstParty.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">{t('cookies.sections.whatAreCookies.types.thirdParty.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('cookies.sections.whatAreCookies.types.thirdParty.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Types of Cookies We Use */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  2. {t('cookies.sections.cookieTypes.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Essential Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-red-600" />
                    <h4 className="font-semibold text-red-800">
                      {t('cookies.sections.cookieTypes.essential.title')}
                    </h4>
                    <Badge variant="destructive" className="text-xs">
                      {t('cookies.sections.cookieTypes.essential.required')}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('cookies.sections.cookieTypes.essential.description')}
                  </p>
                  <div className="ml-6 space-y-2 text-sm text-muted-foreground">
                    {getTranslationArray('cookies.sections.cookieTypes.essential.examples').map((item: string, index: number) => (
                      <p key={index}>• {item}</p>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Performance Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <BarChart className="h-4 w-4 text-blue-600" />
                    <h4 className="font-semibold text-blue-800">
                      {t('cookies.sections.cookieTypes.performance.title')}
                    </h4>
                    <Badge variant="secondary" className="text-xs">
                      {t('cookies.sections.cookieTypes.performance.optional')}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('cookies.sections.cookieTypes.performance.description')}
                  </p>
                  <div className="ml-6 space-y-2 text-sm text-muted-foreground">
                    {getTranslationArray('cookies.sections.cookieTypes.performance.examples').map((item: string, index: number) => (
                      <p key={index}>• {item}</p>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Functional Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-green-600" />
                    <h4 className="font-semibold text-green-800">
                      {t('cookies.sections.cookieTypes.functional.title')}
                    </h4>
                    <Badge variant="secondary" className="text-xs">
                      {t('cookies.sections.cookieTypes.functional.optional')}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('cookies.sections.cookieTypes.functional.description')}
                  </p>
                  <div className="ml-6 space-y-2 text-sm text-muted-foreground">
                    {getTranslationArray('cookies.sections.cookieTypes.functional.examples').map((item: string, index: number) => (
                      <p key={index}>• {item}</p>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Marketing Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-purple-600" />
                    <h4 className="font-semibold text-purple-800">
                      {t('cookies.sections.cookieTypes.marketing.title')}
                    </h4>
                    <Badge variant="secondary" className="text-xs">
                      {t('cookies.sections.cookieTypes.marketing.optional')}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('cookies.sections.cookieTypes.marketing.description')}
                  </p>
                  <div className="ml-6 space-y-2 text-sm text-muted-foreground">
                    {getTranslationArray('cookies.sections.cookieTypes.marketing.examples').map((item: string, index: number) => (
                      <p key={index}>• {item}</p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  3. {t('cookies.sections.thirdPartyServices.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t('cookies.sections.thirdPartyServices.intro')}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">{t('cookies.sections.thirdPartyServices.services.googleAnalytics.title')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('cookies.sections.thirdPartyServices.services.googleAnalytics.description')}
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">{t('cookies.sections.thirdPartyServices.services.stripe.title')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('cookies.sections.thirdPartyServices.services.stripe.description')}
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">{t('cookies.sections.thirdPartyServices.services.intercom.title')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('cookies.sections.thirdPartyServices.services.intercom.description')}
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">{t('cookies.sections.thirdPartyServices.services.linkedinInsight.title')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('cookies.sections.thirdPartyServices.services.linkedinInsight.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Managing Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  4. {t('cookies.sections.managingCookies.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t('cookies.sections.managingCookies.intro')}
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t('cookies.sections.managingCookies.methods.consentBanner.title')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t('cookies.sections.managingCookies.methods.consentBanner.description')}
                    </p>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Settings className="h-4 w-4 text-blue-600" />
                      {t('cookies.sections.managingCookies.methods.accountSettings.title')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t('cookies.sections.managingCookies.methods.accountSettings.description')}
                    </p>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Globe className="h-4 w-4 text-purple-600" />
                      {t('cookies.sections.managingCookies.methods.browserSettings.title')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t('cookies.sections.managingCookies.methods.browserSettings.description')}
                    </p>
                  </div>
                </div>

                <Card className="border-orange-200 bg-orange-50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-orange-800 text-sm mb-1">
                          {t('cookies.sections.managingCookies.importantNote.title')}
                        </h4>
                        <p className="text-orange-700 text-xs leading-relaxed">
                          {t('cookies.sections.managingCookies.importantNote.content')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* Cookie Retention */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-primary" />
                  5. {t('cookies.sections.cookieRetention.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">{t('cookies.sections.cookieRetention.retentionPeriods.title')}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {getRetentionLabel('cookies.sections.cookieRetention.retentionPeriods.sessionCookies')}:
                        </span>
                        <span className="font-medium">
                          {getRetentionValue('cookies.sections.cookieRetention.retentionPeriods.sessionCookies')}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {getRetentionLabel('cookies.sections.cookieRetention.retentionPeriods.authentication')}:
                        </span>
                        <span className="font-medium">{getRetentionValue('cookies.sections.cookieRetention.retentionPeriods.authentication')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {getRetentionLabel('cookies.sections.cookieRetention.retentionPeriods.preferences')}:
                        </span>
                        <span className="font-medium">{getRetentionValue('cookies.sections.cookieRetention.retentionPeriods.preferences')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {getRetentionLabel('cookies.sections.cookieRetention.retentionPeriods.analytics')}:
                        </span>
                        <span className="font-medium">{getRetentionValue('cookies.sections.cookieRetention.retentionPeriods.analytics')}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">{t('cookies.sections.cookieRetention.policyUpdates.title')}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('cookies.sections.cookieRetention.policyUpdates.content')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  6. {t('cookies.sections.contact.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t('cookies.sections.contact.intro')}
                </p>
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">{t('cookies.sections.contact.privacyTeam.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('cookies.sections.contact.privacyTeam.email')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bot className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">{t('cookies.sections.contact.dpo.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('cookies.sections.contact.dpo.email')}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('cookies.sections.contact.responseTime')}
                </p>
              </CardContent>
            </Card>

            {/* Related Policies */}
            <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">{t('cookies.sections.relatedPolicies.title')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    to="/privacy-policy"
                    className="flex items-center gap-3 p-3 bg-background rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{t('cookies.sections.relatedPolicies.privacyPolicy.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('cookies.sections.relatedPolicies.privacyPolicy.description')}
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/terms"
                    className="flex items-center gap-3 p-3 bg-background rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{t('cookies.sections.relatedPolicies.termsOfService.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('cookies.sections.relatedPolicies.termsOfService.description')}
                      </p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
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

export default CookiePolicy;
