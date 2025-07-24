import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CheckCircle,
  Calendar,
  MapPin,
  Users,
  CreditCard,
  Download,
  Phone,
  Mail,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state?.bookingData;

  useEffect(() => {
    if (!bookingData) {
      navigate("/");
    }
  }, [bookingData, navigate]);

  if (!bookingData) return null;

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case "upi":
        return "📱";
      case "card":
        return "💳";
      case "netbanking":
        return "🏦";
      default:
        return "💰";
    }
  };

  const getPaymentMethodName = (method: string) => {
    switch (method) {
      case "upi":
        return "UPI Payment";
      case "card":
        return "Credit/Debit Card";
      case "netbanking":
        return "Net Banking";
      default:
        return "Online Payment";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <span className="text-airbnb-xl font-airbnb-semibold text-airbnb-text-primary">
              Booking Confirmed
            </span>
          </div>

          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-airbnb-3xl font-airbnb-semibold text-airbnb-text-primary mb-2">
            Payment Successful!
          </h1>
          <p className="text-airbnb-lg text-airbnb-text-secondary">
            Your booking has been confirmed. We've sent you a confirmation email
            with all the details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-airbnb-lg font-airbnb-semibold text-airbnb-text-primary flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Booking Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge className="bg-green-100 text-green-800 border-green-200 mb-3">
                    Booking ID: {bookingData.bookingId}
                  </Badge>

                  <h3 className="font-airbnb-semibold text-airbnb-text-primary mb-2">
                    {bookingData.propertyTitle}
                  </h3>

                  <div className="space-y-3 text-airbnb-sm">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-airbnb-text-secondary" />
                      <div>
                        <span className="text-airbnb-text-secondary">
                          Check-in:{" "}
                        </span>
                        <span className="font-airbnb-medium text-airbnb-text-primary">
                          {new Date(bookingData.checkIn).toLocaleDateString(
                            "en-IN",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-airbnb-text-secondary" />
                      <div>
                        <span className="text-airbnb-text-secondary">
                          Check-out:{" "}
                        </span>
                        <span className="font-airbnb-medium text-airbnb-text-primary">
                          {new Date(bookingData.checkOut).toLocaleDateString(
                            "en-IN",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-airbnb-text-secondary" />
                      <div>
                        <span className="text-airbnb-text-secondary">
                          Guests:{" "}
                        </span>
                        <span className="font-airbnb-medium text-airbnb-text-primary">
                          {bookingData.guests} guest
                          {bookingData.guests > 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-lg">
                        {getPaymentMethodIcon(bookingData.paymentMethod)}
                      </span>
                      <div>
                        <span className="text-airbnb-text-secondary">
                          Payment Method:{" "}
                        </span>
                        <span className="font-airbnb-medium text-airbnb-text-primary">
                          {getPaymentMethodName(bookingData.paymentMethod)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-airbnb-lg font-airbnb-semibold text-airbnb-text-primary flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-airbnb-sm">
                  <div className="flex justify-between">
                    <span className="text-airbnb-text-secondary">
                      ₹{bookingData.pricePerNight.toLocaleString("en-IN")} x{" "}
                      {bookingData.nights} nights
                    </span>
                    <span className="text-airbnb-text-primary">
                      ₹
                      {(
                        bookingData.pricePerNight * bookingData.nights
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
                  <span className="text-airbnb-text-primary">Total Paid</span>
                  <span className="text-green-600">
                    ₹{bookingData.total.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-airbnb-sm text-green-800">
                    Payment completed on{" "}
                    {new Date(bookingData.paymentDate).toLocaleDateString(
                      "en-IN",
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions & Next Steps */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-airbnb-lg font-airbnb-semibold text-airbnb-text-primary">
                  Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-airbnb-medium text-airbnb-text-primary">
                        Check your email
                      </h4>
                      <p className="text-airbnb-sm text-airbnb-text-secondary">
                        We've sent booking confirmation and check-in
                        instructions to your email.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-airbnb-medium text-airbnb-text-primary">
                        Host will contact you
                      </h4>
                      <p className="text-airbnb-sm text-airbnb-text-secondary">
                        Your host will reach out with check-in details 24 hours
                        before arrival.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-airbnb-medium text-airbnb-text-primary">
                        Get ready to explore
                      </h4>
                      <p className="text-airbnb-sm text-airbnb-text-secondary">
                        Start planning your trip and check out local attractions
                        and restaurants.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-airbnb-lg font-airbnb-semibold text-airbnb-text-primary">
                  Download & Share
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2"
                  onClick={() => {
                    // Simulate download
                    const element = document.createElement("a");
                    const file = new Blob(
                      [
                        `Booking Confirmation\nBooking ID: ${bookingData.bookingId}\nProperty: ${bookingData.propertyTitle}\nCheck-in: ${bookingData.checkIn}\nCheck-out: ${bookingData.checkOut}\nTotal: ₹${bookingData.total.toLocaleString("en-IN")}`,
                      ],
                      { type: "text/plain" },
                    );
                    element.href = URL.createObjectURL(file);
                    element.download = `booking-${bookingData.bookingId}.txt`;
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                  }}
                >
                  <Download className="h-4 w-4" />
                  Download Receipt
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "Booking Confirmed",
                        text: `My booking is confirmed! Booking ID: ${bookingData.bookingId}`,
                      });
                    }
                  }}
                >
                  Share Booking
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h4 className="font-airbnb-semibold text-airbnb-text-primary mb-2">
                  Need help?
                </h4>
                <p className="text-airbnb-sm text-airbnb-text-secondary mb-3">
                  Our customer support team is available 24/7 to assist you.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Contact Support
                  </Button>
                  <Button size="sm" variant="outline">
                    Message Host
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingConfirmation;
