"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, PieChart, Brain, Mic, Target, Calendar } from "lucide-react"
import { SpendingChart } from "@/components/spending-chart"
import { CashFlowChart } from "@/components/cash-flow-chart"
import { AIInsightCard } from "@/components/ai-insight-card"
import { MoodCard } from "@/components/mood-card"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <p>Please log in</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back, Alex! Here's your financial overview.</p>
          </div>
          <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
            <Mic className="w-4 h-4 mr-2" />
            Voice Assistant
          </Button>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Balance & Net Worth Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">₹10,47,230</div>
              <div className="flex items-center text-sm opacity-90">
                <TrendingUp className="w-4 h-4 mr-1" />
                +2.5% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Monthly Spending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">₹1,89,450</div>
              <div className="flex items-center text-sm text-red-600">
                <TrendingDown className="w-4 h-4 mr-1" />
                12% over budget
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Net Worth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">₹37,85,420</div>
              <div className="flex items-center text-sm text-emerald-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +8.2% this year
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Spending by Category */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="w-5 h-5 mr-2 text-emerald-600" />
                  Spending by Category
                </CardTitle>
                <CardDescription>Your spending breakdown for this month</CardDescription>
              </CardHeader>
              <CardContent>
                <SpendingChart />
              </CardContent>
            </Card>

            {/* Cash Flow Forecast */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  15-Day Cash Flow Forecast
                </CardTitle>
                <CardDescription>Predicted cash position for the next two weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <CashFlowChart />
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* AI Insights */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-purple-600" />
                AI Insights
              </h3>

              <AIInsightCard
                type="warning"
                title="Overspending Alert"
                message="You're overspending 12% more on dining this month compared to your average."
                action="View Details"
              />

              <AIInsightCard
                type="success"
                title="Budget Goal Achieved! 🎉"
                message="You hit your grocery budget goal this week. Great job staying on track!"
                action="See Progress"
              />

              <AIInsightCard
                type="info"
                title="Savings Opportunity"
                message="You could save $180/month by canceling unused subscriptions."
                action="Review Subscriptions"
              />
            </div>

            {/* Top 3 Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-orange-600" />
                  Weekly Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Reduce coffee shop visits</p>
                    <p className="text-xs text-gray-600">Save ~₹3,500/week</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Switch to annual subscriptions</p>
                    <p className="text-xs text-gray-600">Save ~₹10,000/year</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Increase emergency fund</p>
                    <p className="text-xs text-gray-600">Add ₹15,000/month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mood & Emotion Card */}
            <MoodCard />
          </div>
        </div>
      </div>
    </div>
  )
}
