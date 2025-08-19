import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smile } from "lucide-react"

export function MoodCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Smile className="w-5 h-5 mr-2 text-yellow-600" />
          Spending Mood
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl mb-2">😊</div>
          <Badge className="bg-green-100 text-green-700">Optimistic</Badge>
          <p className="text-sm text-gray-600 mt-2">Your spending this month reflects a positive, balanced approach</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Happy purchases</span>
            <span className="text-sm font-medium">68%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Stress purchases</span>
            <span className="text-sm font-medium">12%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Planned purchases</span>
            <span className="text-sm font-medium">20%</span>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-gray-500">
            💡 Tip: Your happiest purchases are usually under $50 and related to experiences
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
