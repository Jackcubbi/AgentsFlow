import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useNotifications } from "@/contexts/NotificationsContext";
import { AppNotification, NotificationType } from "@/types/notifications";
import { formatDistanceToNow } from "date-fns";
import {
  Bell,
  BellRing,
  Check,
  CheckCheck,
  X,
  ExternalLink,
  Settings,
  Trash2,
  AlertCircle,
  Bot,
  CreditCard,
  Zap,
  Shield,
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";

const NotificationsDropdown = () => {
  const {
    notifications,
    unreadCount,
    groups,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    clearAll,
    isLoading,
  } = useNotifications();

  const [activeTab, setActiveTab] = useState("all");

  const getNotificationIcon = (type: NotificationType) => {
    const iconProps = { className: "h-4 w-4" };
    switch (type) {
      case "agent":
        return <Bot {...iconProps} />;
      case "billing":
        return <CreditCard {...iconProps} />;
      case "system":
        return <Settings {...iconProps} />;
      case "security":
        return <Shield {...iconProps} />;
      case "success":
        return (
          <CheckCircle {...iconProps} className="h-4 w-4 text-green-600" />
        );
      case "warning":
        return (
          <AlertTriangle {...iconProps} className="h-4 w-4 text-yellow-600" />
        );
      case "error":
        return <XCircle {...iconProps} className="h-4 w-4 text-red-600" />;
      case "info":
      default:
        return <Info {...iconProps} className="h-4 w-4 text-blue-600" />;
    }
  };

  const getNotificationColor = (type: NotificationType, urgent?: boolean) => {
    if (urgent) return "border-l-red-500 bg-red-50";

    switch (type) {
      case "agent":
        return "border-l-blue-500 bg-blue-50";
      case "billing":
        return "border-l-green-500 bg-green-50";
      case "system":
        return "border-l-gray-500 bg-gray-50";
      case "security":
        return "border-l-red-500 bg-red-50";
      case "success":
        return "border-l-green-500 bg-green-50";
      case "warning":
        return "border-l-yellow-500 bg-yellow-50";
      case "error":
        return "border-l-red-500 bg-red-50";
      case "info":
      default:
        return "border-l-blue-500 bg-blue-50";
    }
  };

  const NotificationItem = ({
    notification,
  }: {
    notification: AppNotification;
  }) => {
    return (
      <div
        className={`p-3 border-l-4 ${getNotificationColor(notification.type, notification.urgent)} ${
          !notification.read ? "bg-opacity-100" : "bg-opacity-30"
        } transition-all duration-200 hover:bg-opacity-60`}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            {getNotificationIcon(notification.type)}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <p
                  className={`text-sm font-medium ${!notification.read ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {notification.title}
                  {notification.urgent && (
                    <Badge variant="destructive" className="ml-2 text-xs">
                      Urgent
                    </Badge>
                  )}
                </p>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {notification.message}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  {formatDistanceToNow(notification.timestamp, {
                    addSuffix: true,
                  })}
                </p>
              </div>

              {!notification.read && (
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1" />
              )}
            </div>

            <div className="flex items-center gap-2 mt-2">
              {!notification.read && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => markAsRead(notification.id)}
                  className="h-6 px-2 text-xs"
                >
                  <Check className="h-3 w-3 mr-1" />
                  Mark Read
                </Button>
              )}

              {notification.actionUrl && (
                <Link to={notification.actionUrl}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs text-primary"
                  >
                    {notification.actionLabel || "View"}
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              )}

              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteNotification(notification.id)}
                className="h-6 px-2 text-xs text-red-600 hover:text-red-700"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const EmptyState = ({ type }: { type: string }) => (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <Bell className="h-12 w-12 text-muted-foreground/50 mb-3" />
      <p className="text-sm font-medium text-muted-foreground">
        {type === "all" ? "No notifications" : `No ${type} notifications`}
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        You're all caught up!
      </p>
    </div>
  );

  const filteredNotifications =
    activeTab === "all"
      ? notifications
      : notifications.filter((n) => n.type === activeTab);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          {unreadCount > 0 ? (
            <BellRing className="h-5 w-5" />
          ) : (
            <Bell className="h-5 w-5" />
          )}
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-red-500 text-white flex items-center justify-center">
              {unreadCount > 99 ? "99+" : unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-96 p-0">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base">Notifications</h3>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={markAllAsRead}
                  className="h-7 px-2 text-xs"
                >
                  <CheckCheck className="h-3 w-3 mr-1" />
                  Mark All Read
                </Button>
              )}

              {notifications.length > 0 && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 px-2 text-xs text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Clear All
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Clear All Notifications?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. All notifications will be
                        permanently deleted.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={clearAll}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Clear All
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
          </div>

          {unreadCount > 0 && (
            <p className="text-sm text-muted-foreground mt-1">
              You have {unreadCount} unread notification
              {unreadCount !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="px-4 pt-2">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all" className="text-xs">
                All
                {unreadCount > 0 && (
                  <Badge variant="secondary" className="ml-1 h-4 text-xs">
                    {unreadCount}
                  </Badge>
                )}
              </TabsTrigger>
              {groups.slice(0, 3).map((group) => (
                <TabsTrigger
                  key={group.type}
                  value={group.type}
                  className="text-xs"
                >
                  {group.type === "agent"
                    ? "AI"
                    : group.type === "billing"
                      ? "Bill"
                      : "Sys"}
                  {group.unreadCount > 0 && (
                    <Badge variant="secondary" className="ml-1 h-4 text-xs">
                      {group.unreadCount}
                    </Badge>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <ScrollArea className="h-80">
            <TabsContent value="all" className="mt-0">
              {filteredNotifications.length === 0 ? (
                <EmptyState type="all" />
              ) : (
                <div className="space-y-0">
                  {filteredNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                    />
                  ))}
                </div>
              )}
            </TabsContent>

            {groups.map((group) => (
              <TabsContent key={group.type} value={group.type} className="mt-0">
                {group.notifications.length === 0 ? (
                  <EmptyState type={group.label.toLowerCase()} />
                ) : (
                  <div className="space-y-0">
                    {group.notifications.map((notification) => (
                      <NotificationItem
                        key={notification.id}
                        notification={notification}
                      />
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </ScrollArea>
        </Tabs>

        <DropdownMenuSeparator />

        <div className="p-4">
          <Link to="/dashboard/settings">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <Settings className="h-4 w-4 mr-2" />
              Notification Settings
            </Button>
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationsDropdown;
