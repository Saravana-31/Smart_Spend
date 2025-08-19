import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, AlertTriangle, TrendingUp, Pause, X, Bell, BarChart3 } from "lucide-react"

export default function SubscriptionsPage() {
  const subscriptions = [
    {
      id: 1,
      name: "Netflix",
      cost: 649,
      renewalDate: "2024-02-15",
      category: "Entertainment",
      usage: "High",
      lastUsed: "2024-01-14",
      status: "active",
      suggestion: null,
    },
    {
      id: 2,
      name: "Disney+ Hotstar",
      cost: 1499,
      renewalDate: "2024-01-25",
      category: "Entertainment",
      usage: "Low",
      lastUsed: "2023-11-20",
      status: "active",
      suggestion: "You haven't used Disney+ in 2 months. Cancel?",
    },
    {
      id: 3,
      name: "Spotify Premium",
      cost: 119,
      renewalDate: "2024-02-08",
      category: "Music",
      usage: "High",
      lastUsed: "2024-01-15",
      status: "active",
      suggestion: null,
    },
    {
      id: 4,
      name: "Adobe Creative Cloud",
      cost: 1675,
      renewalDate: "2024-03-10",
      category: "Productivity",
      usage: "Medium",
      lastUsed: "2024-01-10",
      status: "active",
      suggestion: null,
    },
    {
      id: 5,
      name: "Zomato Pro",
      cost: 299,
      renewalDate: "2024-01-20",
      category: "Food",
      usage: "Low",
      lastUsed: "2023-12-15",
      status: "expiring",
      suggestion: "Low usage detected. Consider not renewing.",
    },
  ]

  const totalMonthlyCost = subscriptions.reduce((sum, sub) => sum + sub.cost, 0)
  const potentialSavings = subscriptions.filter((sub) => sub.usage === "Low").reduce((sum, sub) => sum + sub.cost, 0)

  const getUsageColor = (usage: string) => {
    switch (usage) {
      case "High":
        return "bg-emerald-100 text-emerald-700"
      case "Medium":
        return "bg-yellow-100 text-yellow-700"
      case "Low":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-100 text-emerald-700"
      case "expiring":
        return "bg-orange-100 text-orange-700"
      case "cancelled":
        return "bg-gray-100 text-gray-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Subscription Tracker</h1>
            <p className="text-gray-600">Manage your recurring subscriptions and optimize spending</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Bell className="w-4 h-4 mr-2" />
              Renewal Alerts
            </Button>
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
              <BarChart3 className="w-4 h-4 mr-2" />
              Usage Report
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Monthly Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">₹{totalMonthlyCost.toLocaleString()}</div>
              <div className="text-sm opacity-90">{subscriptions.length} active subscriptions</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Potential Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600 mb-2">₹{potentialSavings.toLocaleString()}</div>
              <div className="text-sm text-gray-600">From low-usage subscriptions</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Expiring Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600 mb-2">2</div>
              <div className="text-sm text-gray-600">Within next 7 days</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Annual Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-2">₹{(totalMonthlyCost * 12).toLocaleString()}</div>
              <div className="text-sm text-gray-600">Projected yearly spend</div>
            </CardContent>
          </Card>
        </div>

        {/* AI Recommendations */}
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-medium text-orange-900">AI Optimization Suggestions</h3>
                <div className="space-y-2 mt-2">
                  <p className="text-sm text-orange-700">
                    • Cancel Disney+ Hotstar to save ₹1,499/year - unused for 2 months
                  </p>
                  <p className="text-sm text-orange-700">• Consider annual Netflix plan to save ₹1,300/year</p>
                  <p className="text-sm text-orange-700">• Bundle Spotify with mobile plan for ₹50/month savings</p>
                </div>
                <Button size="sm" className="mt-3 bg-orange-600 hover:bg-orange-700">
                  Apply Suggestions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subscriptions List */}
        <Card>
          <CardHeader>
            <CardTitle>Active Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subscriptions.map((subscription) => (
                <div key={subscription.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-600">{subscription.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{subscription.name}</h4>
                        <p className="text-sm text-gray-600">{subscription.category}</p>
                        <p className="text-xs text-gray-500">
                          Last used: {new Date(subscription.lastUsed).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">₹{subscription.cost}</div>
                      <div className="text-sm text-gray-600">per month</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Badge className={getUsageColor(subscription.usage)}>{subscription.usage} Usage</Badge>
                      <Badge className={getStatusColor(subscription.status)}>{subscription.status}</Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      Renews: {new Date(subscription.renewalDate).toLocaleDateString()}
                    </div>
                  </div>

                  {subscription.suggestion && (
                    <div className="p-3 bg-red-50 rounded-lg mb-3">
                      <p className="text-sm text-red-700">{subscription.suggestion}</p>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    {subscription.usage === "Low" ? (
                      <Button size="sm" variant="destructive">
                        <X className="w-4 h-4 mr-1" />
                        Cancel Now
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Pause className="w-4 h-4 mr-1" />
                        Pause
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <Bell className="w-4 h-4 mr-1" />
                      Snooze Reminder
                    </Button>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Usage Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
