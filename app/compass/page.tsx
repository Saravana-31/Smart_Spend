import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Star, Gift, Zap } from "lucide-react"

export default function SpendingCompassPage() {
  const streaks = [
    { name: "No-Swipe Days", current: 3, best: 7, target: 5, icon: "💳" },
    { name: "Home Cooking", current: 5, best: 12, target: 7, icon: "🍳" },
    { name: "Budget Adherence", current: 2, best: 4, target: 3, icon: "🎯" },
  ]

  const microGoals = [
    { title: "Skip one coffee shop visit", reward: "₹300 saved", progress: 60, completed: false },
    { title: "Use public transport today", reward: "₹200 saved", progress: 100, completed: true },
    { title: "Cook dinner at home", reward: "₹500 saved", progress: 30, completed: false },
  ]

  const habits = [
    {
      cue: "Feeling stressed",
      routine: "Online shopping",
      reward: "Temporary relief",
      suggestion: "Try meditation app instead",
    },
    { cue: "Weekend evening", routine: "Order food", reward: "Convenience", suggestion: "Prep meals on Sunday" },
    { cue: "Payday", routine: "Splurge shopping", reward: "Celebration", suggestion: "Set aside fun money first" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Spending Compass</h1>
            <p className="text-gray-600">Gamified behavioral nudging to build better financial habits</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-yellow-100 text-yellow-700">
              <Trophy className="w-4 h-4 mr-1" />
              Level 7 Saver
            </Badge>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Current Streaks */}
        <div className="grid md:grid-cols-3 gap-6">
          {streaks.map((streak) => (
            <Card key={streak.name} className="border-l-4 border-l-emerald-500">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <span className="text-2xl mr-2">{streak.icon}</span>
                  {streak.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-emerald-600">{streak.current}</span>
                    <div className="text-right text-sm text-gray-600">
                      <div>Target: {streak.target}</div>
                      <div>Best: {streak.best}</div>
                    </div>
                  </div>
                  <Progress value={(streak.current / streak.target) * 100} className="h-2" />
                  {streak.current >= streak.target && (
                    <Badge className="bg-emerald-100 text-emerald-700">
                      <Star className="w-3 h-3 mr-1" />
                      Goal Achieved!
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Micro Goals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Today's Micro Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {microGoals.map((goal, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${goal.completed ? "bg-emerald-50 border-emerald-200" : "bg-gray-50"}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{goal.title}</h4>
                    {goal.completed && <Badge className="bg-emerald-100 text-emerald-700">Complete</Badge>}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">{goal.reward}</span>
                    <span className="text-sm font-medium">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Reward Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gift className="w-5 h-5 mr-2 text-purple-600" />
                Guilt-Free Rewards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900">Movie Night</h4>
                <p className="text-sm text-purple-700">You've saved ₹2,500 this week - treat yourself to a movie!</p>
                <Button size="sm" className="mt-2 bg-purple-600 hover:bg-purple-700">
                  Claim Reward
                </Button>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900">Weekend Outing</h4>
                <p className="text-sm text-blue-700">Complete 2 more goals to unlock a ₹1,000 fun budget</p>
                <div className="mt-2">
                  <Progress value={60} className="h-2" />
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-lg">
                <h4 className="font-medium text-emerald-900">Favorite Restaurant</h4>
                <p className="text-sm text-emerald-700">Reach your monthly savings goal for a special dinner out</p>
                <div className="mt-2">
                  <Progress value={75} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Habit Loop Tracker */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="w-5 h-5 mr-2 text-orange-600" />
              Habit Loop Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {habits.map((habit, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Cue</h4>
                      <p className="text-sm text-gray-600">{habit.cue}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Routine</h4>
                      <p className="text-sm text-gray-600">{habit.routine}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Reward</h4>
                      <p className="text-sm text-gray-600">{habit.reward}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-emerald-900 mb-1">AI Suggestion</h4>
                      <p className="text-sm text-emerald-700">{habit.suggestion}</p>
                    </div>
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
