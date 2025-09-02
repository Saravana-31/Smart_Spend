import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, TrendingDown, RefreshCw, ExternalLink, Clock, CheckCircle } from "lucide-react"

export default function FeeDetectorPage() {
  const detectedFees = [
    {
      id: 1,
      type: "Duplicate Charge",
      vendor: "Swiggy",
      amount: 450,
      date: "2024-01-15",
      status: "pending",
      description: "Same order charged twice within 2 minutes",
      confidence: 95,
    },
    {
      id: 2,
      type: "Hidden Fee",
      vendor: "HDFC Bank",
      amount: 150,
      date: "2024-01-14",
      status: "resolved",
      description: "SMS charges not disclosed upfront",
      confidence: 88,
    },
    {
      id: 3,
      type: "Overcharge",
      vendor: "Uber",
      amount: 85,
      date: "2024-01-13",
      status: "disputed",
      description: "Surge pricing applied incorrectly",
      confidence: 92,
    },
    {
      id: 4,
      type: "Subscription Fee",
      vendor: "Amazon Prime",
      amount: 1499,
      date: "2024-01-12",
      status: "pending",
      description: "Auto-renewal without notification",
      confidence: 100,
    },
  ]

  const monthlyStats = {
    totalFees: 2184,
    recovered: 1350,
    pending: 834,
    disputes: 3,
  }

  const feeTimeline = [
    { month: "Oct", fees: 1200 },
    { month: "Nov", fees: 1800 },
    { month: "Dec", fees: 2400 },
    { month: "Jan", fees: 2184 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Hidden Charges & Fee Detector</h1>
            <p className="text-gray-600">AI-powered detection of duplicate charges and hidden fees</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Scan Transactions
            </Button>
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
              <ExternalLink className="w-4 h-4 mr-2" />
              Dispute Center
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Monthly Summary */}
        <Card className="border-red-200 bg-red-51">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-red-900 mb-2">
                  This Month: ₹{monthlyStats.totalFees.toLocaleString()} in Hidden Charges
                </h3>
                <p className="text-sm text-red-700 mb-4">
                  Our AI detected {detectedFees.length} suspicious charges across your accounts. Take action to recover
                  your money.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">
                      ₹{monthlyStats.recovered.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Recovered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">₹{monthlyStats.pending.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Pending</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{monthlyStats.disputes}</div>
                    <div className="text-sm text-gray-600">Active Disputes</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fee Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingDown className="w-5 h-5 mr-2 text-red-600" />
              Fee History Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {feeTimeline.map((item) => (
                <div key={item.month} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">₹{item.fees.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">{item.month} 2024</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detected Fees */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Detections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {detectedFees.map((fee) => (
                <div key={fee.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{fee.type}</h4>
                        <p className="text-sm text-gray-600">
                          {fee.vendor} • {new Date(fee.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-600">₹{fee.amount.toLocaleString()}</div>
                      <Badge
                        className={
                          fee.status === "resolved"
                            ? "bg-emerald-100 text-emerald-700"
                            : fee.status === "disputed"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-orange-100 text-orange-700"
                        }
                      >
                        {fee.status === "resolved" && <CheckCircle className="w-3 h-3 mr-1" />}
                        {fee.status === "disputed" && <Clock className="w-3 h-3 mr-1" />}
                        {fee.status === "pending" && <AlertTriangle className="w-3 h-3 mr-1" />}
                        {fee.status}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-3">{fee.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Confidence:</span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: `${fee.confidence}%` }}></div>
                      </div>
                      <span className="text-sm font-medium">{fee.confidence}%</span>
                    </div>

                    <div className="flex space-x-2">
                      {fee.status === "pending" && (
                        <>
                          <Button size="sm" className="bg-red-600 hover:bg-red-700">
                            Mark for Refund
                          </Button>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            Ignore
                          </Button>
                        </>
                      )}
                      {fee.status === "disputed" && (
                        <Button size="sm" variant="outline" className="bg-transparent">
                          Track Dispute
                        </Button>
                      )}
                      {fee.status === "resolved" && (
                        <Button size="sm" variant="outline" className="bg-transparent">
                          View Details
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Bulk Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-red-600 hover:bg-red-700">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Mark All Pending for Refund
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <ExternalLink className="w-4 h-4 mr-2" />
                Export Dispute Report
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <RefreshCw className="w-4 h-4 mr-2" />
                Re-scan Last 30 Days
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prevention Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 text-sm">Enable Transaction Alerts</h4>
                <p className="text-xs text-blue-700">Get instant notifications for all charges above ₹500</p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg">
                <h4 className="font-medium text-emerald-900 text-sm">Review Subscriptions Monthly</h4>
                <p className="text-xs text-emerald-700">Check for unwanted auto-renewals and hidden fees</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900 text-sm">Use Virtual Cards</h4>
                <p className="text-xs text-purple-700">Create temporary cards for online purchases</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
