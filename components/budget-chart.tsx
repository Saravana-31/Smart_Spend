"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { category: "Groceries", budget: 15000, spent: 12500 },
  { category: "Dining", budget: 8000, spent: 9500 },
  { category: "Transport", budget: 5000, spent: 3800 },
  { category: "Entertainment", budget: 4000, spent: 2500 },
  { category: "Shopping", budget: 10000, spent: 13000 },
  { category: "Bills", budget: 20000, spent: 19500 },
]

export function BudgetChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="budget" fill="#e5e7eb" name="Budget" />
          <Bar dataKey="spent" fill="#10b981" name="Spent" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
