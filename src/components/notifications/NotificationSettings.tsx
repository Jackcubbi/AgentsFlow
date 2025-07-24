import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";
import {
  Bell,
  Mail,
  Smartphone,
  Monitor,
  Bot,
  CreditCard,
  Settings,
  Shield,
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock,
  Volume2,
  VolumeX,
} from "lucide-react";

interface NotificationTypeSettings {
  enabled: boolean;
  email: boolean;
  browser: boolean;
}

interface NotificationPreferences {
  email: boolean;
  browser: boolean;
  mobile: boolean;
  quietHours: {
    enabled: boolean;
    start: string;
    end: string;
  };
  frequency: "instant" | "hourly" | "daily";
  types: {
    [key: string]: NotificationTypeSettings;
  };
}

const NotificationSettings = () => {
  const [preferences, setPreferences] = useState<NotificationPreferences>({
    email: true,
    browser: true,
    mobile: false,
    quietHours: {
      enabled: false,
      start: "22:00",
      end: "08:00",
    },
    frequency: "instant",
    types: {
      agent: { enabled: true, email: true, browser: true },
      billing: { enabled: true, email: true, browser: true },
      system: { enabled: true, email: false, browser: true },
      security: { enabled: true, email: true, browser: true },
      success: { enabled: true, email: false, browser: true },
      warning: { enabled: true, email: true, browser: true },
      error: { enabled: true, email: true, browser: true },
      info: { enabled: false, email: false, browser: false },
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const notificationTypes = [
    {
      key: "agent",
      label: "AI Agent Updates",
      description: "Performance alerts, status changes, and agent activity",
      icon: <Bot className="h-4 w-4" />,
      color: "text-blue-600",
      important: true,
    },
    {
      key: "billing",
      label: "Billing & Payments",
      description: "Payment confirmations, invoice reminders, plan changes",
      icon: <CreditCard className="h-4 w-4" />,
      color: "text-green-600",
      important: true,
    },
    {
      key: "security",
      label: "Security Alerts",
      description: "Login notifications, security warnings, account changes",
      icon: <Shield className="h-4 w-4" />,
      color: "text-red-600",
      important: true,
    },
    {
      key: "system",
      label: "System Updates",
      description: "Maintenance notifications, feature updates, outages",
      icon: <Settings className="h-4 w-4" />,
      color: "text-gray-600",
      important: false,
    },
    {
      key: "success",
      label: "Success Messages",
      description: "Confirmations and successful operations",
      icon: <CheckCircle className="h-4 w-4" />,
      color: "text-green-600",
      important: false,
    },
    {
      key: "warning",
      label: "Warnings",
      description: "Important notices requiring attention",
      icon: <AlertTriangle className="h-4 w-4" />,
      color: "text-yellow-600",
      important: true,
    },
    {
      key: "error",
      label: "Error Alerts",
      description: "Critical issues and error notifications",
      icon: <XCircle className="h-4 w-4" />,
      color: "text-red-600",
      important: true,
    },
    {
      key: "info",
      label: "General Information",
      description: "Tips, news, and general updates",
      icon: <Info className="h-4 w-4" />,
      color: "text-blue-600",
      important: false,
    },
  ];

  const updateGlobalPreference = (key: keyof NotificationPreferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const updateTypePreference = (
    type: string,
    setting: keyof NotificationTypeSettings,
  ) => {
    setPreferences((prev) => ({
      ...prev,
      types: {
        ...prev.types,
        [type]: {
          ...prev.types[type],
          [setting]: !prev.types[type][setting],
        },
      },
    }));
  };

  const updateQuietHours = (field: string, value: string | boolean) => {
    setPreferences((prev) => ({
      ...prev,
      quietHours: {
        ...prev.quietHours,
        [field]: value,
      },
    }));
  };

  const updateFrequency = (frequency: "instant" | "hourly" | "daily") => {
    setPreferences((prev) => ({
      ...prev,
      frequency,
    }));
  };

  const savePreferences = async () => {
    setIsLoading(true);
    try {
      // In a real app, this would save to API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Notification preferences saved successfully!");
    } catch (error) {
      toast.error("Failed to save preferences. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const requestBrowserPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        toast.success("Browser notifications enabled!");
        setPreferences((prev) => ({ ...prev, browser: true }));
      } else {
        toast.error("Browser notification permission denied.");
        setPreferences((prev) => ({ ...prev, browser: false }));
      }
    } catch (error) {
      toast.error("Failed to request notification permission.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Global Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Global Notification Settings
          </CardTitle>
          <CardDescription>
            Configure how you want to receive notifications across all channels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Delivery Methods */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Delivery Methods</Label>
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                </div>
                <Switch
                  checked={preferences.email}
                  onCheckedChange={() => updateGlobalPreference("email")}
                />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Monitor className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Browser Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Show notifications in your browser
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {Notification.permission !== "granted" && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={requestBrowserPermission}
                    >
                      Enable
                    </Button>
                  )}
                  <Switch
                    checked={preferences.browser}
                    onCheckedChange={() => updateGlobalPreference("browser")}
                    disabled={Notification.permission !== "granted"}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg opacity-50">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Mobile Push Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Send notifications to your mobile device
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Coming Soon
                  </Badge>
                  <Switch checked={false} disabled />
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Frequency Settings */}
          <div className="space-y-4">
            <Label className="text-base font-medium">
              Notification Frequency
            </Label>
            <Select
              value={preferences.frequency}
              onValueChange={updateFrequency}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="instant">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    Instant (as they happen)
                  </div>
                </SelectItem>
                <SelectItem value="hourly">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Hourly digest
                  </div>
                </SelectItem>
                <SelectItem value="daily">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Daily summary
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* Quiet Hours */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {preferences.quietHours.enabled ? (
                  <VolumeX className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Volume2 className="h-4 w-4 text-muted-foreground" />
                )}
                <Label className="text-base font-medium">Quiet Hours</Label>
              </div>
              <Switch
                checked={preferences.quietHours.enabled}
                onCheckedChange={(enabled) =>
                  updateQuietHours("enabled", enabled)
                }
              />
            </div>

            {preferences.quietHours.enabled && (
              <div className="grid grid-cols-2 gap-4 pl-6">
                <div>
                  <Label htmlFor="start-time" className="text-sm">
                    Start Time
                  </Label>
                  <Select
                    value={preferences.quietHours.start}
                    onValueChange={(value) => updateQuietHours("start", value)}
                  >
                    <SelectTrigger id="start-time">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }, (_, i) => {
                        const hour = i.toString().padStart(2, "0");
                        return (
                          <SelectItem key={hour} value={`${hour}:00`}>
                            {hour}:00
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="end-time" className="text-sm">
                    End Time
                  </Label>
                  <Select
                    value={preferences.quietHours.end}
                    onValueChange={(value) => updateQuietHours("end", value)}
                  >
                    <SelectTrigger id="end-time">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }, (_, i) => {
                        const hour = i.toString().padStart(2, "0");
                        return (
                          <SelectItem key={hour} value={`${hour}:00`}>
                            {hour}:00
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Notification Type Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Types</CardTitle>
          <CardDescription>
            Customize which types of notifications you want to receive and how
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notificationTypes.map((type) => {
              const settings = preferences.types[type.key];
              return (
                <div
                  key={type.key}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className={type.color}>{type.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{type.label}</p>
                        {type.important && (
                          <Badge variant="outline" className="text-xs">
                            Important
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {type.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Master toggle */}
                    <Switch
                      checked={settings.enabled}
                      onCheckedChange={() =>
                        updateTypePreference(type.key, "enabled")
                      }
                    />

                    {/* Individual channel toggles */}
                    {settings.enabled && (
                      <div className="flex items-center gap-2 text-xs">
                        <button
                          onClick={() =>
                            updateTypePreference(type.key, "email")
                          }
                          className={`p-1 rounded ${
                            settings.email
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-400"
                          }`}
                          title="Email notifications"
                        >
                          <Mail className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() =>
                            updateTypePreference(type.key, "browser")
                          }
                          className={`p-1 rounded ${
                            settings.browser
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-400"
                          }`}
                          title="Browser notifications"
                        >
                          <Monitor className="h-3 w-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Important Notice */}
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          Some notification types like security alerts and billing notifications
          cannot be completely disabled for account safety and compliance
          reasons.
        </AlertDescription>
      </Alert>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={savePreferences} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Preferences"}
        </Button>
      </div>
    </div>
  );
};

export default NotificationSettings;
