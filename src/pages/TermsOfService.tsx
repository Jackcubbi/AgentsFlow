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
  Shield,
  AlertTriangle,
  CheckCircle,
  Mail,
  Scale,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AuthModals from "@/components/auth/AuthModals";

const TermsOfService = () => {
  const { t } = useTranslation();
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  // Helper function to safely get translation arrays
  const getTranslationArray = (key: string): string[] => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result : [];
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
        showLanguageToggle={true}
        showAuthButtons={true}
        onLoginClick={openLoginModal}
      />

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-purple-500/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="border-primary/20">
              <Scale className="w-3 h-3 mr-1" />
              {t('terms.badge')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('terms.title')}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {" "}
                {t('terms.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('terms.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{t('terms.lastUpdated')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>{t('terms.version')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Important Notice */}
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-2">
                      {t('terms.importantNotice.title')}
                    </h3>
                    <p className="text-orange-700 text-sm leading-relaxed">
                      {t('terms.importantNotice.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 1: Acceptance of Terms */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  1
                </div>
                {t('terms.sections.acceptance.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('terms.sections.acceptance.content1')}
                </p>
                <p>
                  {t('terms.sections.acceptance.content2')}
                </p>
              </div>
            </div>

            <Separator />

            {/* Section 2: Description of Services */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  2
                </div>
                {t('terms.sections.description.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('terms.sections.description.content1')}
                </p>
                <ul className="space-y-2">
                  {getTranslationArray('terms.sections.description.features').map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator />

            {/* Section 3: User Accounts and Registration */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  3
                </div>
                {t('terms.sections.accounts.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('terms.sections.accounts.content1')}
                </p>
                <ul className="space-y-2">
                  {getTranslationArray('terms.sections.accounts.requirements').map((requirement: string, index: number) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
                <p>
                  {t('terms.sections.accounts.content2')}
                </p>
              </div>
            </div>

            <Separator />

            {/* Section 4: Acceptable Use Policy */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  4
                </div>
                {t('terms.sections.acceptableUse.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>{t('terms.sections.acceptableUse.content1')}</p>
                <ul className="space-y-1">
                  {getTranslationArray('terms.sections.acceptableUse.prohibited').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator />

            {/* Section 5: Subscription and Billing */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  5
                </div>
                {t('terms.sections.billing.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('terms.sections.billing.content1')}
                </p>
                <ul className="space-y-1">
                  {getTranslationArray('terms.sections.billing.agreements').map((agreement: string, index: number) => (
                    <li key={index}>{agreement}</li>
                  ))}
                </ul>
                <p>
                  {t('terms.sections.billing.content2')}
                </p>
              </div>
            </div>

            <Separator />

            {/* Section 6: Data and Privacy */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  6
                </div>
                {t('terms.sections.dataPrivacy.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('terms.sections.dataPrivacy.content1')}
                </p>
                <p>
                  {t('terms.sections.dataPrivacy.content2')}
                </p>
                <p>
                  {t('terms.sections.dataPrivacy.content3')}
                </p>
              </div>
            </div>

            <Separator />

            {/* Section 7: Intellectual Property */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  7
                </div>
                {t('terms.sections.intellectualProperty.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('terms.sections.intellectualProperty.content1')}
                </p>
                <p>
                  {t('terms.sections.intellectualProperty.content2')}
                </p>
                <ul className="space-y-1">
                  {getTranslationArray('terms.sections.intellectualProperty.restrictions').map((restriction: string, index: number) => (
                    <li key={index}>{restriction}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator />

            {/* Section 8: Limitation of Liability */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  8
                </div>
                {t('terms.sections.liability.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('terms.sections.liability.content1')}
                </p>
                <p>
                  {t('terms.sections.liability.content2')}
                </p>
              </div>
            </div>

            <Separator />

            {/* Section 9: Termination */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  9
                </div>
                {t('terms.sections.termination.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('terms.sections.termination.content1')}
                </p>
                <p>
                  {t('terms.sections.termination.content2')}
                </p>
              </div>
            </div>

            <Separator />

            {/* Section 10: Changes to Terms */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  10
                </div>
                {t('terms.sections.changes.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('terms.sections.changes.content1')}
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Ota yhteyttä
                </CardTitle>
                <CardDescription>
                  Kysymyksiä näistä ehdoista? Olemme täällä auttamassa.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Jos sinulla on kysymyksiä näistä käyttöehdoista, ota yhteyttä:
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Sähköposti:</strong> info@alfa-automations.com
                  </p>
                  <p>
                    <strong>Osoite:</strong> Alfaliike Oy, Lakaksenkuja 6, 49270 Pyhtää, Suomi
                  </p>
                  <p>
                    <strong>Puhelin:</strong> +358 50 123 4567
                  </p>
                </div>
                <Link to="/privacy-policy">
                  <Button variant="outline" className="w-full">
                    <Shield className="mr-2 h-4 w-4" />
                    Näytä tietosuojakäytäntö
                  </Button>
                </Link>
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

export default TermsOfService;
