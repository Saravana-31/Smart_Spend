"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Zap, TrendingDown, TrendingUp, AlertTriangle, CheckCircle, Calculator } from "lucide-react"
import { useState } from "react"

export default function LifeSimulatorPage() {
  const [selectedScenario, setSelectedScenario] = useState("")
  const [simulationResult, setSimulationResult] = useState<any>(null)

  const scenarios = [
    { id: "job-loss", name: "Job Loss", icon: "💼", impact: "High Risk" },
    { id: "travel", name: "International Travel", icon: "✈️", impact: "Medium Cost" },
    { id: "emergency", name: "Medical Emergency", icon: "🏥", impact: "High Cost" },
    { id: "pay-raise", name: "Pay Raise", icon: "💰", impact: "Positive" },
    { id: "marriage", name: "Marriage", icon: "💒", impact: "High Cost" },
    { id: "home-purchase", name: "Home Purchase", icon: "🏠", impact: "Very High Cost" },
  ]

  const runSimulation = () => {
    // Mock simulation results
    const mockResults = {
      "job-loss": {
        projectedBalance: 245000,
        monthsToNegative: 8,
        recommendations: [
          "Build emergency fund to 6 months expenses",
          "Reduce discretionary spending by 40%",
          "Consider freelance income sources",
        ],
        budgetAdjustments: {
          groceries: -20,
          dining: -60,
          entertainment: -80,
          shopping: -70,
        },
      },
      travel: {
        projectedBalance: 890000,
        monthsToNegative: null,
        recommendations: [
          "Set aside ₹1,50,000 for Europe trip",
          "Book flights 3 months in advance for savings",
          "Consider travel insurance for ₹5,000",
        ],
        budgetAdjustments: {
          travel: 150000,
          dining: -10,
          shopping: -20,
        },
      },
      emergency: {
        projectedBalance: 650000,
        monthsToNegative: null,
        recommendations: [
          "Medical emergency fund of ₹2,00,000 recommended",
          "Consider health insurance upgrade",
          "Keep liquid funds accessible",
        ],
        budgetAdjustments: {
          medical: 200000,
          emergency: 50000,
        },
      },
    }

    setSimulationResult(mockResults[selectedScenario as keyof typeof mockResults])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Life Event Simulator</h1>
            <p className="text-gray-600">Simulate major life events and see their financial impact</p>
          </div>
          <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
            <Calculator className="w-4 h-4 mr-2" />
            Advanced Calculator
          </Button>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Current Financial Snapshot */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Current Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">₹10,47,230</div>
              <div className="text-sm opacity-90">Available funds</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Monthly Income</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-2">₹85,000</div>
              <div className="text-sm text-gray-600">After taxes</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Monthly Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-2">₹61,300</div>
              <div className="text-sm text-gray-600">Average spending</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Emergency Fund</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600 mb-2">₹2,85,000</div>
              <div className="text-sm text-gray-600">4.6 months coverage</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Scenario Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-purple-600" />
                Choose Life Event
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {scenarios.map((scenario) => (
                  <div
                    key={scenario.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedScenario === scenario.id
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedScenario(scenario.id)}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">{scenario.icon}</div>
                      <h4 className="font-medium text-gray-900 text-sm">{scenario.name}</h4>
                      <Badge
                        className={`mt-1 text-xs ${
                          scenario.impact.includes("Positive")
                            ? "bg-emerald-100 text-emerald-700"
                            : scenario.impact.includes("High")
                              ? "bg-red-100 text-red-700"
                              : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {scenario.impact}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              {selectedScenario && (
                <div className="space-y-4 pt-4 border-t">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (months)</Label>
                    <Input id="duration" placeholder="Enter duration" defaultValue="6" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Estimated Cost (₹)</Label>
                    <Input id="amount" placeholder="Enter amount" defaultValue="200000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timing">When will this happen?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timing" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediately</SelectItem>
                        <SelectItem value="3months">In 3 months</SelectItem>
                        <SelectItem value="6months">In 6 months</SelectItem>
                        <SelectItem value="1year">In 1 year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={runSimulation} className="w-full bg-purple-600 hover:bg-purple-700">
                    <Zap className="w-4 h-4 mr-2" />
                    Run Simulation
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Simulation Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-blue-600" />
                Simulation Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {simulationResult ? (
                <div className="space-y-4">
                  {/* Impact Summary */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Projected Balance</span>
                      <span className="text-lg font-bold text-gray-900">
                        ₹{simulationResult.projectedBalance.toLocaleString()}
                      </span>
                    </div>
                    {simulationResult.monthsToNegative && (
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span className="text-sm text-red-600">
                          You'll hit negative cash in {simulationResult.monthsToNegative} months if current pace
                          continues
                        </span>
                      </div>
                    )}
                    {!simulationResult.monthsToNegative && (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-600">
                          Your finances can handle this event comfortably
                        </span>
                      </div>
                    )}
                  </div>

                  {/* AI Recommendations */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">AI Recommendations</h4>
                    <div className="space-y-2">
                      {simulationResult.recommendations.map((rec: string, index: number) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <p className="text-sm text-gray-700">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget Adjustments */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Suggested Budget Changes</h4>
                    <div className="space-y-2">
                      {Object.entries(simulationResult.budgetAdjustments).map(([category, change]: [string, any]) => (
                        <div key={category} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm capitalize text-gray-700">{category}</span>
                          <div className="flex items-center space-x-1">
                            {change > 0 ? (
                              <TrendingUp className="w-4 h-4 text-red-600" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-emerald-600" />
                            )}
                            <span className={`text-sm font-medium ${change > 0 ? "text-red-600" : "text-emerald-600"}`}>
                              {change > 0 ? "+" : ""}
                              {change}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Apply Budget Changes</Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Simulate</h3>
                  <p className="text-gray-600">
                    Select a life event and configure the parameters to see how it would impact your finances.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Scenarios */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Scenario Checks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Job Loss Impact</h4>
                <p className="text-sm text-gray-600 mb-3">
                  With current expenses, you can survive 8.5 months without income
                </p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  View Details
                </Button>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Emergency Readiness</h4>
                <p className="text-sm text-gray-600 mb-3">You need ₹1,15,000 more for a 6-month emergency fund</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  Create Plan
                </Button>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Retirement Planning</h4>
                <p className="text-sm text-gray-600 mb-3">At current savings rate, you'll have ₹2.1 crores by age 60</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  Optimize Plan
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
