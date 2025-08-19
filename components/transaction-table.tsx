import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, CheckCircle, Clock, AlertCircle } from "lucide-react"

const transactions = [
  {
    id: 1,
    date: "2024-01-15",
    vendor: "Starbucks Coffee",
    amount: -385,
    category: "Dining Out",
    confidence: 98,
    status: "confirmed",
    mood: "😊",
  },
  {
    id: 2,
    date: "2024-01-15",
    vendor: "Uber Ride",
    amount: -280,
    category: "Transportation",
    confidence: 95,
    status: "confirmed",
    mood: "😐",
  },
  {
    id: 3,
    date: "2024-01-14",
    vendor: "Amazon Purchase",
    amount: -7500,
    category: "Shopping",
    confidence: 92,
    status: "pending",
    mood: "😊",
  },
  {
    id: 4,
    date: "2024-01-14",
    vendor: "Whole Foods",
    amount: -4200,
    category: "Groceries",
    confidence: 99,
    status: "confirmed",
    mood: "😐",
  },
  {
    id: 5,
    date: "2024-01-13",
    vendor: "Netflix Subscription",
    amount: -650,
    category: "Entertainment",
    confidence: 100,
    status: "confirmed",
    mood: "😊",
  },
  {
    id: 6,
    date: "2024-01-13",
    vendor: "Gas Station",
    amount: -1800,
    category: "Transportation",
    confidence: 88,
    status: "flagged",
    mood: "😤",
  },
]

export function TransactionTable() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4 text-emerald-600" />
      case "pending":
        return <Clock className="w-4 h-4 text-orange-600" />
      case "flagged":
        return <AlertCircle className="w-4 h-4 text-red-600" />
      default:
        return null
    }
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Dining Out": "bg-red-100 text-red-700",
      Transportation: "bg-blue-100 text-blue-700",
      Shopping: "bg-orange-100 text-orange-700",
      Groceries: "bg-emerald-100 text-emerald-700",
      Entertainment: "bg-purple-100 text-purple-700",
    }
    return colors[category] || "bg-gray-100 text-gray-700"
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Vendor</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Confidence</TableHead>
          <TableHead>Mood</TableHead>
          <TableHead>Status</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{new Date(transaction.date).toLocaleDateString()}</TableCell>
            <TableCell>{transaction.vendor}</TableCell>
            <TableCell>
              <Badge className={getCategoryColor(transaction.category)}>{transaction.category}</Badge>
            </TableCell>
            <TableCell className="font-medium">₹{Math.abs(transaction.amount).toFixed(2)}</TableCell>
            <TableCell>
              <div className="flex items-center space-x-2">
                <div className="w-12 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-600 h-2 rounded-full"
                    style={{ width: `${transaction.confidence}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{transaction.confidence}%</span>
              </div>
            </TableCell>
            <TableCell className="text-lg">{transaction.mood}</TableCell>
            <TableCell>
              <div className="flex items-center space-x-2">
                {getStatusIcon(transaction.status)}
                <span className="text-sm capitalize">{transaction.status}</span>
              </div>
            </TableCell>
            <TableCell>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
