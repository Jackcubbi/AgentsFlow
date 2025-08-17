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
  Lock,
  Eye,
  Database,
  Globe,
  Settings,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AuthModals from "@/components/auth/AuthModals";

const PrivacyPolicy = () => {
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
              <Shield className="w-3 h-3 mr-1" />
              {t('privacy.badge')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('privacy.title')}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {" "}
                {t('privacy.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('privacy.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{t('privacy.lastUpdated')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>{t('privacy.version')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Privacy Commitment */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">
                      {t('privacy.introduction.title')}
                    </h3>
                    <p className="text-green-700 text-sm leading-relaxed">
                      {t('privacy.introduction.content')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 1: Data We Collect */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  1
                </div>
                {t('privacy.sections.dataCollection.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('privacy.sections.dataCollection.intro')}
                </p>

                <h4 className="font-semibold mt-6 mb-3 flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  {t('privacy.sections.dataCollection.directInfo.title')}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t('privacy.sections.dataCollection.directInfo.subtitle')}
                </p>
                <ul className="space-y-2">
                  {getTranslationArray('privacy.sections.dataCollection.directInfo.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3 flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  {t('privacy.sections.dataCollection.accountInfo.title')}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t('privacy.sections.dataCollection.accountInfo.subtitle')}
                </p>
                <ul className="space-y-2">
                  {getTranslationArray('privacy.sections.dataCollection.accountInfo.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3 flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  {t('privacy.sections.dataCollection.integrationData.title')}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t('privacy.sections.dataCollection.integrationData.subtitle')}
                </p>
                <ul className="space-y-2">
                  {getTranslationArray('privacy.sections.dataCollection.integrationData.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3 flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  {t('privacy.sections.dataCollection.usageData.title')}
                </h4>
                <ul className="space-y-2">
                  {getTranslationArray('privacy.sections.dataCollection.usageData.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator />

            {/* Section 2: Purpose and Legal Basis for Processing */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  2
                </div>
                {t('privacy.sections.processingPurpose.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('privacy.sections.processingPurpose.intro')}
                </p>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.processingPurpose.serviceProvision.title')}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t('privacy.sections.processingPurpose.serviceProvision.legalBasis')}</p>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.processingPurpose.serviceProvision.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.processingPurpose.communications.title')}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t('privacy.sections.processingPurpose.communications.legalBasis')}</p>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.processingPurpose.communications.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.processingPurpose.integrations.title')}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t('privacy.sections.processingPurpose.integrations.legalBasis')}</p>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.processingPurpose.integrations.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.processingPurpose.compliance.title')}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t('privacy.sections.processingPurpose.compliance.legalBasis')}</p>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.processingPurpose.compliance.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.processingPurpose.security.title')}</h4>
                <p className="text-sm text-muted-foreground mb-2">{t('privacy.sections.processingPurpose.security.legalBasis')}</p>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.processingPurpose.security.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator />

            {/* Section 3: Data Sharing and Third-Party Integrations */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  3
                </div>
                {t('privacy.sections.dataSharing.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('privacy.sections.dataSharing.intro')}
                </p>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.dataSharing.serviceProviders.title')}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t('privacy.sections.dataSharing.serviceProviders.subtitle')}
                </p>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.dataSharing.serviceProviders.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.dataSharing.businessClients.title')}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t('privacy.sections.dataSharing.businessClients.subtitle')}
                </p>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.dataSharing.businessClients.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.dataSharing.legalRequirements.title')}</h4>
                <p>{t('privacy.sections.dataSharing.legalRequirements.subtitle')}</p>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.dataSharing.legalRequirements.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.dataSharing.corporateTransactions.title')}</h4>
                <p>
                  {t('privacy.sections.dataSharing.corporateTransactions.content')}
                </p>
              </div>
            </div>

            <Separator />

            {/* Section 4: Data Storage and International Transfers */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  4
                </div>
                {t('privacy.sections.dataStorage.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.dataStorage.storageLocations.title')}</h4>
                <p>
                  {t('privacy.sections.dataStorage.storageLocations.intro')}
                </p>
                <ul className="space-y-2">
                  {getTranslationArray('privacy.sections.dataStorage.storageLocations.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Database className="h-4 w-4 text-blue-500 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.dataStorage.internationalTransfers.title')}</h4>
                <p>
                  {t('privacy.sections.dataStorage.internationalTransfers.intro')}
                </p>
                <ul className="space-y-2">
                  {getTranslationArray('privacy.sections.dataStorage.internationalTransfers.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-muted-foreground mt-4">
                  {t('privacy.sections.dataStorage.note')}
                </p>
              </div>
            </div>

            <Separator />

            {/* Section 5: Data Security */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  5
                </div>
                {t('privacy.sections.dataSecurity.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('privacy.sections.dataSecurity.intro')}
                </p>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.dataSecurity.technicalMeasures.title')}</h4>
                <ul className="space-y-2">
                  {getTranslationArray('privacy.sections.dataSecurity.technicalMeasures.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Lock className="h-4 w-4 text-blue-500 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.dataSecurity.organizationalMeasures.title')}</h4>
                <ul className="space-y-2">
                  {getTranslationArray('privacy.sections.dataSecurity.organizationalMeasures.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-yellow-800">{t('privacy.sections.dataSecurity.disclaimer.title')}</h5>
                      <p className="text-yellow-700 text-sm mt-1">
                        {t('privacy.sections.dataSecurity.disclaimer.content')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Section 6: Data Retention */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  6
                </div>
                {t('privacy.sections.dataRetention.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('privacy.sections.dataRetention.intro')}
                </p>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.dataRetention.chatData.title')}</h4>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.dataRetention.chatData.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.dataRetention.integrationData.title')}</h4>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.dataRetention.integrationData.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.dataRetention.accountData.title')}</h4>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.dataRetention.accountData.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.dataRetention.logsBackups.title')}</h4>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.dataRetention.logsBackups.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <p className="text-sm text-muted-foreground mt-4">
                  {t('privacy.sections.dataRetention.note')}
                </p>
              </div>
            </div>

            <Separator />

            {/* Section 7: Your Rights */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  7
                </div>
                {t('privacy.sections.yourRights.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('privacy.sections.yourRights.intro')}
                </p>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.yourRights.accessInfo.title')}</h4>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.yourRights.accessInfo.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.yourRights.correction.title')}</h4>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.yourRights.correction.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.yourRights.deletion.title')}</h4>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.yourRights.deletion.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.yourRights.portability.title')}</h4>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.yourRights.portability.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.yourRights.complaints.title')}</h4>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.yourRights.complaints.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <p className="text-sm text-muted-foreground mt-4">
                  {t('privacy.sections.yourRights.note')}
                </p>
              </div>
            </div>

            <Separator />

            {/* Section 8: Children's Privacy */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  8
                </div>
                {t('privacy.sections.childrensPrivacy.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('privacy.sections.childrensPrivacy.content1')}
                </p>
                <p>
                  {t('privacy.sections.childrensPrivacy.content2')}
                </p>
                <p>
                  {t('privacy.sections.childrensPrivacy.content3')}
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-blue-700 text-sm">
                    <strong>{t('privacy.sections.childrensPrivacy.noteTitle')}</strong> {t('privacy.sections.childrensPrivacy.noteContent')}
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Section 9: Updates to This Policy */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                  9
                </div>
                {t('privacy.sections.policyUpdates.title')}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  {t('privacy.sections.policyUpdates.intro')}
                </p>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.policyUpdates.notificationMethods.title')}</h4>
                <ul className="space-y-1">
                  {getTranslationArray('privacy.sections.policyUpdates.notificationMethods.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mt-6 mb-3">{t('privacy.sections.policyUpdates.consent.title')}</h4>
                <p>
                  {t('privacy.sections.policyUpdates.consent.content')}
                </p>

                <p className="text-sm text-muted-foreground mt-4">
                  {t('privacy.sections.policyUpdates.newPurpose')}
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Us
                </CardTitle>
                <CardDescription>
                  Questions about your privacy or data practices? We're here to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  If you have any questions, concerns, or requests regarding this Privacy Policy
                  or your personal data, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Company:</strong> Alfaliike Oy
                  </p>
                  <p>
                    <strong>Address:</strong> Lakaksenkuja 6, 49270 Pyhtää, Finland
                  </p>
                  <p>
                    <strong>Email:</strong> info@alfa-automations.com
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  We will respond to your inquiries as promptly as possible, and no later than
                  within the timeframe required by law. Your feedback and trust are important to us.
                </p>
                <div className="flex gap-3">
                  <Link to="/terms" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Terms of Service
                    </Button>
                  </Link>
                  <Link to="/" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-primary to-purple-600">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Home
                    </Button>
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

export default PrivacyPolicy;
