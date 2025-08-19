import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, User } from "lucide-react"

interface ChatMessageProps {
  type: "user" | "assistant"
  message: string
  timestamp: string
}

export function ChatMessage({ type, message, timestamp }: ChatMessageProps) {
  const isAssistant = type === "assistant"

  return (
    <div className={`flex ${isAssistant ? "justify-start" : "justify-end"} mb-4`}>
      <div className={`flex ${isAssistant ? "flex-row" : "flex-row-reverse"} items-start space-x-3 max-w-3xl`}>
        <Avatar className="w-8 h-8">
          <AvatarFallback className={isAssistant ? "bg-emerald-100" : "bg-blue-100"}>
            {isAssistant ? <Brain className="w-4 h-4 text-emerald-600" /> : <User className="w-4 h-4 text-blue-600" />}
          </AvatarFallback>
        </Avatar>

        <div className={`flex flex-col ${isAssistant ? "items-start" : "items-end"}`}>
          <Card className={`${isAssistant ? "bg-white" : "bg-blue-500 text-white"} border-0 shadow-sm`}>
            <CardContent className="p-3">
              <p className="text-sm whitespace-pre-wrap">{message}</p>
            </CardContent>
          </Card>
          <span className="text-xs text-gray-500 mt-1">{timestamp}</span>
        </div>
      </div>
    </div>
  )
}
