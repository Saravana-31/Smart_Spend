import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, Mic, Settings, Brain, Heart, Zap, Trash2 } from "lucide-react"
import { ChatMessage } from "@/components/chat-message"
import { SuggestedQueries } from "@/components/suggested-queries"

// Define TypeScript interface for messages
interface ChatMessageType {
  type: "user" | "assistant"
  message: string
  timestamp: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      type: "assistant",
      message: "Hi! I'm your AI Financial Coach. I'm here to help you understand your spending, plan your budget, and achieve your financial goals. What would you like to know?",
      timestamp: "Just now",
    },
  ])
  const [input, setInput] = useState("")
  const [personality, setPersonality] = useState("default")
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // Scroll to bottom of chat on new messages
  useEffect(() => {
    const chatContainer = document.querySelector(".chat-container")
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight
    }
  }, [messages])

  // Send message to backend
  const sendMessage = async () => {
    if (!input.trim()) return
    setLoading(true)

    const userMessage: ChatMessageType = {
      type: "user",
      message: input,
      timestamp: new Date().toLocaleTimeString(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, personality, session_id: sessionId }),
      })
      const data = await response.json()
      
      if (data.error) {
        console.error(data.error)
        setMessages((prev) => [
          ...prev,
          { type: "assistant", message: `Error: ${data.error}`, timestamp: new Date().toLocaleTimeString() },
        ])
      } else {
        setMessages((prev) => [
          ...prev,
          { type: "assistant", message: data.response, timestamp: new Date().toLocaleTimeString() },
        ])
        setSessionId(data.session_id)
      }
    } catch (error) {
      console.error(error)
      setMessages((prev) => [
        ...prev,
        { type: "assistant", message: "Error connecting to the server.", timestamp: new Date().toLocaleTimeString() },
      ])
    } finally {
      setLoading(false)
    }
  }

  // Clear conversation history
  const clearHistory = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/clear_history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId }),
      })
      const data = await response.json()
      
      if (data.error) {
        console.error(data.error)
        setMessages((prev) => [
          ...prev,
          { type: "assistant", message: `Error: ${data.error}`, timestamp: new Date().toLocaleTimeString() },
        ])
      } else {
        setMessages([
          {
            type: "assistant",
            message: "Conversation history cleared! How can I assist you now?",
            timestamp: new Date().toLocaleTimeString(),
          },
        ])
        setSessionId(null)
      }
    } catch (error) {
      console.error(error)
      setMessages((prev) => [
        ...prev,
        { type: "assistant", message: "Error clearing history.", timestamp: new Date().toLocaleTimeString() },
      ])
    }
  }

  // Handle personality selection
  const selectPersonality = (newPersonality: string) => {
    setPersonality(newPersonality)
    setMessages([
      {
        type: "assistant",
        message: `Switched to ${newPersonality.replace("_", " ")} mode. How can I assist you now?`,
        timestamp: new Date().toLocaleTimeString(),
      },
    ])
  }

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !loading) {
      sendMessage()
    }
  }

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
              <Card
                className={`cursor-pointer hover:shadow-md transition-shadow ${personality === "strict_mentor" ? "border-emerald-200 bg-emerald-50" : ""}`}
                onClick={() => selectPersonality("strict_mentor")}
              >
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

              <Card
                className={`cursor-pointer hover:shadow-md transition-shadow ${personality === "friendly_friend" ? "border-blue-200 bg-blue-50" : ""}`}
                onClick={() => selectPersonality("friendly_friend")}
              >
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

              <Card
                className={`cursor-pointer hover:shadow-md transition-shadow ${personality === "zen_coach" ? "border-purple-200 bg-purple-50" : ""}`}
                onClick={() => selectPersonality("zen_coach")}
              >
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
          <div className="flex-1 overflow-y-auto p-6 space-y-4 chat-container">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                type={msg.type}
                message={msg.message}
                timestamp={msg.timestamp}
              />
            ))}
          </div>

          {/* Chat Input */}
          <div className="border-t bg-white p-4">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <Input
                  placeholder="Ask me anything about your finances..."
                  className="pr-12"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={loading}
                />
                <Button
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                  onClick={sendMessage}
                  disabled={loading}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="outline" size="sm" disabled={loading}>
                <Mic className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={clearHistory} disabled={loading || !sessionId}>
                <Trash2 className="w-4 h-4" />
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