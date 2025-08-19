"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Groceries", value: 12500, color: "#10b981" },
  { name: "Dining Out", value: 9500, color: "#ef4444" },
  { name: "Transportation", value: 3800, color: "#3b82f6" },
  { name: "Entertainment", value: 2500, color: "#8b5cf6" },
  { name: "Shopping", value: 13000, color: "#f59e0b" },
  { name: "Bills", value: 19500, color: "#6b7280" },
]

export function SpendingChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`₹${value}`, "Amount"]} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
