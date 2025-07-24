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
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Users,
  UserPlus,
  Mail,
  MoreHorizontal,
  Crown,
  Shield,
  Eye,
  Edit,
  Trash2,
  Clock,
  CheckCircle,
  XCircle,
  Send,
} from "lucide-react";
import { toast } from "sonner";

const Team = () => {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("member");

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@techcorp.com",
      role: "owner",
      avatar: "/placeholder-avatar.jpg",
      status: "active",
      lastActive: "Online now",
      joinedDate: "Jan 15, 2024",
      agentsCreated: 5,
      conversationsHandled: 12547,
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike@techcorp.com",
      role: "admin",
      avatar: "/placeholder-avatar.jpg",
      status: "active",
      lastActive: "2 hours ago",
      joinedDate: "Jan 20, 2024",
      agentsCreated: 3,
      conversationsHandled: 8932,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily@techcorp.com",
      role: "member",
      avatar: "/placeholder-avatar.jpg",
      status: "active",
      lastActive: "1 day ago",
      joinedDate: "Feb 1, 2024",
      agentsCreated: 2,
      conversationsHandled: 4521,
    },
    {
      id: 4,
      name: "Alex Thompson",
      email: "alex@techcorp.com",
      role: "viewer",
      avatar: "/placeholder-avatar.jpg",
      status: "pending",
      lastActive: "Invitation sent",
      joinedDate: "Feb 10, 2024",
      agentsCreated: 0,
      conversationsHandled: 0,
    },
  ];

  const pendingInvitations = [
    {
      id: 1,
      email: "john@techcorp.com",
      role: "member",
      sentDate: "Feb 12, 2024",
      sentBy: "Sarah Johnson",
    },
    {
      id: 2,
      email: "lisa@techcorp.com",
      role: "viewer",
      sentDate: "Feb 13, 2024",
      sentBy: "Mike Chen",
    },
  ];

  const rolePermissions = {
    owner: {
      label: "Owner",
      description: "Full access to all features and settings",
      icon: Crown,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 border-yellow-200",
      permissions: [
        "Manage billing and subscriptions",
        "Add/remove team members",
        "Create and manage all agents",
        "Access all analytics",
        "Manage organization settings",
      ],
    },
    admin: {
      label: "Admin",
      description: "Manage agents and team members",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-50 border-blue-200",
      permissions: [
        "Add/remove team members",
        "Create and manage all agents",
        "Access all analytics",
        "Manage team settings",
      ],
    },
    member: {
      label: "Member",
      description: "Create and manage own agents",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50 border-green-200",
      permissions: [
        "Create and manage own agents",
        "Access own analytics",
        "Collaborate on shared agents",
      ],
    },
    viewer: {
      label: "Viewer",
      description: "Read-only access to agents and analytics",
      icon: Eye,
      color: "text-gray-600",
      bgColor: "bg-gray-50 border-gray-200",
      permissions: [
        "View agents and analytics",
        "Export reports",
        "Access shared resources",
      ],
    },
  };

  const handleInviteMember = () => {
    if (!inviteEmail) {
      toast.error("Please enter an email address");
      return;
    }

    toast.success(`Invitation sent to ${inviteEmail}`);
    setInviteEmail("");
    setInviteRole("member");
    setIsInviteOpen(false);
  };

  const handleRoleChange = (memberId: number, newRole: string) => {
    toast.success(`Role updated successfully`);
  };

  const handleRemoveMember = (memberId: number) => {
    toast.success("Team member removed");
  };

  const handleResendInvitation = (email: string) => {
    toast.success(`Invitation resent to ${email}`);
  };

  const getRoleIcon = (role: string) => {
    const roleConfig = rolePermissions[role as keyof typeof rolePermissions];
    if (roleConfig) {
      const IconComponent = roleConfig.icon;
      return <IconComponent className={`h-4 w-4 ${roleConfig.color}`} />;
    }
    return null;
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
      case "pending":
        return (
          <Badge className="bg-orange-100 text-orange-800">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        );
      case "inactive":
        return (
          <Badge className="bg-gray-100 text-gray-800">
            <XCircle className="w-3 h-3 mr-1" />
            Inactive
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Team Management</h1>
            <p className="text-muted-foreground mt-1">
              Manage your team members and their access permissions
            </p>
          </div>
          <Dialog open={isInviteOpen} onOpenChange={setIsInviteOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-primary to-purple-600">
                <UserPlus className="mr-2 h-4 w-4" />
                Invite Member
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Invite Team Member</DialogTitle>
                <DialogDescription>
                  Send an invitation to join your AgentFlow team
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="colleague@company.com"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select value={inviteRole} onValueChange={setInviteRole}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="member">Member</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    {
                      rolePermissions[
                        inviteRole as keyof typeof rolePermissions
                      ]?.description
                    }
                  </p>
                </div>
                <Button
                  onClick={handleInviteMember}
                  className="w-full bg-gradient-to-r from-primary to-purple-600"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Invitation
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Team Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Members
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {teamMembers.filter((m) => m.status === "active").length}
              </div>
              <p className="text-xs text-muted-foreground">
                {teamMembers.filter((m) => m.status === "pending").length}{" "}
                pending invitations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Agents Created
              </CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {teamMembers.reduce(
                  (sum, member) => sum + member.agentsCreated,
                  0,
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                by all team members
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Conversations
              </CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {teamMembers
                  .reduce((sum, member) => sum + member.conversationsHandled, 0)
                  .toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                handled this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Roles
              </CardTitle>
              <Crown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                different permission levels
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Members */}
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>
              Manage your team members and their permissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-white">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{member.name}</h4>
                        {getRoleIcon(member.role)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {member.email}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Joined {member.joinedDate}</span>
                        <span>•</span>
                        <span>{member.agentsCreated} agents</span>
                        <span>•</span>
                        <span>
                          {member.conversationsHandled.toLocaleString()}{" "}
                          conversations
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        {getStatusBadge(member.status)}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {member.lastActive}
                      </p>
                    </div>

                    <Select
                      defaultValue={member.role}
                      onValueChange={(value) =>
                        handleRoleChange(member.id, value)
                      }
                      disabled={member.role === "owner"}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="member">Member</SelectItem>
                        <SelectItem value="viewer">Viewer</SelectItem>
                      </SelectContent>
                    </Select>

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
                          Edit Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          Send Message
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleRemoveMember(member.id)}
                          disabled={member.role === "owner"}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Remove Member
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Invitations */}
        {pendingInvitations.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Pending Invitations</CardTitle>
              <CardDescription>
                Manage outstanding team invitations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingInvitations.map((invitation) => (
                  <div
                    key={invitation.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100">
                        <Mail className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{invitation.email}</h4>
                        <p className="text-sm text-muted-foreground">
                          Invited as {invitation.role} by {invitation.sentBy}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Sent on {invitation.sentDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleResendInvitation(invitation.email)}
                      >
                        Resend
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Role Permissions */}
        <Card>
          <CardHeader>
            <CardTitle>Role Permissions</CardTitle>
            <CardDescription>
              Understand what each role can do in your organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(rolePermissions).map(([key, role]) => (
                <div
                  key={key}
                  className={`p-4 rounded-lg border ${role.bgColor}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <role.icon className={`h-5 w-5 ${role.color}`} />
                    <div>
                      <h4 className="font-semibold">{role.label}</h4>
                      <p className="text-sm opacity-80">{role.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {role.permissions.map((permission, index) => (
                      <li
                        key={index}
                        className="text-sm flex items-center gap-2"
                      >
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        {permission}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Team;
