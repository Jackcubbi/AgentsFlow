import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Bot } from "lucide-react";
import LanguageToggle from "./LanguageToggle";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t bg-gradient-to-br from-secondary/30 to-background">
      <div className="container py-16">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary bg-clip-text ">
                Alfa Automations
              </span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t("footer.product")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  {t("footer.features")}
                </a>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-foreground transition-colors"
                >
                  {t("footer.pricing")}
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  {t("footer.integrations")}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t("footer.support")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/help-center"
                  className="hover:text-foreground transition-colors"
                >
                  {t("footer.helpCenter")}
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  {t("footer.documentation")}
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 md:mt-0 items-center">
            <div className="flex space-x-6">
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.terms")}
              </Link>
              <Link
                to="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                to="/cookie-policy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.cookies")}
              </Link>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
