import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { X } from "lucide-react"

export function FilterPanel() {
  const categories = [
    "Groceries",
    "Dining Out",
    "Transportation",
    "Entertainment",
    "Shopping",
    "Bills & Utilities",
    "Healthcare",
    "Travel",
  ]

  const moods = ["😊 Happy", "😐 Neutral", "😤 Frustrated", "😔 Regretful"]

  return (
    <Card className="w-80">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          <Button variant="ghost" size="sm">
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categories */}
        <div>
          <h4 className="font-medium mb-3">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox id={category} />
                <label htmlFor={category} className="text-sm">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Amount Range */}
        <div>
          <h4 className="font-medium mb-3">Amount Range</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="under-10" />
              <label htmlFor="under-10" className="text-sm">
                Under $10
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="10-50" />
              <label htmlFor="10-50" className="text-sm">
                $10 - $50
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="50-100" />
              <label htmlFor="50-100" className="text-sm">
                $50 - $100
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="over-100" />
              <label htmlFor="over-100" className="text-sm">
                Over $100
              </label>
            </div>
          </div>
        </div>

        {/* Mood */}
        <div>
          <h4 className="font-medium mb-3">Purchase Mood</h4>
          <div className="space-y-2">
            {moods.map((mood) => (
              <div key={mood} className="flex items-center space-x-2">
                <Checkbox id={mood} />
                <label htmlFor={mood} className="text-sm">
                  {mood}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2 pt-4 border-t">
          <Button className="flex-1">Apply Filters</Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            Clear All
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
