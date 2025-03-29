"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "@/components/ui/chart"

interface ComplianceChartProps {
  compliantPercentage: number
  nonCompliantPercentage: number
}

export function ComplianceChart({ compliantPercentage, nonCompliantPercentage }: ComplianceChartProps) {
  const data = [
    { name: "Compliant", value: compliantPercentage },
    { name: "Non-Compliant", value: nonCompliantPercentage },
  ]

  const COLORS = ["#22c55e", "#f59e0b"]

  // Add error boundary for chart rendering
  try {
    return (
      <div className="w-full h-full min-h-[256px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  } catch (error) {
    // Fallback display if chart fails to render
    return (
      <div className="w-full h-full min-h-[256px] flex items-center justify-center bg-slate-50 rounded-lg border">
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-800">{compliantPercentage}%</div>
          <div className="text-sm text-slate-600">Compliant</div>
        </div>
      </div>
    )
  }
}

