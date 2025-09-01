import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, Plus, Calendar, Gift, Smartphone, Car, Home, Plane } from "lucide-react"

export default function SavingsGoalsPage() {
  const savingsGoals = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      target: 134900,
      current: 89500,
      deadline: "2024-06-15",
      category: "Electronics",
      icon: Smartphone,
      monthlyContribution: 15000,
      suggestion: "Skip one delivery = ₹300 closer to your iPhone",
    },
    {
      id: 2,
      name: "Emergency Fund",
      target: 500000,
      current: 285000,
      deadline: "2024-12-31",
      category: "Emergency",
      icon: Target,
      monthlyContribution: 25000,
      suggestion: "Increase by ₹5,000/month to reach goal faster",
    },
    {
      id: 3,
      name: "Car Down Payment",
      target: 200000,
      current: 125000,
      deadline: "2024-09-30",
      category: "Vehicle",
      icon: Car,
      monthlyContribution: 12000,
      suggestion: "On track! Consider increasing to ₹15,000/month",
    },
    {
      id: 4,
      name: "Goa Vacation",
      target: 75000,
      current: 32000,
      deadline: "2024-04-20",
      category: "Travel",
      icon: Plane,
      monthlyContribution: 8000,
      suggestion: "Need ₹14,333/month to reach goal on time",
    },
  ]

  const totalSavings = savingsGoals.reduce((sum, goal) => sum + goal.current, 0)
  const totalTargets = savingsGoals.reduce((sum, goal) => sum + goal.target, 0)
  const monthlyContributions = savingsGoals.reduce((sum, goal) => sum + goal.monthlyContribution, 0)

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Electronics: "bg-blue-100 text-blue-700",
      Emergency: "bg-red-100 text-red-700",
      Vehicle: "bg-green-100 text-green-701",
      Travel: "bg-purple-100 text-purple-700",
      Home: "bg-orange-100 text-orange-700",
    }
    return colors[category] || "bg-gray-100 text-gray-700"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Savings Goals</h1>
            <p className="text-gray-600">Track your progress towards financial milestones</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Goal Planner
            </Button>
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
              <Plus className="w-4 h-4 mr-2" />
              New Goal
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-emerald-500 to-teal-601 text-white border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Saved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">₹{totalSavings.toLocaleString()}</div>
              <div className="text-sm opacity-90">Across all goals</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Target Amount</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-2">₹{totalTargets.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total goals value</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Monthly Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-2">₹{monthlyContributions.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total contributions</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Overall Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600 mb-2">
                {Math.round((totalSavings / totalTargets) * 100)}%
              </div>
              <div className="text-sm text-gray-600">Goals completion</div>
            </CardContent>
          </Card>
        </div>

        {/* Savings Goals */}
        <div className="grid lg:grid-cols-2 gap-6">
          {savingsGoals.map((goal) => {
            const progress = (goal.current / goal.target) * 100
            const remaining = goal.target - goal.current
            const daysLeft = Math.ceil(
              (new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
            )
            const Icon = goal.icon

            return (
              <Card key={goal.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{goal.name}</h3>
                        <Badge className={getCategoryColor(goal.category)}>{goal.category}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">₹{goal.current.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">of ₹{goal.target.toLocaleString()}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium">{progress.toFixed(1)}%</span>
                    </div>
                    <Progress value={progress} className="h-3" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Remaining</span>
                      <div className="font-medium">₹{remaining.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Days Left</span>
                      <div className="font-medium">{daysLeft} days</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Monthly</span>
                      <div className="font-medium">₹{goal.monthlyContribution.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Deadline</span>
                      <div className="font-medium">{new Date(goal.deadline).toLocaleDateString()}</div>
                    </div>
                  </div>

                  {goal.suggestion && (
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-700">{goal.suggestion}</p>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <Plus className="w-4 h-4 mr-1" />
                      Add Money
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Adjust Goal
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Goal Suggestions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="w-5 h-5 mr-2 text-purple-600" />
              Suggested Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center space-x-3 mb-3">
                  <Home className="w-8 h-8 text-orange-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">Home Down Payment</h4>
                    <p className="text-sm text-gray-600">₹10,00,000 target</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  Based on your income, you could save ₹30,000/month for this goal
                </p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  Create Goal
                </Button>
              </div>

              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="w-8 h-8 text-green-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">Retirement Fund</h4>
                    <p className="text-sm text-gray-600">₹50,00,000 target</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-3">Start early with ₹10,000/month to build long-term wealth</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  Create Goal
                </Button>
              </div>

              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center space-x-3 mb-3">
                  <Plane className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">Europe Trip</h4>
                    <p className="text-sm text-gray-600">₹2,50,000 target</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-3">Plan your dream vacation with ₹12,000/month savings</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  Create Goal
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
