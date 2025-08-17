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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  Clock,
  Building,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AuthModals from "@/components/auth/AuthModals";

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const openLoginModal = () => setLoginOpen(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message || t('contact.form.successMessage'),
        });
        // Reset form
        e.currentTarget.reset();
        setSelectedSubject('');
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || t('contact.form.errorMessage'),
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: t('contact.form.errorMessage'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        variant="default"
        showLanguageToggle={true}
        showAuthButtons={true}
        onLoginClick={openLoginModal}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" size="sm" asChild>
              <Link to="/help-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("common.back")}
              </Link>
            </Button>
          </div>
          
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">{t("contact.title")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{t("contact.form.title")}</CardTitle>
                <CardDescription>
                  {t("contact.form.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus.type && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    <div className="flex items-center gap-2">
                      {submitStatus.type === 'success' ? (
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                      <p className="font-medium">{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t("contact.form.firstName")}</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder={t("contact.form.firstNamePlaceholder")}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t("contact.form.lastName")}</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder={t("contact.form.lastNamePlaceholder")}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.form.email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">{t("contact.form.company")}</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder={t("contact.form.companyPlaceholder")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                    <Select name="subject" required onValueChange={setSelectedSubject}>
                      <SelectTrigger>
                        <SelectValue placeholder={t("contact.form.subjectPlaceholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">{t("contact.form.subjects.general")}</SelectItem>
                        <SelectItem value="sales">{t("contact.form.subjects.sales")}</SelectItem>
                        <SelectItem value="support">{t("contact.form.subjects.support")}</SelectItem>
                        <SelectItem value="partnership">{t("contact.form.subjects.partnership")}</SelectItem>
                        <SelectItem value="billing">{t("contact.form.subjects.billing")}</SelectItem>
                        <SelectItem value="automation">{t("contact.form.subjects.automation")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {selectedSubject === "automation"
                        ? t("contact.form.messageAutomation")
                        : t("contact.form.message")
                      }
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={
                        selectedSubject === "automation"
                          ? t("contact.form.messagePlaceholderAutomation")
                          : t("contact.form.messagePlaceholder")
                      }
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {t("contact.form.sending")}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        {t("contact.form.send")}
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle>{t("contact.info.title")}</CardTitle>
                <CardDescription>
                  {t("contact.info.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.info.email.title")}</p>
                    <p className="text-sm text-muted-foreground">
                      {t("contact.info.company.email")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.info.telegram.title")}</p>
                    <p className="text-sm text-muted-foreground">
                      {t("contact.info.telegram.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.info.hours.title")}</p>
                    <p className="text-sm text-muted-foreground">
                      {t("contact.info.hours.weekdays")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("contact.info.hours.timezone")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Information */}
            <Card>
              <CardHeader>
                <CardTitle>{t("contact.info.company.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Building className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.info.company.name")}</p>
                    <p className="text-sm text-muted-foreground">
                      {t("contact.info.company.businessId")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      {t("contact.info.company.address")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">
                    {t("contact.response.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("contact.response.description")}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>{t("contact.quickLinks.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/help-center">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {t("contact.quickLinks.helpCenter")}
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href={t("contact.info.company.telegram")} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {t("contact.quickLinks.telegram")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />

      <AuthModals
        loginOpen={loginOpen}
        registerOpen={registerOpen}
        onLoginOpenChange={setLoginOpen}
        onRegisterOpenChange={setRegisterOpen}
      />
    </div>
  );
};

export default Contact;
