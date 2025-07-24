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

const CookiePolicy = () => {
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
              <Cookie className="w-3 h-3 mr-1" />
              Website Cookies
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Cookie
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {" "}
                Policy
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn about how AgentFlow uses cookies and similar technologies to
              enhance your experience and improve our AI automation platform.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Last updated: January 1, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Version 1.0</span>
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
                      Cookie Notice
                    </h3>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      This Cookie Policy explains how AgentFlow and our partners
                      use cookies and similar technologies when you visit our
                      website or use our services. We are committed to
                      transparency about how we collect and use your data.
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
                  1. What Are Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are placed on your device
                  when you visit a website. They are widely used to make
                  websites work more efficiently and provide a better user
                  experience.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Session Cookies</p>
                      <p className="text-sm text-muted-foreground">
                        Temporary cookies that expire when you close your
                        browser
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Persistent Cookies</p>
                      <p className="text-sm text-muted-foreground">
                        Cookies that remain on your device for a set period or
                        until manually deleted
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">First-Party Cookies</p>
                      <p className="text-sm text-muted-foreground">
                        Set directly by AgentFlow
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Third-Party Cookies</p>
                      <p className="text-sm text-muted-foreground">
                        Set by external services we use
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
                  2. Types of Cookies We Use
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Essential Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-red-600" />
                    <h4 className="font-semibold text-red-800">
                      Essential Cookies
                    </h4>
                    <Badge variant="destructive" className="text-xs">
                      Required
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies are necessary for the website to function and
                    cannot be switched off. They enable core functionality such
                    as security, network management, and accessibility.
                  </p>
                  <div className="ml-6 space-y-2 text-sm text-muted-foreground">
                    <p>• Authentication and session management</p>
                    <p>• Security and fraud prevention</p>
                    <p>• Load balancing and performance</p>
                    <p>• Cookie consent preferences</p>
                  </div>
                </div>

                <Separator />

                {/* Performance Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <BarChart className="h-4 w-4 text-blue-600" />
                    <h4 className="font-semibold text-blue-800">
                      Performance Cookies
                    </h4>
                    <Badge variant="secondary" className="text-xs">
                      Optional
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies help us understand how visitors interact with
                    our website by collecting anonymous information about usage
                    patterns.
                  </p>
                  <div className="ml-6 space-y-2 text-sm text-muted-foreground">
                    <p>• Google Analytics (traffic analysis)</p>
                    <p>• Page load times and performance metrics</p>
                    <p>• Error tracking and debugging</p>
                    <p>• Feature usage statistics</p>
                  </div>
                </div>

                <Separator />

                {/* Functional Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-green-600" />
                    <h4 className="font-semibold text-green-800">
                      Functional Cookies
                    </h4>
                    <Badge variant="secondary" className="text-xs">
                      Optional
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies enable enhanced functionality and
                    personalization, such as remembering your preferences and
                    settings.
                  </p>
                  <div className="ml-6 space-y-2 text-sm text-muted-foreground">
                    <p>• Language and region preferences</p>
                    <p>• Theme and UI customizations</p>
                    <p>• Dashboard layout preferences</p>
                    <p>• Notification settings</p>
                  </div>
                </div>

                <Separator />

                {/* Marketing Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-purple-600" />
                    <h4 className="font-semibold text-purple-800">
                      Marketing Cookies
                    </h4>
                    <Badge variant="secondary" className="text-xs">
                      Optional
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies track your online activity to help advertisers
                    deliver more relevant advertising or limit how many times
                    you see an ad.
                  </p>
                  <div className="ml-6 space-y-2 text-sm text-muted-foreground">
                    <p>• Social media integration (LinkedIn, Twitter)</p>
                    <p>• Marketing campaign effectiveness</p>
                    <p>• Retargeting and remarketing</p>
                    <p>• Content recommendation engines</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  3. Third-Party Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We use trusted third-party services that may set their own
                  cookies. These services help us provide and improve our
                  platform:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Google Analytics</h4>
                    <p className="text-sm text-muted-foreground">
                      Web analytics and usage insights
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Stripe</h4>
                    <p className="text-sm text-muted-foreground">
                      Payment processing and fraud prevention
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Intercom</h4>
                    <p className="text-sm text-muted-foreground">
                      Customer support and messaging
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">LinkedIn Insight</h4>
                    <p className="text-sm text-muted-foreground">
                      Professional audience analytics
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
                  4. Managing Your Cookie Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  You have control over the cookies set on your device. Here's
                  how you can manage them:
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Cookie Consent Banner
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      When you first visit our website, you can choose which
                      types of cookies to accept through our consent banner.
                    </p>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Settings className="h-4 w-4 text-blue-600" />
                      Account Settings
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Registered users can manage cookie preferences in their
                      account settings under Privacy & Cookies.
                    </p>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Globe className="h-4 w-4 text-purple-600" />
                      Browser Settings
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      You can control cookies through your browser settings.
                      Note that disabling essential cookies may affect website
                      functionality.
                    </p>
                  </div>
                </div>

                <Card className="border-orange-200 bg-orange-50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-orange-800 text-sm mb-1">
                          Important Note
                        </h4>
                        <p className="text-orange-700 text-xs leading-relaxed">
                          Disabling certain cookies may limit your ability to
                          use some features of our platform. Essential cookies
                          cannot be disabled as they are required for basic
                          functionality.
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
                  5. Cookie Retention and Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Retention Periods</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Session cookies:
                        </span>
                        <span className="font-medium">
                          Until browser closes
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Authentication:
                        </span>
                        <span className="font-medium">30 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Preferences:
                        </span>
                        <span className="font-medium">1 year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Analytics:
                        </span>
                        <span className="font-medium">24 months</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Policy Updates</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We may update this Cookie Policy periodically to reflect
                      changes in our practices or for legal compliance. We will
                      notify you of any material changes through our website or
                      email.
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
                  6. Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Cookie Policy or how we
                  handle cookies, please contact us:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Privacy Team</p>
                      <p className="text-sm text-muted-foreground">
                        privacy@agentflow.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bot className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Data Protection Officer</p>
                      <p className="text-sm text-muted-foreground">
                        dpo@agentflow.com
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  We aim to respond to all privacy-related inquiries within 5
                  business days.
                </p>
              </CardContent>
            </Card>

            {/* Related Policies */}
            <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Related Policies</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    to="/privacy-policy"
                    className="flex items-center gap-3 p-3 bg-background rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Privacy Policy</p>
                      <p className="text-sm text-muted-foreground">
                        How we handle your data
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/terms"
                    className="flex items-center gap-3 p-3 bg-background rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Terms of Service</p>
                      <p className="text-sm text-muted-foreground">
                        Platform usage terms
                      </p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
