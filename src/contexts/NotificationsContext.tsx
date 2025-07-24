import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  AppNotification,
  NotificationType,
  NotificationGroup,
} from "@/types/notifications";
import { useAuth } from "./AuthContext";
import { toast } from "sonner";

interface NotificationsContextType {
  notifications: AppNotification[];
  unreadCount: number;
  groups: NotificationGroup[];
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  deleteNotification: (id: string) => void;
  clearAll: () => void;
  addNotification: (
    notification: Omit<AppNotification, "id" | "timestamp" | "read">,
  ) => void;
  isLoading: boolean;
  fetchNotifications: () => Promise<void>;
}

const NotificationsContext = createContext<
  NotificationsContextType | undefined
>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (context === undefined) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider",
    );
  }
  return context;
};

// Sample notifications for demo
const sampleNotifications: AppNotification[] = [
  {
    id: "1",
    type: "agent",
    title: "Support Agent Performance Alert",
    message:
      "Customer Support Agent has handled 1,247 conversations today with 4.8★ satisfaction",
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
    read: false,
    urgent: false,
    actionUrl: "/dashboard",
    actionLabel: "View Details",
    metadata: { agentId: "support-001", severity: "low" },
  },
  {
    id: "2",
    type: "billing",
    title: "Payment Method Expiring",
    message:
      "Your credit card ending in 4242 will expire in 7 days. Please update your payment method.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    read: false,
    urgent: true,
    actionUrl: "/dashboard/billing",
    actionLabel: "Update Payment",
    metadata: { severity: "medium" },
  },
  {
    id: "3",
    type: "system",
    title: "System Maintenance Scheduled",
    message:
      "Scheduled maintenance on Sunday, Jan 28th from 2:00 AM - 4:00 AM EST. Minimal disruption expected.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    read: false,
    urgent: false,
    actionUrl: "/dashboard",
    actionLabel: "Learn More",
    metadata: { severity: "low" },
  },
  {
    id: "4",
    type: "success",
    title: "New Agent Deployed Successfully",
    message:
      "Sales Qualification Agent is now live and processing leads automatically.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
    read: true,
    urgent: false,
    actionUrl: "/dashboard",
    actionLabel: "View Agent",
    metadata: { agentId: "sales-001", severity: "low" },
  },
  {
    id: "5",
    type: "security",
    title: "New Login Detected",
    message:
      "A new login to your account was detected from Chrome on Windows in New York, NY.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    read: true,
    urgent: false,
    actionUrl: "/dashboard/settings",
    actionLabel: "Review Security",
    metadata: { severity: "medium" },
  },
  {
    id: "6",
    type: "warning",
    title: "API Rate Limit Warning",
    message:
      "You've used 85% of your monthly API quota. Consider upgrading your plan.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    read: true,
    urgent: false,
    actionUrl: "/dashboard/billing",
    actionLabel: "Upgrade Plan",
    metadata: { severity: "medium" },
  },
];

export const NotificationsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user, isAuthenticated } = useAuth();

  // Initialize with sample data for demo
  useEffect(() => {
    if (isAuthenticated) {
      setNotifications(sampleNotifications);
    }
  }, [isAuthenticated]);

  // Group notifications by type
  const groups: NotificationGroup[] = React.useMemo(() => {
    const typeMap = new Map<NotificationType, AppNotification[]>();

    notifications.forEach((notification) => {
      const existing = typeMap.get(notification.type) || [];
      typeMap.set(notification.type, [...existing, notification]);
    });

    const groupConfigs = [
      {
        type: "agent" as NotificationType,
        label: "AI Agents",
        icon: "🤖",
        color: "text-blue-600",
      },
      {
        type: "billing" as NotificationType,
        label: "Billing",
        icon: "💳",
        color: "text-green-600",
      },
      {
        type: "system" as NotificationType,
        label: "System",
        icon: "⚙️",
        color: "text-gray-600",
      },
      {
        type: "security" as NotificationType,
        label: "Security",
        icon: "🔒",
        color: "text-red-600",
      },
      {
        type: "success" as NotificationType,
        label: "Success",
        icon: "✅",
        color: "text-green-600",
      },
      {
        type: "warning" as NotificationType,
        label: "Warnings",
        icon: "⚠️",
        color: "text-yellow-600",
      },
      {
        type: "error" as NotificationType,
        label: "Errors",
        icon: "❌",
        color: "text-red-600",
      },
      {
        type: "info" as NotificationType,
        label: "Information",
        icon: "ℹ️",
        color: "text-blue-600",
      },
    ];

    return groupConfigs
      .map((config) => ({
        ...config,
        notifications: typeMap.get(config.type) || [],
        unreadCount: (typeMap.get(config.type) || []).filter((n) => !n.read)
          .length,
      }))
      .filter((group) => group.notifications.length > 0);
  }, [notifications]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const fetchNotifications = async () => {
    if (!isAuthenticated) return;

    setIsLoading(true);
    try {
      // In a real app, this would fetch from API
      // const response = await fetch('/api/notifications');
      // const data = await response.json();
      // setNotifications(data);

      // For demo, we'll simulate a delay and keep sample data
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
      toast.error("Failed to load notifications");
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true })),
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
    toast.success("Notification deleted");
  };

  const clearAll = () => {
    setNotifications([]);
    toast.success("All notifications cleared");
  };

  const addNotification = (
    notificationData: Omit<AppNotification, "id" | "timestamp" | "read">,
  ) => {
    const newNotification: AppNotification = {
      ...notificationData,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false,
    };

    setNotifications((prev) => [newNotification, ...prev]);

    // Show browser notification if permission granted
    if (Notification.permission === "granted") {
      new Notification(notificationData.title, {
        body: notificationData.message,
        icon: "/favicon.ico",
        tag: newNotification.id,
      });
    }
  };

  // Request notification permission on mount
  useEffect(() => {
    if (isAuthenticated && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, [isAuthenticated]);

  // Simulate real-time notifications (in production, this would be WebSocket/SSE)
  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(() => {
      // Randomly add new notifications for demo
      if (Math.random() > 0.95) {
        // 5% chance every 10 seconds
        const randomNotifications = [
          {
            type: "agent" as NotificationType,
            title: "Agent Status Update",
            message:
              "Customer Support Agent successfully resolved 5 new tickets",
            urgent: false,
          },
          {
            type: "info" as NotificationType,
            title: "Tip of the Day",
            message:
              "Use natural language to configure your AI agents for better performance",
            urgent: false,
          },
        ];

        const randomNotification =
          randomNotifications[
            Math.floor(Math.random() * randomNotifications.length)
          ];
        addNotification(randomNotification);
      }
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const value: NotificationsContextType = {
    notifications,
    unreadCount,
    groups,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    clearAll,
    addNotification,
    isLoading,
    fetchNotifications,
  };

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};
