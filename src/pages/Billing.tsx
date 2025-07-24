import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  CreditCard,
  Download,
  Plus,
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Edit,
  Trash2,
  Crown,
  Zap,
  Users,
  BarChart3,
  Globe,
  Star,
} from "lucide-react";
import { toast } from "sonner";

const Billing = () => {
  const [isAddingCard, setIsAddingCard] = useState(false);

  const currentPlan = {
    name: "Professional",
    price: 99,
    billing: "monthly",
    nextBilling: "March 15, 2024",
    features: [
      "Up to 15 AI agents",
      "25,000 conversations/month",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
      "Team collaboration",
    ],
  };

  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "12/26",
      isDefault: true,
    },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiry: "09/25",
      isDefault: false,
    },
  ];

  const invoices = [
    {
      id: "INV-2024-001",
      date: "Feb 15, 2024",
      amount: 99.0,
      status: "paid",
      description: "Professional Plan - February 2024",
    },
    {
      id: "INV-2024-002",
      date: "Jan 15, 2024",
      amount: 99.0,
      status: "paid",
      description: "Professional Plan - January 2024",
    },
    {
      id: "INV-2023-012",
      date: "Dec 15, 2023",
      amount: 99.0,
      status: "paid",
      description: "Professional Plan - December 2023",
    },
    {
      id: "INV-2023-011",
      date: "Nov 15, 2023",
      amount: 29.0,
      status: "paid",
      description: "Starter Plan - November 2023",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: 29,
      description: "Perfect for small teams and startups",
      features: [
        "Up to 3 AI agents",
        "1,000 conversations/month",
        "Email support",
        "Basic analytics",
        "Standard integrations",
      ],
      current: false,
      popular: false,
    },
    {
      name: "Professional",
      price: 99,
      description: "For growing businesses and teams",
      features: [
        "Up to 15 AI agents",
        "25,000 conversations/month",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Team collaboration",
      ],
      current: true,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited AI agents",
        "Unlimited conversations",
        "24/7 dedicated support",
        "Custom AI training",
        "On-premise deployment",
        "SLA guarantees",
      ],
      current: false,
      popular: false,
    },
  ];

  const handleAddPaymentMethod = () => {
    // Simulate adding payment method
    toast.success("Payment method added successfully!");
    setIsAddingCard(false);
  };

  const handleChangePlan = (planName: string) => {
    toast.success(
      `Plan changed to ${planName}. Changes will take effect on your next billing cycle.`,
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Billing & Subscription</h1>
          <p className="text-muted-foreground mt-1">
            Manage your subscription, payment methods, and billing history
          </p>
        </div>

        {/* Current Plan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-yellow-500" />
              Current Plan
            </CardTitle>
            <CardDescription>
              Your active subscription and next billing date
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    {currentPlan.name}
                    <Badge className="bg-gradient-to-r from-primary to-purple-600">
                      Current
                    </Badge>
                  </h3>
                  <p className="text-3xl font-bold text-primary">
                    ${currentPlan.price}
                    <span className="text-lg font-normal text-muted-foreground">
                      /month
                    </span>
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Next billing: {currentPlan.nextBilling}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600">
                      74% of monthly usage (18,547 / 25,000 conversations)
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Change Plan</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Choose Your Plan</DialogTitle>
                      <DialogDescription>
                        Select the plan that best fits your needs. Changes will
                        take effect on your next billing cycle.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                      {plans.map((plan) => (
                        <Card
                          key={plan.name}
                          className={`relative ${
                            plan.current
                              ? "border-primary shadow-lg"
                              : plan.popular
                                ? "border-primary/50"
                                : ""
                          }`}
                        >
                          {plan.popular && !plan.current && (
                            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-purple-600">
                              <Star className="w-3 h-3 mr-1" />
                              Most Popular
                            </Badge>
                          )}
                          {plan.current && (
                            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-500">
                              Current Plan
                            </Badge>
                          )}
                          <CardHeader className="text-center">
                            <CardTitle className="text-xl">
                              {plan.name}
                            </CardTitle>
                            <CardDescription>
                              {plan.description}
                            </CardDescription>
                            <div className="pt-4">
                              <span className="text-3xl font-bold">
                                {typeof plan.price === "number" ? "$" : ""}
                                {plan.price}
                              </span>
                              {typeof plan.price === "number" && (
                                <span className="text-muted-foreground">
                                  /month
                                </span>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 mb-6">
                              {plan.features.map((feature, index) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-2 text-sm"
                                >
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <Button
                              className={`w-full ${
                                plan.current
                                  ? "bg-green-500 hover:bg-green-600"
                                  : plan.popular
                                    ? "bg-gradient-to-r from-primary to-purple-600"
                                    : ""
                              }`}
                              disabled={plan.current}
                              onClick={() => handleChangePlan(plan.name)}
                            >
                              {plan.current ? "Current Plan" : "Select Plan"}
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
                <Button>Manage Subscription</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Methods
              </CardTitle>
              <CardDescription>
                Manage your payment methods and billing information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                      <CreditCard className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {method.type} ending in {method.last4}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Expires {method.expiry}
                      </p>
                    </div>
                    {method.isDefault && (
                      <Badge variant="secondary">Default</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}

              <Dialog open={isAddingCard} onOpenChange={setIsAddingCard}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Payment Method</DialogTitle>
                    <DialogDescription>
                      Add a new credit or debit card to your account
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" maxLength={5} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" maxLength={4} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Cardholder Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-purple-600"
                      onClick={handleAddPaymentMethod}
                    >
                      Add Payment Method
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Usage Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Usage Alerts
              </CardTitle>
              <CardDescription>
                Monitor your usage and get notified before limits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium">Conversations</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-orange-600">
                      74% used
                    </p>
                    <p className="text-xs text-muted-foreground">
                      18,547 / 25,000
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">API Calls</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600">
                      25% used
                    </p>
                    <p className="text-xs text-muted-foreground">250K / 1M</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">Storage</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-blue-600">
                      12% used
                    </p>
                    <p className="text-xs text-muted-foreground">
                      6 GB / 50 GB
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="font-medium">Alert Settings</h4>
                <div className="space-y-2">
                  <Label htmlFor="alert-threshold">Usage Alert Threshold</Label>
                  <Select defaultValue="75">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50">50%</SelectItem>
                      <SelectItem value="75">75%</SelectItem>
                      <SelectItem value="90">90%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" className="w-full">
                  Update Alert Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Billing History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Billing History
            </CardTitle>
            <CardDescription>
              View and download your past invoices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{invoice.description}</p>
                      <p className="text-sm text-muted-foreground">
                        {invoice.date} • {invoice.id}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-medium">
                        ${invoice.amount.toFixed(2)}
                      </p>
                      <Badge
                        className={
                          invoice.status === "paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-orange-100 text-orange-800"
                        }
                      >
                        {invoice.status}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Billing;
