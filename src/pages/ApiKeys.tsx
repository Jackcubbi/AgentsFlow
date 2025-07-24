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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Key,
  Plus,
  Copy,
  Eye,
  EyeOff,
  MoreHorizontal,
  Edit,
  Trash2,
  Shield,
  Code,
  Zap,
  Globe,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";
import { toast } from "sonner";

const ApiKeys = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [newKeyDescription, setNewKeyDescription] = useState("");
  const [newKeyPermissions, setNewKeyPermissions] = useState<string[]>([]);
  const [visibleKeys, setVisibleKeys] = useState<Set<number>>(new Set());

  const apiKeys = [
    {
      id: 1,
      name: "Production API Key",
      description: "Main production environment access",
      key: "agf_prod_sk_1234567890abcdef1234567890abcdef",
      keyPreview: "agf_prod_sk_123...cdef",
      created: "2024-01-15",
      lastUsed: "2024-02-14 14:32",
      status: "active",
      permissions: [
        "agents:read",
        "agents:write",
        "conversations:read",
        "analytics:read",
      ],
      usageCount: 145782,
      rateLimit: "1000/hour",
    },
    {
      id: 2,
      name: "Development API Key",
      description: "Testing and development purposes",
      key: "agf_dev_sk_abcdef1234567890abcdef1234567890",
      keyPreview: "agf_dev_sk_abc...7890",
      created: "2024-02-01",
      lastUsed: "2024-02-13 09:15",
      status: "active",
      permissions: ["agents:read", "conversations:read"],
      usageCount: 8943,
      rateLimit: "100/hour",
    },
    {
      id: 3,
      name: "Analytics API Key",
      description: "Read-only access for reporting dashboard",
      key: "agf_analytics_sk_fedcba0987654321fedcba0987654321",
      keyPreview: "agf_analytics_sk_fed...4321",
      created: "2024-01-20",
      lastUsed: "2024-02-14 16:45",
      status: "active",
      permissions: ["analytics:read", "usage:read"],
      usageCount: 23456,
      rateLimit: "500/hour",
    },
    {
      id: 4,
      name: "Backup Integration Key",
      description: "Legacy system integration (deprecated)",
      key: "agf_backup_sk_1122334455667788990011223344556677",
      keyPreview: "agf_backup_sk_112...6677",
      created: "2023-12-10",
      lastUsed: "2024-01-28 11:22",
      status: "inactive",
      permissions: ["agents:read"],
      usageCount: 892,
      rateLimit: "50/hour",
    },
  ];

  const availablePermissions = [
    {
      id: "agents:read",
      label: "Read Agents",
      description: "View agent configurations and status",
    },
    {
      id: "agents:write",
      label: "Write Agents",
      description: "Create, update, and delete agents",
    },
    {
      id: "conversations:read",
      label: "Read Conversations",
      description: "Access conversation history and messages",
    },
    {
      id: "conversations:write",
      label: "Write Conversations",
      description: "Send messages and update conversation status",
    },
    {
      id: "analytics:read",
      label: "Read Analytics",
      description: "Access performance metrics and reports",
    },
    {
      id: "usage:read",
      label: "Read Usage",
      description: "View usage statistics and billing information",
    },
    {
      id: "team:read",
      label: "Read Team",
      description: "View team members and roles",
    },
    {
      id: "webhooks:write",
      label: "Manage Webhooks",
      description: "Create and manage webhook endpoints",
    },
  ];

  const toggleKeyVisibility = (keyId: number) => {
    const newVisibleKeys = new Set(visibleKeys);
    if (newVisibleKeys.has(keyId)) {
      newVisibleKeys.delete(keyId);
    } else {
      newVisibleKeys.add(keyId);
    }
    setVisibleKeys(newVisibleKeys);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("API key copied to clipboard!");
  };

  const handleCreateKey = () => {
    if (!newKeyName.trim()) {
      toast.error("Please enter a name for the API key");
      return;
    }

    if (newKeyPermissions.length === 0) {
      toast.error("Please select at least one permission");
      return;
    }

    toast.success("API key created successfully!");
    setNewKeyName("");
    setNewKeyDescription("");
    setNewKeyPermissions([]);
    setIsCreateOpen(false);
  };

  const handlePermissionChange = (permissionId: string, checked: boolean) => {
    if (checked) {
      setNewKeyPermissions([...newKeyPermissions, permissionId]);
    } else {
      setNewKeyPermissions(newKeyPermissions.filter((p) => p !== permissionId));
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Active
          </Badge>
        );
      case "inactive":
        return (
          <Badge className="bg-gray-100 text-gray-800">
            <Clock className="w-3 h-3 mr-1" />
            Inactive
          </Badge>
        );
      case "expired":
        return (
          <Badge className="bg-red-100 text-red-800">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Expired
          </Badge>
        );
      default:
        return null;
    }
  };

  const getPermissionBadge = (permission: string) => {
    const isWrite = permission.includes("write");
    return (
      <Badge
        key={permission}
        variant="secondary"
        className={
          isWrite
            ? "bg-orange-100 text-orange-800"
            : "bg-blue-100 text-blue-800"
        }
      >
        {permission.split(":")[1] === "read" ? "Read" : "Write"}{" "}
        {permission.split(":")[0]}
      </Badge>
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">API Keys</h1>
            <p className="text-muted-foreground mt-1">
              Manage API keys for programmatic access to AgentFlow
            </p>
          </div>
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-primary to-purple-600">
                <Plus className="mr-2 h-4 w-4" />
                Create API Key
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New API Key</DialogTitle>
                <DialogDescription>
                  Generate a new API key with specific permissions for your
                  application
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="keyName">Key Name</Label>
                  <Input
                    id="keyName"
                    placeholder="e.g., Production API Key"
                    value={newKeyName}
                    onChange={(e) => setNewKeyName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keyDescription">Description (Optional)</Label>
                  <Textarea
                    id="keyDescription"
                    placeholder="Describe what this API key will be used for..."
                    value={newKeyDescription}
                    onChange={(e) => setNewKeyDescription(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="space-y-4">
                  <Label>Permissions</Label>
                  <div className="grid grid-cols-1 gap-3 max-h-64 overflow-y-auto">
                    {availablePermissions.map((permission) => (
                      <div
                        key={permission.id}
                        className="flex items-start space-x-3 p-3 border rounded-lg"
                      >
                        <Checkbox
                          id={permission.id}
                          checked={newKeyPermissions.includes(permission.id)}
                          onCheckedChange={(checked) =>
                            handlePermissionChange(
                              permission.id,
                              checked as boolean,
                            )
                          }
                        />
                        <div className="space-y-1">
                          <Label
                            htmlFor={permission.id}
                            className="text-sm font-medium cursor-pointer"
                          >
                            {permission.label}
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            {permission.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setIsCreateOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleCreateKey}
                    className="bg-gradient-to-r from-primary to-purple-600"
                  >
                    Create API Key
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* API Usage Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total API Keys
              </CardTitle>
              <Key className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{apiKeys.length}</div>
              <p className="text-xs text-muted-foreground">
                {apiKeys.filter((k) => k.status === "active").length} active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                API Calls Today
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">
                +12% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Rate Limit Status
              </CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">98%</div>
              <p className="text-xs text-muted-foreground">within limits</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Last Request
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2m</div>
              <p className="text-xs text-muted-foreground">ago</p>
            </CardContent>
          </Card>
        </div>

        {/* API Keys List */}
        <Card>
          <CardHeader>
            <CardTitle>Your API Keys</CardTitle>
            <CardDescription>
              Manage your API keys and their permissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {apiKeys.map((key) => (
                <div
                  key={key.id}
                  className="p-6 border rounded-lg space-y-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold text-lg">{key.name}</h4>
                        {getStatusBadge(key.status)}
                      </div>
                      {key.description && (
                        <p className="text-sm text-muted-foreground">
                          {key.description}
                        </p>
                      )}
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Permissions
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Activity className="mr-2 h-4 w-4" />
                          View Usage Stats
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete Key
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Label className="text-sm font-medium">API Key:</Label>
                      <div className="flex items-center gap-2 flex-1">
                        <code className="flex-1 px-3 py-2 bg-muted rounded font-mono text-sm">
                          {visibleKeys.has(key.id) ? key.key : key.keyPreview}
                        </code>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleKeyVisibility(key.id)}
                        >
                          {visibleKeys.has(key.id) ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => copyToClipboard(key.key)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Created:</span>
                        <span className="ml-2 font-medium">{key.created}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Last Used:
                        </span>
                        <span className="ml-2 font-medium">{key.lastUsed}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Usage:</span>
                        <span className="ml-2 font-medium">
                          {key.usageCount.toLocaleString()} calls
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Permissions:
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        {key.permissions.map((permission) =>
                          getPermissionBadge(permission),
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Rate Limit:</Label>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {key.rateLimit}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Current usage: 234/1000 requests this hour
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Documentation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              API Documentation
            </CardTitle>
            <CardDescription>
              Learn how to integrate with the AgentFlow API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Quick Start Guide</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Get started with the AgentFlow API in minutes
                </p>
                <Button variant="outline" size="sm">
                  <Globe className="mr-2 h-4 w-4" />
                  View Guide
                </Button>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">API Reference</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Complete API documentation with examples
                </p>
                <Button variant="outline" size="sm">
                  <Code className="mr-2 h-4 w-4" />
                  View Docs
                </Button>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">SDK Libraries</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Official SDKs for popular programming languages
                </p>
                <Button variant="outline" size="sm">
                  <Shield className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Example Request</h4>
              <pre className="text-sm bg-background p-3 rounded border overflow-x-auto">
                {`curl -X GET "https://api.agentflow.com/v1/agents" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ApiKeys;
