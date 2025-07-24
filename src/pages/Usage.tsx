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
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  TrendingUp,
  Clock,
  MessageSquare,
  Users,
  Calendar,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Bot,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Activity,
} from "lucide-react";

const Usage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  const usageMetrics = {
    conversations: {
      current: 18547,
      limit: 25000,
      percentage: 74,
      change: +12.5,
      trend: "up",
    },
    apiCalls: {
      current: 845023,
      limit: 1000000,
      percentage: 85,
      change: +8.3,
      trend: "up",
    },
    storage: {
      current: 12.4,
      limit: 50,
      percentage: 25,
      change: +2.1,
      trend: "up",
    },
    responseTime: {
      current: 0.8,
      target: 1.0,
      percentage: 80,
      change: -0.2,
      trend: "down",
    },
  };

  const agentPerformance = [
    {
      name: "Customer Support Agent",
      conversations: 8547,
      satisfaction: 4.8,
      responseTime: 0.6,
      uptime: 99.9,
      efficiency: 92,
      status: "excellent",
    },
    {
      name: "Sales Qualification Agent",
      conversations: 6234,
      satisfaction: 4.9,
      responseTime: 0.7,
      uptime: 100,
      efficiency: 95,
      status: "excellent",
    },
    {
      name: "Lead Generation Agent",
      conversations: 3766,
      satisfaction: 4.7,
      responseTime: 1.2,
      uptime: 98.5,
      efficiency: 87,
      status: "good",
    },
  ];

  const dailyStats = [
    { date: "Feb 1", conversations: 620, apiCalls: 28500, satisfaction: 4.8 },
    { date: "Feb 2", conversations: 850, apiCalls: 31200, satisfaction: 4.7 },
    { date: "Feb 3", conversations: 720, apiCalls: 29800, satisfaction: 4.9 },
    { date: "Feb 4", conversations: 920, apiCalls: 34100, satisfaction: 4.8 },
    { date: "Feb 5", conversations: 780, apiCalls: 30600, satisfaction: 4.9 },
    { date: "Feb 6", conversations: 1050, apiCalls: 38200, satisfaction: 4.8 },
    { date: "Feb 7", conversations: 890, apiCalls: 32800, satisfaction: 4.7 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-600 bg-green-50 border-green-200";
      case "good":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "warning":
        return "text-orange-600 bg-orange-50 border-orange-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Usage & Analytics</h1>
            <p className="text-muted-foreground mt-1">
              Monitor your AI agents performance and resource usage
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Usage Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Conversations
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-bold">
                    {usageMetrics.conversations.current.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    / {usageMetrics.conversations.limit.toLocaleString()}
                  </div>
                </div>
                <Progress value={usageMetrics.conversations.percentage} />
                <div className="flex items-center gap-1 text-xs">
                  {usageMetrics.conversations.trend === "up" ? (
                    <ArrowUpRight className="h-3 w-3 text-green-600" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-600" />
                  )}
                  <span
                    className={
                      usageMetrics.conversations.trend === "up"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {Math.abs(usageMetrics.conversations.change)}%
                  </span>
                  <span className="text-muted-foreground">from last month</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">API Calls</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-bold">
                    {(usageMetrics.apiCalls.current / 1000).toFixed(0)}K
                  </div>
                  <div className="text-sm text-muted-foreground">
                    / {(usageMetrics.apiCalls.limit / 1000).toFixed(0)}K
                  </div>
                </div>
                <Progress value={usageMetrics.apiCalls.percentage} />
                <div className="flex items-center gap-1 text-xs">
                  <ArrowUpRight className="h-3 w-3 text-green-600" />
                  <span className="text-green-600">
                    {usageMetrics.apiCalls.change}%
                  </span>
                  <span className="text-muted-foreground">from last month</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Storage</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-bold">
                    {usageMetrics.storage.current} GB
                  </div>
                  <div className="text-sm text-muted-foreground">
                    / {usageMetrics.storage.limit} GB
                  </div>
                </div>
                <Progress value={usageMetrics.storage.percentage} />
                <div className="flex items-center gap-1 text-xs">
                  <ArrowUpRight className="h-3 w-3 text-green-600" />
                  <span className="text-green-600">
                    {usageMetrics.storage.change}%
                  </span>
                  <span className="text-muted-foreground">from last month</span>
                </div>
              </div>
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
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-bold">
                    {usageMetrics.responseTime.current}s
                  </div>
                  <div className="text-sm text-muted-foreground">
                    target: {usageMetrics.responseTime.target}s
                  </div>
                </div>
                <Progress value={100 - usageMetrics.responseTime.percentage} />
                <div className="flex items-center gap-1 text-xs">
                  <ArrowDownRight className="h-3 w-3 text-green-600" />
                  <span className="text-green-600">
                    {Math.abs(usageMetrics.responseTime.change)}s
                  </span>
                  <span className="text-muted-foreground">improvement</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Agent Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Agent Performance
            </CardTitle>
            <CardDescription>
              Detailed performance metrics for each AI agent
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {agentPerformance.map((agent, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${getStatusColor(agent.status)}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold">{agent.name}</h4>
                      <p className="text-sm opacity-80">
                        {agent.conversations.toLocaleString()} conversations
                        this month
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {agent.status === "excellent" && (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      )}
                      {agent.status === "warning" && (
                        <AlertTriangle className="h-5 w-5 text-orange-600" />
                      )}
                      <span className="text-sm font-medium capitalize">
                        {agent.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold">{agent.satisfaction}</p>
                      <p className="text-xs opacity-70">Satisfaction</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">
                        {agent.responseTime}s
                      </p>
                      <p className="text-xs opacity-70">Response Time</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{agent.uptime}%</p>
                      <p className="text-xs opacity-70">Uptime</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{agent.efficiency}%</p>
                      <p className="text-xs opacity-70">Efficiency</p>
                    </div>
                    <div className="text-center">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Usage Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Usage Trends
              </CardTitle>
              <CardDescription>Daily usage patterns over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-64 flex items-end justify-between gap-2">
                  {dailyStats.map((stat, index) => (
                    <div key={index} className="flex-1 space-y-2">
                      <div className="relative h-40">
                        <div
                          className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-purple-600 rounded-t"
                          style={{
                            height: `${(stat.conversations / 1200) * 100}%`,
                          }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-medium">{stat.date}</p>
                        <p className="text-xs text-muted-foreground">
                          {stat.conversations}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-purple-600 rounded" />
                    <span>Conversations</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Performance Insights
              </CardTitle>
              <CardDescription>AI-powered recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-green-800">
                        Excellent Response Time
                      </h4>
                      <p className="text-xs text-green-700">
                        Your agents are responding 20% faster than average
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-blue-800">
                        Usage Trend Analysis
                      </h4>
                      <p className="text-xs text-blue-700">
                        Conversation volume increased 12% this month
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-orange-800">
                        Approaching Limit
                      </h4>
                      <p className="text-xs text-orange-700">
                        You've used 74% of your monthly conversation limit
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-purple-800">
                        Optimization Opportunity
                      </h4>
                      <p className="text-xs text-purple-700">
                        Consider upgrading to handle peak traffic better
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-purple-600">
                Get AI Recommendations
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Detailed Analytics
            </CardTitle>
            <CardDescription>
              Comprehensive usage breakdown and patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-medium">Peak Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>9:00 AM - 11:00 AM</span>
                      <span className="font-medium">1,247 conversations</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>2:00 PM - 4:00 PM</span>
                      <span className="font-medium">1,089 conversations</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>7:00 PM - 9:00 PM</span>
                      <span className="font-medium">892 conversations</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Top Categories</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Support Requests</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Sales Inquiries</span>
                      <span className="font-medium">32%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>General Questions</span>
                      <span className="font-medium">23%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Resolution Rates</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Fully Automated</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Escalated to Human</span>
                      <span className="font-medium">18%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Follow-up Required</span>
                      <span className="font-medium">4%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Usage;
