import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Upload, Download, FileText, Camera, Filter, Tag, Calendar } from "lucide-react"

export default function ReceiptVaultPage() {
  const receipts = [
    {
      id: 1,
      vendor: "Reliance Digital",
      amount: 45000,
      date: "2024-01-15",
      category: "Electronics",
      tags: ["Business", "Tax Deductible"],
      status: "processed",
    },
    {
      id: 2,
      vendor: "Apollo Pharmacy",
      amount: 2500,
      date: "2024-01-14",
      category: "Medical",
      tags: ["Medical", "Tax Deductible"],
      status: "processed",
    },
    {
      id: 3,
      vendor: "Byju's",
      amount: 15000,
      date: "2024-01-13",
      category: "Education",
      tags: ["Education", "Tax Deductible"],
      status: "processing",
    },
    {
      id: 4,
      vendor: "Big Bazaar",
      amount: 3200,
      date: "2024-01-12",
      category: "Groceries",
      tags: ["Personal"],
      status: "processed",
    },
  ]

  const taxSummary = {
    totalDeductions: 125000,
    medical: 25000,
    education: 35000,
    business: 65000,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Receipt Vault</h1>
            <p className="text-gray-600">Store, categorize and manage receipts for tax planning</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Camera className="w-4 h-4 mr-2" />
              Scan Receipt
            </Button>
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
              <Download className="w-4 h-4 mr-2" />
              Tax Report
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Tax Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Deductions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">₹{taxSummary.totalDeductions.toLocaleString()}</div>
              <div className="text-sm opacity-90">This financial year</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Medical Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-2">₹{taxSummary.medical.toLocaleString()}</div>
              <div className="text-sm text-gray-600">80D Eligible</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-2">₹{taxSummary.education.toLocaleString()}</div>
              <div className="text-sm text-gray-600">80E Eligible</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Business</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-2">₹{taxSummary.business.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Business Deductions</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search receipts by vendor, amount, or category..." className="pl-10" />
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Tag className="w-4 h-4 mr-2" />
                  Tags
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Date Range
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Receipts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {receipts.map((receipt) => (
            <Card key={receipt.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">{receipt.vendor}</h3>
                      <p className="text-sm text-gray-600">{new Date(receipt.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <Badge
                    className={
                      receipt.status === "processed"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-orange-100 text-orange-700"
                    }
                  >
                    {receipt.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Amount</span>
                    <span className="font-medium text-gray-900">₹{receipt.amount.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Category</span>
                    <Badge variant="secondary">{receipt.category}</Badge>
                  </div>

                  <div className="space-y-2">
                    <span className="text-sm text-gray-600">Tags</span>
                    <div className="flex flex-wrap gap-1">
                      {receipt.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className={tag.includes("Tax") ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      Edit Tags
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Year-end Tax Report */}
        <Card className="border-emerald-200 bg-emerald-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-emerald-910 mb-2">Year-End Tax Report Ready</h3>
                <p className="text-sm text-emerald-700 mb-4">
                  Your tax-deductible expenses are organized and ready for filing. Download your comprehensive report
                  with all supporting documents.
                </p>
                <div className="flex space-x-3">
                  <Button className="bg-emerald-600 hover:bg-emerald-701">Download PDF Report</Button>
                  <Button
                    variant="outline"
                    className="border-emerald-300 text-emerald-701 hover:bg-emerald-100 bg-transparent"
                  >
                    Email to CA
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
