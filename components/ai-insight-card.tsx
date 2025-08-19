import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, Info, TrendingUp } from "lucide-react"

interface AIInsightCardProps {
  type: "warning" | "success" | "info" | "trend"
  title: string
  message: string
  action?: string
}

export function AIInsightCard({ type, title, message, action }: AIInsightCardProps) {
  const getIcon = () => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-orange-600" />
      case "success":
        return <CheckCircle className="w-5 h-5 text-emerald-600" />
      case "info":
        return <Info className="w-5 h-5 text-blue-600" />
      case "trend":
        return <TrendingUp className="w-5 h-5 text-purple-600" />
    }
  }

  const getCardStyle = () => {
    switch (type) {
      case "warning":
        return "border-orange-200 bg-orange-50"
      case "success":
        return "border-emerald-200 bg-emerald-50"
      case "info":
        return "border-blue-200 bg-blue-50"
      case "trend":
        return "border-purple-200 bg-purple-50"
    }
  }

  return (
    <Card className={getCardStyle()}>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          {getIcon()}
          <div className="flex-1">
            <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
            <p className="text-sm text-gray-700 mb-3">{message}</p>
            {action && (
              <Button size="sm" variant="outline" className="text-xs bg-transparent">
                {action}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
