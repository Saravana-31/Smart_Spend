import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Trophy, Clock } from "lucide-react"

interface BudgetChallengeCardProps {
  title: string
  description: string
  progress: number
  reward: string
  daysLeft: number
}

export function BudgetChallengeCard({ title, description, progress, reward, daysLeft }: BudgetChallengeCardProps) {
  return (
    <Card className="border-l-4 border-l-emerald-500">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-medium text-gray-900">{title}</h4>
          <Trophy className="w-4 h-4 text-yellow-600" />
        </div>
        <p className="text-sm text-gray-600 mb-3">{description}</p>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex items-center justify-between mt-3">
          <Badge variant="secondary" className="text-xs">
            {reward}
          </Badge>
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="w-3 h-3 mr-1" />
            {daysLeft} days left
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
