import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, AlertTriangle, CheckCircle, Plus, Settings, Lightbulb } from "lucide-react"
import { BudgetChallengeCard } from "@/components/budget-challenge-card"

export default function BudgetPage() {
  const budgetCategories = [
    { name: "Groceries", budget: 15000, spent: 12500, color: "emerald", status: "good" },
    { name: "Dining Out", budget: 8000, spent: 9500, color: "red", status: "over" },
    { name: "Transportation", budget: 5000, spent: 3800, color: "blue", status: "good" },
    { name: "Entertainment", budget: 4000, spent: 2500, color: "purple", status: "good" },
    { name: "Shopping", budget: 10000, spent: 13000, color: "orange", status: "over" },
    { name: "Bills & Utilities", budget: 20000, spent: 19500, color: "gray", status: "good" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Budget Planner</h1>
            <p className="text-gray-600">Set budgets and track your spending goals</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Budget Settings
            </Button>
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Category
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Budget Overview */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">₹62,000</div>
              <div className="text-sm opacity-90">This month</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">₹61,300</div>
              <div className="flex items-center text-sm text-orange-600">
                <AlertTriangle className="w-4 h-4 mr-1" />
                98% of budget used
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Remaining</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">₹700</div>
              <div className="flex items-center text-sm text-gray-600">
                <Target className="w-4 h-4 mr-1" />
                2% remaining
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Recommendations */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-medium text-blue-900">AI Budget Recommendations</h3>
                <div className="space-y-2 mt-2">
                  <p className="text-sm text-blue-700">
                    • Raise your bills budget by ₹1,500 due to seasonal utility hikes
                  </p>
                  <p className="text-sm text-blue-700">• Cut dining out by 30% to improve your savings goal</p>
                  <p className="text-sm text-blue-700">• Consider setting a separate budget for holiday shopping</p>
                </div>
                <Button size="sm" className="mt-3 bg-blue-600 hover:bg-blue-700">
                  Apply Suggestions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Budget Categories */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-emerald-600" />
                  Budget Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {budgetCategories.map((category) => {
                  const percentage = (category.spent / category.budget) * 100
                  const isOverBudget = category.spent > category.budget

                  return (
                    <div key={category.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">{category.name}</span>
                          {isOverBudget && (
                            <Badge variant="destructive" className="text-xs">
                              Over Budget
                            </Badge>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900">
                            ₹{category.spent} / ₹{category.budget}
                          </div>
                          <div className="text-sm text-gray-500">{percentage.toFixed(0)}% used</div>
                        </div>
                      </div>
                      <Progress
                        value={Math.min(percentage, 100)}
                        className={`h-2 ${isOverBudget ? "bg-red-100" : "bg-gray-100"}`}
                      />
                      {isOverBudget && (
                        <p className="text-sm text-red-600">₹{category.spent - category.budget} over budget</p>
                      )}
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Budget Challenges & Nudges */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Budget Challenges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <BudgetChallengeCard
                  title="No-Spend Weekend"
                  description="Skip non-essential purchases this weekend"
                  progress={60}
                  reward="$25 saved"
                  daysLeft={2}
                />

                <BudgetChallengeCard
                  title="Coffee Shop Detox"
                  description="Make coffee at home for 7 days"
                  progress={85}
                  reward="$35 saved"
                  daysLeft={1}
                />

                <BudgetChallengeCard
                  title="Meal Prep Master"
                  description="Cook 5 meals at home this week"
                  progress={40}
                  reward="$50 saved"
                  daysLeft={4}
                />
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Budget
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Spending Trends
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Set Savings Goal
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
