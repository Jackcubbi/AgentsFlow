export type NotificationType =
  | "info"
  | "success"
  | "warning"
  | "error"
  | "agent"
  | "billing"
  | "system"
  | "security";

export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  urgent?: boolean;
  actionUrl?: string;
  actionLabel?: string;
  metadata?: {
    agentId?: string;
    userId?: string;
    amount?: number;
    severity?: "low" | "medium" | "high" | "critical";
  };
}

export interface NotificationGroup {
  type: NotificationType;
  label: string;
  icon: string;
  color: string;
  notifications: AppNotification[];
  unreadCount: number;
}

export interface NotificationPreferences {
  email: boolean;
  browser: boolean;
  mobile: boolean;
  types: {
    [K in NotificationType]: {
      enabled: boolean;
      email: boolean;
      browser: boolean;
    };
  };
}
