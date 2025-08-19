"use client"

import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"

const data = [
  { date: "Jan 15", balance: 1047230, income: 0, expenses: 0 },
  { date: "Jan 16", balance: 1032230, income: 0, expenses: 197 },
  { date: "Jan 17", balance: 1025230, income: 0, expenses: 70 },
  { date: "Jan 18", balance: 1009230, income: 0, expenses: 160 },
  { date: "Jan 19", balance: 1002230, income: 0, expenses: 70 },
  { date: "Jan 20", balance: 985230, income: 0, expenses: 170 },
  { date: "Jan 21", balance: 975230, income: 0, expenses: 100 },
  { date: "Jan 22", balance: 1275230, income: 300000, expenses: 0 },
  { date: "Jan 23", balance: 1259230, income: 0, expenses: 160 },
  { date: "Jan 24", balance: 1242230, income: 0, expenses: 170 },
  { date: "Jan 25", balance: 1225230, income: 0, expenses: 170 },
  { date: "Jan 26", balance: 1208230, income: 0, expenses: 170 },
  { date: "Jan 27", balance: 1191230, income: 0, expenses: 170 },
  { date: "Jan 28", balance: 1174230, income: 0, expenses: 170 },
  { date: "Jan 29", balance: 1157230, income: 0, expenses: 170 },
]

export function CashFlowChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} tickFormatter={(value) => value.split(" ")[1]} />
          <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`} />
          <Tooltip
            formatter={(value) => [`₹${value.toLocaleString()}`, "Balance"]}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Area type="monotone" dataKey="balance" stroke="#10b981" fill="#10b981" fillOpacity={0.1} strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
