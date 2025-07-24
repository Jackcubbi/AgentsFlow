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
import { Progress } from "@/components/ui/progress";
import {
  Bot,
  TrendingUp,
  Users,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Activity,
  BarChart3,
  Zap,
  Settings,
  PlayCircle,
  PauseCircle,
  ArrowUpRight,
  Calendar,
} from "lucide-react";

const Dashboard = () => {
  const agentStats = [
    {
      name: "Customer Support Agent",
      status: "active",
      conversations: 1247,
      satisfaction: 4.8,
      uptime: 99.9,
      color: "bg-green-500",
    },
    {
      name: "Sales Qualification Agent",
      status: "active",
      conversations: 589,
      satisfaction: 4.9,
      uptime: 100,
      color: "bg-blue-500",
    },
    {
      name: "Lead Generation Agent",
      status: "paused",
      conversations: 324,
      satisfaction: 4.7,
      uptime: 98.5,
      color: "bg-orange-500",
    },
  ];

  const recentActivity = [
    {
      type: "conversation",
      message: "Customer inquiry resolved automatically",
      time: "2 minutes ago",
      icon: MessageSquare,
      color: "text-green-600",
    },
    {
      type: "lead",
      message: "New qualified lead from Sales Agent",
      time: "5 minutes ago",
      icon: Users,
      color: "text-blue-600",
    },
    {
      type: "alert",
      message: "Usage approaching 75% limit",
      time: "15 minutes ago",
      icon: AlertCircle,
      color: "text-orange-600",
    },
    {
      type: "success",
      message: "Monthly performance target achieved",
      time: "1 hour ago",
      icon: CheckCircle,
      color: "text-green-600",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Monitor your AI agents and business performance
            </p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-purple-600">
            <Plus className="mr-2 h-4 w-4" />
            Create New Agent
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Agents
              </CardTitle>
              <Bot className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+1</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Conversations Today
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,160</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12%</span> from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg Response Time
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.8s</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">-0.2s</span> faster
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Customer Satisfaction
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+0.1</span> improvement
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* AI Agents Overview */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  AI Agents
                </CardTitle>
                <CardDescription>
                  Monitor and manage your intelligent agents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {agentStats.map((agent, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${agent.color}`} />
                      <div>
                        <h4 className="font-medium">{agent.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{agent.conversations} conversations</span>
                          <span>⭐ {agent.satisfaction}</span>
                          <span>{agent.uptime}% uptime</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          agent.status === "active" ? "default" : "secondary"
                        }
                        className={
                          agent.status === "active"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }
                      >
                        {agent.status}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        {agent.status === "active" ? (
                          <PauseCircle className="h-4 w-4" />
                        ) : (
                          <PlayCircle className="h-4 w-4" />
                        )}
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Agent
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>Latest updates from your agents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <activity.icon className={`h-4 w-4 mt-1 ${activity.color}`} />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-sm">
                View All Activity
                <ArrowUpRight className="ml-2 h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Usage Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Usage This Month
              </CardTitle>
              <CardDescription>
                Your current usage vs plan limits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Conversations</span>
                  <span>18,547 / 25,000</span>
                </div>
                <Progress value={74} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>API Calls</span>
                  <span>845,023 / 1,000,000</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Storage</span>
                  <span>12.4 GB / 50 GB</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
              <Button variant="outline" className="w-full">
                View Detailed Analytics
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Performance Insights
              </CardTitle>
              <CardDescription>Key metrics and recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">
                    Excellent Response Time
                  </span>
                </div>
                <Badge className="bg-green-100 text-green-800">
                  99th percentile
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">
                    High Satisfaction Rate
                  </span>
                </div>
                <Badge className="bg-blue-100 text-blue-800">4.8/5.0</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                  <span className="text-sm font-medium">Usage Alert</span>
                </div>
                <Badge className="bg-orange-100 text-orange-800">
                  74% used
                </Badge>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-purple-600">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Optimization Review
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
