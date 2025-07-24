import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  CreditCard,
  Smartphone,
  Building2,
  QrCode,
  Check,
  Clock,
  Lock,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface PaymentData {
  propertyTitle: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
  pricePerNight: number;
  total: number;
}

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const paymentData: PaymentData = location.state?.paymentData || {
    propertyTitle: "Modern Downtown Loft with City Views",
    checkIn: "2024-02-15",
    checkOut: "2024-02-17",
    guests: 2,
    nights: 2,
    pricePerNight: 13500,
    total: 30750,
  };

  const [selectedMethod, setSelectedMethod] = useState("");
  const [processing, setProcessing] = useState(false);
  const [formData, setFormData] = useState({
    // UPI
    upiId: "",

    // Card
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",

    // Net Banking
    bankName: "",

    // Contact
    email: "",
    phone: "",
  });

  const banks = [
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Punjab National Bank",
    "Bank of Baroda",
    "Canara Bank",
    "Union Bank of India",
    "IDBI Bank",
    "Central Bank of India",
  ];

  const upiApps = [
    { name: "Google Pay", logo: "🟢" },
    { name: "PhonePe", logo: "🟣" },
    { name: "Paytm", logo: "🔵" },
    { name: "BHIM UPI", logo: "🟠" },
    { name: "Amazon Pay", logo: "🟡" },
  ];

  const handlePayment = async () => {
    if (!selectedMethod) {
      toast.error("Please select a payment method");
      return;
    }

    if (!formData.email || !formData.phone) {
      toast.error("Please provide contact information");
      return;
    }

    // Validate based on payment method
    if (selectedMethod === "upi" && !formData.upiId) {
      toast.error("Please enter UPI ID");
      return;
    }

    if (
      selectedMethod === "card" &&
      (!formData.cardNumber ||
        !formData.expiryDate ||
        !formData.cvv ||
        !formData.cardName)
    ) {
      toast.error("Please fill all card details");
      return;
    }

    if (selectedMethod === "netbanking" && !formData.bankName) {
      toast.error("Please select your bank");
      return;
    }

    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      toast.success("Payment successful! Booking confirmed.");
      navigate("/booking-confirmation", {
        state: {
          bookingData: {
            ...paymentData,
            paymentMethod: selectedMethod,
            bookingId: `RB${Date.now()}`,
            paymentDate: new Date().toISOString(),
          },
        },
      });
    }, 3000);
  };

  const PaymentMethodCard = ({
    method,
    icon: Icon,
    title,
    description,
    children,
  }: {
    method: string;
    icon: any;
    title: string;
    description: string;
    children: React.ReactNode;
  }) => (
    <Card
      className={`cursor-pointer transition-all ${
        selectedMethod === method
          ? "border-airbnb-primary bg-red-50"
          : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={() => setSelectedMethod(method)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              selectedMethod === method
                ? "bg-airbnb-primary text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-airbnb-base font-airbnb-semibold text-airbnb-text-primary">
              {title}
            </CardTitle>
            <p className="text-airbnb-sm text-airbnb-text-secondary">
              {description}
            </p>
          </div>
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selectedMethod === method
                ? "border-airbnb-primary bg-airbnb-primary"
                : "border-gray-300"
            }`}
          >
            {selectedMethod === method && (
              <Check className="h-3 w-3 text-white" />
            )}
          </div>
        </div>
      </CardHeader>
      {selectedMethod === method && (
        <CardContent className="pt-0">{children}</CardContent>
      )}
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-airbnb-text-primary hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-green-600" />
            <span className="text-airbnb-sm text-airbnb-text-secondary">
              Secure Payment
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-airbnb-2xl font-airbnb-semibold text-airbnb-text-primary mb-2">
                Choose payment method
              </h1>
              <p className="text-airbnb-base text-airbnb-text-secondary">
                Complete your booking securely
              </p>
            </div>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-airbnb-lg font-airbnb-semibold text-airbnb-text-primary">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Enter your email"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 XXXXX XXXXX"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UPI Payment */}
            <PaymentMethodCard
              method="upi"
              icon={QrCode}
              title="UPI Payment"
              description="Pay using UPI ID or scan QR code"
            >
              <div className="space-y-4">
                <div>
                  <Label htmlFor="upiId">UPI ID</Label>
                  <Input
                    id="upiId"
                    value={formData.upiId}
                    onChange={(e) =>
                      setFormData({ ...formData, upiId: e.target.value })
                    }
                    placeholder="yourname@paytm"
                    className="mt-1"
                  />
                </div>

                <div>
                  <p className="text-airbnb-sm text-airbnb-text-secondary mb-3">
                    Or choose your UPI app:
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {upiApps.map((app) => (
                      <Button
                        key={app.name}
                        variant="outline"
                        className="flex flex-col items-center gap-2 h-16"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            upiId: `user@${app.name.toLowerCase().replace(" ", "")}`,
                          })
                        }
                      >
                        <span className="text-lg">{app.logo}</span>
                        <span className="text-xs">{app.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </PaymentMethodCard>

            {/* Credit/Debit Card */}
            <PaymentMethodCard
              method="card"
              icon={CreditCard}
              title="Credit/Debit Card"
              description="Visa, Mastercard, RuPay accepted"
            >
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    value={formData.cardNumber}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/\s/g, "")
                        .replace(/(.{4})/g, "$1 ")
                        .trim();
                      if (value.length <= 19) {
                        setFormData({ ...formData, cardNumber: value });
                      }
                    }}
                    placeholder="1234 5678 9012 3456"
                    className="mt-1"
                    maxLength={19}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      value={formData.expiryDate}
                      onChange={(e) => {
                        const value = e.target.value
                          .replace(/\D/g, "")
                          .replace(/(\d{2})(\d)/, "$1/$2");
                        if (value.length <= 5) {
                          setFormData({ ...formData, expiryDate: value });
                        }
                      }}
                      placeholder="MM/YY"
                      className="mt-1"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      value={formData.cvv}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 3) {
                          setFormData({ ...formData, cvv: value });
                        }
                      }}
                      placeholder="123"
                      className="mt-1"
                      maxLength={3}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input
                    id="cardName"
                    value={formData.cardName}
                    onChange={(e) =>
                      setFormData({ ...formData, cardName: e.target.value })
                    }
                    placeholder="Name as on card"
                    className="mt-1"
                  />
                </div>
              </div>
            </PaymentMethodCard>

            {/* Net Banking */}
            <PaymentMethodCard
              method="netbanking"
              icon={Building2}
              title="Net Banking"
              description="Pay directly from your bank account"
            >
              <div>
                <Label htmlFor="bankName">Select Your Bank</Label>
                <select
                  id="bankName"
                  value={formData.bankName}
                  onChange={(e) =>
                    setFormData({ ...formData, bankName: e.target.value })
                  }
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-airbnb-primary"
                >
                  <option value="">Choose your bank</option>
                  {banks.map((bank) => (
                    <option key={bank} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
              </div>
            </PaymentMethodCard>

            {/* Security Information */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-airbnb-semibold text-airbnb-text-primary mb-1">
                      Your payment is secure
                    </h3>
                    <p className="text-airbnb-sm text-airbnb-text-secondary">
                      We use SSL encryption and comply with PCI DSS standards.
                      Your payment information is never stored on our servers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-airbnb-lg font-airbnb-semibold text-airbnb-text-primary">
                  Booking Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-airbnb-medium text-airbnb-text-primary mb-2">
                    {paymentData.propertyTitle}
                  </h3>
                  <div className="space-y-2 text-airbnb-sm text-airbnb-text-secondary">
                    <div className="flex justify-between">
                      <span>Check-in:</span>
                      <span>
                        {new Date(paymentData.checkIn).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check-out:</span>
                      <span>
                        {new Date(paymentData.checkOut).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guests:</span>
                      <span>{paymentData.guests}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 text-airbnb-sm">
                  <div className="flex justify-between">
                    <span className="text-airbnb-text-secondary">
                      ₹{paymentData.pricePerNight.toLocaleString("en-IN")} x{" "}
                      {paymentData.nights} nights
                    </span>
                    <span className="text-airbnb-text-primary">
                      ₹
                      {(
                        paymentData.pricePerNight * paymentData.nights
                      ).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-airbnb-text-secondary">
                      Cleaning fee
                    </span>
                    <span className="text-airbnb-text-primary">₹1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-airbnb-text-secondary">
                      Service fee
                    </span>
                    <span className="text-airbnb-text-primary">₹2,250</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-airbnb-semibold text-airbnb-base">
                  <span className="text-airbnb-text-primary">Total</span>
                  <span className="text-airbnb-text-primary">
                    ₹{paymentData.total.toLocaleString("en-IN")}
                  </span>
                </div>

                <Button
                  onClick={handlePayment}
                  disabled={!selectedMethod || processing}
                  className="w-full bg-airbnb-primary hover:bg-airbnb-primary/90 text-white py-3 text-airbnb-base font-airbnb-semibold"
                >
                  {processing ? (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 animate-spin" />
                      Processing Payment...
                    </div>
                  ) : (
                    `Pay ₹${paymentData.total.toLocaleString("en-IN")}`
                  )}
                </Button>

                <div className="flex items-center gap-2 text-airbnb-xs text-airbnb-text-secondary">
                  <AlertCircle className="h-3 w-3" />
                  <span>
                    You won't be charged until your booking is confirmed
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
