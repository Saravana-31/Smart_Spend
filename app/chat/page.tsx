import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, Mic, Settings, Brain, Heart, Zap } from "lucide-react"
import { ChatMessage } from "@/components/chat-message"
import { SuggestedQueries } from "@/components/suggested-queries"

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">AI Assistant</h1>
            <p className="text-gray-600">Get personalized financial advice and insights</p>
          </div>
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Assistant Settings
          </Button>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar - AI Personality Selection */}
        <div className="w-80 bg-white border-r p-6 space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Choose Your AI Coach</h3>
            <div className="space-y-3">
              <Card className="cursor-pointer hover:shadow-md transition-shadow border-emerald-200 bg-emerald-50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-emerald-900">Strict Mentor</h4>
                      <p className="text-sm text-emerald-700">Direct, goal-focused advice</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">Friendly Friend</h4>
                      <p className="text-sm text-gray-600">Supportive and encouraging</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">Zen Coach</h4>
                      <p className="text-sm text-gray-600">Calm, mindful approach</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Questions</h3>
            <SuggestedQueries />
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hi! I'm your AI Financial Coach</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                I'm here to help you understand your spending, plan your budget, and achieve your financial goals. What
                would you like to know?
              </p>
            </div>

            <ChatMessage
              type="assistant"
              message="I noticed you've been spending more on dining out this month. Would you like me to analyze your eating habits and suggest some budget-friendly alternatives?"
              timestamp="2 minutes ago"
            />

            <ChatMessage
              type="user"
              message="Yes, that would be helpful. Can you show me how much I'm spending compared to last month?"
              timestamp="1 minute ago"
            />

            <ChatMessage
              type="assistant"
              message="Based on your transaction history, you've spent $380 on dining out this month compared to $245 last month - that's a 55% increase! Here are some insights:

• You've ordered takeout 12 times this month vs 7 times last month
• Your average meal cost has increased from $35 to $42
• Most of your dining expenses happen on weekends

Would you like me to suggest a dining budget that still allows for some flexibility while helping you save money?"
              timestamp="Just now"
            />
          </div>

          {/* Chat Input */}
          <div className="border-t bg-white p-4">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <Input placeholder="Ask me anything about your finances..." className="pr-12" />
                <Button size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Mic className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              AI responses are generated based on your financial data and may not always be accurate.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
