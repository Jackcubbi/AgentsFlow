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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  HelpCircle,
  ArrowLeft,
  Clock,
  Database,
  MessageSquare,
  Settings,
  Shield,
  HeadphonesIcon,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AuthModals from "@/components/auth/AuthModals";

const HelpCenter = () => {
  const { t } = useTranslation();
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const openLoginModal = () => setLoginOpen(true);

  const getTranslationArray = (key: string): string[] => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result : [];
  };

  const faqCategories = [
    {
      id: "getting-started",
      icon: Clock,
      titleKey: "helpCenter.categories.gettingStarted.title",
      descriptionKey: "helpCenter.categories.gettingStarted.description",
      questions: getTranslationArray("helpCenter.categories.gettingStarted.questions")
    },
    {
      id: "data-hosting",
      icon: Database,
      titleKey: "helpCenter.categories.dataHosting.title",
      descriptionKey: "helpCenter.categories.dataHosting.description",
      questions: getTranslationArray("helpCenter.categories.dataHosting.questions")
    },
    {
      id: "communication",
      icon: MessageSquare,
      titleKey: "helpCenter.categories.communication.title",
      descriptionKey: "helpCenter.categories.communication.description",
      questions: getTranslationArray("helpCenter.categories.communication.questions")
    },
    {
      id: "integrations",
      icon: Settings,
      titleKey: "helpCenter.categories.integrations.title",
      descriptionKey: "helpCenter.categories.integrations.description",
      questions: getTranslationArray("helpCenter.categories.integrations.questions")
    },
    {
      id: "support",
      icon: HeadphonesIcon,
      titleKey: "helpCenter.categories.support.title",
      descriptionKey: "helpCenter.categories.support.description",
      questions: getTranslationArray("helpCenter.categories.support.questions")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header
        variant="default"
        showLanguageToggle={false}
        showAuthButtons={true}
        onLoginClick={openLoginModal}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("common.back")}
              </Link>
            </Button>
          </div>

          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <HelpCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">{t("helpCenter.title")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("helpCenter.subtitle")}
            </p>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        {t(category.titleKey)}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {t(category.descriptionKey)}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((question: any, index: number) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`}>
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-medium">{question.question}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="text-muted-foreground pt-2">
                            {question.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Support Section */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-0 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <HeadphonesIcon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("helpCenter.contact.title")}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("helpCenter.contact.description")}
              </p>
              <Button asChild>
                <Link to="/contact">
                  {t("helpCenter.contact.button")}
                </Link>
              </Button>
            </CardContent>
          </Card>
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

export default HelpCenter;
