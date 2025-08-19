import { Button } from "@/components/ui/button"

const queries = [
  "Why am I overspending?",
  "Can I afford a vacation in October?",
  "Suggest a budget to save $10K in 3 months",
  "What are my biggest spending categories?",
  "How can I reduce my monthly expenses?",
  "Should I pay off debt or save first?",
]

export function SuggestedQueries() {
  return (
    <div className="space-y-2">
      {queries.map((query, index) => (
        <Button
          key={index}
          variant="ghost"
          className="w-full text-left justify-start text-sm h-auto p-3 whitespace-normal"
        >
          {query}
        </Button>
      ))}
    </div>
  )
}
