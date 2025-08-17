import { useState } from "react";
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <Badge
              variant="secondary"
              className="mb-4 bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Comprehensive Feature Set
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Powerful AI Features
              <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent block">
                Built for Scale
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how AgentFlow's advanced AI capabilities can transform
              every aspect of your business operations with intelligent
              automation, deep insights, and seamless integrations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-12 px-8 bg-gradient-to-r from-primary to-purple-600"
                onClick={() => setRegisterOpen(true)}
              >
                <PlayCircle className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 border-primary/20"
                onClick={() => setRegisterOpen(true)}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything you need in one platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From simple automation to complex AI workflows, AgentFlow provides
              enterprise-grade capabilities that scale with your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Feature Block 1 */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-purple-600">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Conversational AI</h3>
                  <p className="text-muted-foreground">
                    Natural language understanding at scale
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Deploy AI agents that understand context, emotion, and intent.
                Our conversational AI handles complex multi-turn conversations
                with human-like understanding across 100+ languages.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">
                      Intent Recognition
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">
                      Sentiment Analysis
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Context Memory</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Multi-language</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Voice & Text</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">
                      Smart Escalation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Mock */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/10 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-semibold">U</span>
                      </div>
                      <div className="bg-secondary rounded-2xl rounded-tl-sm p-3 max-w-xs">
                        <p className="text-sm">
                          Hi, I need help with my recent order
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                        <p className="text-sm">
                          I'd be happy to help! Can you provide your order
                          number?
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-semibold">U</span>
                      </div>
                      <div className="bg-secondary rounded-2xl rounded-tl-sm p-3 max-w-xs">
                        <p className="text-sm">It's #ORD-12345</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                        <p className="text-sm">
                          Found it! Your order shipped yesterday and will arrive
                          tomorrow. Here's the tracking link...
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Visual Mock */}
            <div className="relative order-2 lg:order-1">
              <Card className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border-blue-500/10 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Workflow Automation</h4>
                      <Badge
                        variant="secondary"
                        className="bg-green-500/10 text-green-700"
                      >
                        Active
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 bg-background rounded-lg border">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm">
                          Customer submits support ticket
                        </span>
                        <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                      </div>
                      <div className="ml-6 w-px h-4 bg-border"></div>
                      <div className="flex items-center gap-4 p-3 bg-background rounded-lg border">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span className="text-sm">
                          AI analyzes and categorizes issue
                        </span>
                        <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                      </div>
                      <div className="ml-6 w-px h-4 bg-border"></div>
                      <div className="flex items-center gap-4 p-3 bg-background rounded-lg border">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm">
                          Auto-assign to specialist
                        </span>
                        <Clock className="h-4 w-4 text-yellow-500 ml-auto" />
                      </div>
                      <div className="ml-6 w-px h-4 bg-border"></div>
                      <div className="flex items-center gap-4 p-3 bg-secondary/50 rounded-lg border border-dashed">
                        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                        <span className="text-sm text-muted-foreground">
                          Send resolution & follow-up
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Feature Block 2 */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600">
                  <Workflow className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Intelligent Workflows</h3>
                  <p className="text-muted-foreground">
                    Automate complex business processes
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Create sophisticated automation workflows that adapt to your
                business logic. Our AI learns from patterns and continuously
                optimizes processes for maximum efficiency and accuracy.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Visual Builder</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">
                      Conditional Logic
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Error Handling</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">
                      API Integrations
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">
                      Real-time Monitoring
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">
                      Performance Optimization
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Block 3 */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Advanced Analytics</h3>
                  <p className="text-muted-foreground">
                    Data-driven insights and reporting
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Get deep insights into your AI agent performance, customer
                interactions, and business metrics. Our advanced analytics help
                you optimize operations and make data-driven decisions.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">
                      Real-time Dashboards
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Custom Reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">
                      Performance Metrics
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">
                      Predictive Analytics
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Data Export</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Alert System</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Mock */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/10 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Performance Overview</h4>
                      <Badge variant="secondary">Last 30 days</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-background rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          98.7%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Resolution Rate
                        </div>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          2.1s
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Avg Response
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Customer Satisfaction</span>
                        <span>94%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "94%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Task Automation</span>
                        <span>87%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "87%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Cost Reduction</span>
                        <span>73%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: "73%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-primary/5">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-primary/20">
              <Code className="w-3 h-3 mr-1" />
              Technical Capabilities
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Built for
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {" "}
                developers and enterprises
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade infrastructure with developer-friendly APIs and
              comprehensive integration capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-background border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">RESTful APIs</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive APIs with SDKs for Python, JavaScript, and more
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Data Security</h3>
                <p className="text-sm text-muted-foreground">
                  SOC 2 Type II certified with enterprise-grade encryption
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Global Scale</h3>
                <p className="text-sm text-muted-foreground">
                  Multi-region deployment with 99.99% uptime SLA
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Multi-Platform</h3>
                <p className="text-sm text-muted-foreground">
                  Web, mobile, voice, and messaging platform support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-primary/20">
              <Globe className="w-3 h-3 mr-1" />
              Integrations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Connects with your
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {" "}
                entire tech stack
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamlessly integrate with 200+ popular business tools and
              platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-background to-primary/5 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  Communication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "Slack",
                    "Teams",
                    "Discord",
                    "WhatsApp",
                    "Telegram",
                    "Email",
                  ].map((tool) => (
                    <div
                      key={tool}
                      className="text-center p-3 bg-background rounded-lg border"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded mx-auto mb-1"></div>
                      <span className="text-xs text-muted-foreground">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-background to-blue-500/5 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Database className="h-5 w-5 text-blue-600" />
                  </div>
                  Business Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "Salesforce",
                    "HubSpot",
                    "Zendesk",
                    "Shopify",
                    "Stripe",
                    "Zapier",
                  ].map((tool) => (
                    <div
                      key={tool}
                      className="text-center p-3 bg-background rounded-lg border"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded mx-auto mb-1"></div>
                      <span className="text-xs text-muted-foreground">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-background to-green-500/5 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <Code className="h-5 w-5 text-green-600" />
                  </div>
                  Developer Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {["GitHub", "GitLab", "Jira", "AWS", "Azure", "Docker"].map(
                    (tool) => (
                      <div
                        key={tool}
                        className="text-center p-3 bg-background rounded-lg border"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded mx-auto mb-1"></div>
                        <span className="text-xs text-muted-foreground">
                          {tool}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge
              variant="secondary"
              className="mb-4 bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Ready to Get Started?
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Experience the power of
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {" "}
                intelligent automation
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Deploy your first AI agent in minutes and see the immediate impact
              on your business operations and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                onClick={() => setRegisterOpen(true)}
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 border-primary/20 hover:bg-primary/5"
                onClick={() => setLoginOpen(true)}
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Full feature access
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-br from-secondary/30 to-background">
        <div className="container py-16">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  AgentFlow
                </span>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Intelligent AI agents for business automation and growth.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 AgentFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

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
