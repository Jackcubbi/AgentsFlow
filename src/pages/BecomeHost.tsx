import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Upload,
  MapPin,
  DollarSign,
  Users,
  Home,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/AuthModal";
import { toast } from "sonner";

const BecomeHost = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isHost } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    latitude: "",
    longitude: "",
    pricePerNight: "",
    maxGuests: "",
    bedrooms: "",
    bathrooms: "",
    amenities: [] as string[],
    images: [] as File[],
  });

  const amenitiesList = [
    "WiFi",
    "Kitchen",
    "Washing machine",
    "Air conditioning",
    "Heating",
    "Dedicated workspace",
    "TV",
    "Hair dryer",
    "Iron",
    "Pool",
    "Hot tub",
    "Free parking",
    "Gym",
    "Breakfast",
    "Smoking allowed",
    "Pets allowed",
  ];

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        amenities: [...prev.amenities, amenity],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        amenities: prev.amenities.filter((a) => a !== amenity),
      }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + formData.images.length > 10) {
      toast.error("Maximum 10 images allowed");
      return;
    }
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    setLoading(true);
    try {
      const formDataToSend = new FormData();

      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "images") {
          value.forEach((file: File) => {
            formDataToSend.append("images", file);
          });
        } else if (key === "amenities") {
          formDataToSend.append(key, JSON.stringify(value));
        } else {
          formDataToSend.append(key, value as string);
        }
      });

      const token = localStorage.getItem("authToken");
      const response = await fetch("http://localhost:3001/api/properties", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success("Property listed successfully!");
        navigate("/host-dashboard");
      } else {
        throw new Error("Failed to create property");
      }
    } catch (error) {
      toast.error("Failed to create property. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Home className="h-16 w-16 text-airbnb-primary mx-auto mb-4" />
              <h2 className="text-3xl font-airbnb-semibold text-airbnb-text-primary mb-2">
                Tell us about your place
              </h2>
              <p className="text-airbnb-text-secondary">
                Share some basic info, like where it is and how many guests can
                stay.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Property title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Beautiful apartment in downtown"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Describe your space, what makes it special, and what guests can expect..."
                  className="mt-1 min-h-[120px]"
                />
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-airbnb-text-secondary" />
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder="City, State, Country"
                    className="pl-10 mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="maxGuests">Max guests</Label>
                  <Select
                    value={formData.maxGuests}
                    onValueChange={(value) =>
                      setFormData({ ...formData, maxGuests: value })
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Select
                    value={formData.bedrooms}
                    onValueChange={(value) =>
                      setFormData({ ...formData, bedrooms: value })
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Select
                    value={formData.bathrooms}
                    onValueChange={(value) =>
                      setFormData({ ...formData, bathrooms: value })
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 1.5, 2, 2.5, 3, 3.5, 4].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Users className="h-16 w-16 text-airbnb-primary mx-auto mb-4" />
              <h2 className="text-3xl font-airbnb-semibold text-airbnb-text-primary mb-2">
                What amenities do you offer?
              </h2>
              <p className="text-airbnb-text-secondary">
                Select all the amenities that are available to guests.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {amenitiesList.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-airbnb-primary transition-colors"
                >
                  <Checkbox
                    id={amenity}
                    checked={formData.amenities.includes(amenity)}
                    onCheckedChange={(checked) =>
                      handleAmenityChange(amenity, !!checked)
                    }
                  />
                  <Label htmlFor={amenity} className="flex-1 cursor-pointer">
                    {amenity}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <ImageIcon className="h-16 w-16 text-airbnb-primary mx-auto mb-4" />
              <h2 className="text-3xl font-airbnb-semibold text-airbnb-text-primary mb-2">
                Add photos of your place
              </h2>
              <p className="text-airbnb-text-secondary">
                Upload high-quality photos that showcase your space. You can add
                up to 10 photos.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-airbnb-primary transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="h-12 w-12 text-airbnb-text-secondary mx-auto mb-4" />
                  <p className="text-airbnb-text-primary font-airbnb-medium">
                    Choose photos to upload
                  </p>
                  <p className="text-airbnb-text-secondary text-sm">
                    PNG, JPG up to 5MB each
                  </p>
                </label>
              </div>

              {formData.images.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {formData.images.map((file, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                        onClick={() => removeImage(index)}
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <DollarSign className="h-16 w-16 text-airbnb-primary mx-auto mb-4" />
              <h2 className="text-3xl font-airbnb-semibold text-airbnb-text-primary mb-2">
                Set your price
              </h2>
              <p className="text-airbnb-text-secondary">
                You can change your price anytime.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <Label htmlFor="pricePerNight">Price per night (USD)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-airbnb-text-secondary" />
                <Input
                  id="pricePerNight"
                  type="number"
                  value={formData.pricePerNight}
                  onChange={(e) =>
                    setFormData({ ...formData, pricePerNight: e.target.value })
                  }
                  placeholder="0"
                  className="pl-10 mt-1 text-2xl font-airbnb-semibold h-16"
                />
              </div>
              <p className="text-airbnb-text-secondary text-sm mt-2">
                This is your base price. You can adjust it for specific dates,
                seasons, or length of stay.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-airbnb-semibold text-airbnb-text-primary mb-4">
                Property Summary
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-airbnb-text-secondary">Title:</span>
                  <span className="text-airbnb-text-primary">
                    {formData.title || "Not set"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-airbnb-text-secondary">Location:</span>
                  <span className="text-airbnb-text-primary">
                    {formData.location || "Not set"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-airbnb-text-secondary">Guests:</span>
                  <span className="text-airbnb-text-primary">
                    {formData.maxGuests || "0"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-airbnb-text-secondary">Bedrooms:</span>
                  <span className="text-airbnb-text-primary">
                    {formData.bedrooms || "0"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-airbnb-text-secondary">Bathrooms:</span>
                  <span className="text-airbnb-text-primary">
                    {formData.bathrooms || "0"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-airbnb-text-secondary">Amenities:</span>
                  <span className="text-airbnb-text-primary">
                    {formData.amenities.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-airbnb-text-secondary">Photos:</span>
                  <span className="text-airbnb-text-primary">
                    {formData.images.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-8 py-4">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-airbnb-text-primary hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Airbnb
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-airbnb-text-secondary">
              Step {currentStep} of 4
            </span>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div
                className="bg-airbnb-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-8 py-12">
        {renderStep()}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          {currentStep < 4 ? (
            <Button
              onClick={nextStep}
              className="bg-airbnb-primary hover:bg-airbnb-primary/90 text-white px-8"
              disabled={
                (currentStep === 1 &&
                  (!formData.title ||
                    !formData.description ||
                    !formData.location)) ||
                (currentStep === 3 && formData.images.length === 0) ||
                (currentStep === 4 && !formData.pricePerNight)
              }
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={loading || !formData.pricePerNight}
              className="bg-airbnb-primary hover:bg-airbnb-primary/90 text-white px-8"
            >
              {loading ? "Creating listing..." : "Publish listing"}
            </Button>
          )}
        </div>
      </main>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultMode="register"
        isHostSignup={true}
      />
    </div>
  );
};

export default BecomeHost;
