import { Link } from "react-router-dom";
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

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              AgentFlow
            </span>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-purple-500/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="border-primary/20">
              <Scale className="w-3 h-3 mr-1" />
              Legal Documents
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Terms of
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {" "}
                Service
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using AgentFlow's AI
              automation platform and services.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Last updated: January 1, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Version 2.1</span>
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
                      Important Notice
                    </h3>
                    <p className="text-orange-700 text-sm leading-relaxed">
                      These Terms of Service constitute a legally binding
                      agreement between you and AgentFlow. By accessing or using
                      our services, you agree to be bound by these terms. If you
                      do not agree to these terms, please do not use our
                      services.
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
                Acceptance of Terms
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  By accessing or using AgentFlow's services, including our
                  website, platform, API, or any related services (collectively,
                  the "Services"), you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Service
                  ("Terms").
                </p>
                <p>
                  These Terms apply to all users of the Services, including
                  visitors, registered users, and paying customers. If you are
                  using the Services on behalf of an organization, you represent
                  and warrant that you have the authority to bind that
                  organization to these Terms.
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
                Description of Services
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  AgentFlow provides AI-powered automation platform services
                  that enable businesses to deploy intelligent agents for
                  customer support, sales, operations, and other business
                  functions. Our Services include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    AI agent creation and management tools
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Conversation automation and processing
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Analytics and performance monitoring
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    Integration capabilities with third-party services
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    API access for custom implementations
                  </li>
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
                User Accounts and Registration
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  To access certain features of our Services, you must create an
                  account. You agree to:
                </p>
                <ul className="space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>
                    Promptly update your account information when necessary
                  </li>
                  <li>
                    Accept responsibility for all activities under your account
                  </li>
                  <li>
                    Notify us immediately of any unauthorized access or use
                  </li>
                </ul>
                <p>
                  You may not create accounts using automated means or create
                  multiple accounts for the same individual or entity without
                  our express permission.
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
                Acceptable Use Policy
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>You agree not to use the Services to:</p>
                <ul className="space-y-1">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon intellectual property rights of others</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the Services</li>
                  <li>Use the Services for illegal or fraudulent activities</li>
                  <li>Spam, harass, or abuse other users</li>
                  <li>Reverse engineer or attempt to extract source code</li>
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
                Subscription and Billing
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Our Services are offered through various subscription plans.
                  By subscribing to a paid plan, you agree to:
                </p>
                <ul className="space-y-1">
                  <li>
                    Pay all applicable fees as described in your chosen plan
                  </li>
                  <li>Provide accurate billing and payment information</li>
                  <li>
                    Authorize us to charge your payment method automatically
                  </li>
                  <li>Pay any applicable taxes related to your subscription</li>
                </ul>
                <p>
                  Subscription fees are billed in advance on a monthly or annual
                  basis. We may change our pricing with 30 days' notice to
                  existing subscribers.
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
                Data and Privacy
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  We take data protection seriously. Our collection, use, and
                  protection of your personal data is governed by our Privacy
                  Policy, which is incorporated into these Terms by reference.
                </p>
                <p>
                  You retain ownership of any data you submit to our Services.
                  By using our Services, you grant us a limited license to
                  process your data solely for the purpose of providing our
                  Services to you.
                </p>
                <p>
                  We implement industry-standard security measures to protect
                  your data, but we cannot guarantee absolute security.
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
                Intellectual Property
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  The Services, including all content, features, and
                  functionality, are owned by AgentFlow and are protected by
                  copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You are granted a limited, non-exclusive, non-transferable
                  license to access and use the Services in accordance with
                  these Terms. This license does not include any right to:
                </p>
                <ul className="space-y-1">
                  <li>Resell or commercially exploit the Services</li>
                  <li>Modify, adapt, or create derivative works</li>
                  <li>Use our trademarks or branding without permission</li>
                  <li>Remove or alter any proprietary notices</li>
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
                Limitation of Liability
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, AGENTFLOW SHALL NOT BE
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                  OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
                  PROFITS, DATA, OR USE, ARISING OUT OF OR RELATING TO THESE
                  TERMS OR THE SERVICES.
                </p>
                <p>
                  OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING OUT OF OR
                  RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE
                  AMOUNT YOU PAID TO US IN THE TWELVE MONTHS PRECEDING THE
                  CLAIM.
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
                Termination
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  You may terminate your account at any time by following the
                  instructions in your account settings. We may terminate or
                  suspend your account if you violate these Terms or for any
                  other reason with or without notice.
                </p>
                <p>
                  Upon termination, your right to access and use the Services
                  will immediately cease. We may delete your account and data,
                  but we are not obligated to do so.
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
                Changes to Terms
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  We may modify these Terms at any time. We will notify you of
                  material changes by posting the updated Terms on our website
                  and updating the "Last updated" date. Your continued use of
                  the Services after such changes constitutes acceptance of the
                  new Terms.
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
                  Questions about these Terms? We're here to help.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Email:</strong> legal@agentflow.com
                  </p>
                  <p>
                    <strong>Address:</strong> AgentFlow Inc., 123 AI Street,
                    Tech Valley, CA 94105
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
                <Link to="/privacy-policy">
                  <Button variant="outline" className="w-full">
                    <Shield className="mr-2 h-4 w-4" />
                    View Privacy Policy
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container">
          <div className="text-center space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                AgentFlow
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © 2025 AgentFlow. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
