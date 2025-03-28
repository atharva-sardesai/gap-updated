"use client"

import { CheckCircle2, Circle, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface VerticalProgressProps {
  steps: {
    id: number | string
    label: string
    completed: boolean
    current: boolean
    clickable: boolean
    questionIndex?: number
  }[]
  onStepClick: (questionIndex: number) => void
  className?: string
}

// Update the VerticalProgress component to better handle a large number of questions
export function VerticalProgress({ steps, onStepClick, className }: VerticalProgressProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center bg-white p-4 rounded-lg shadow-md border overflow-y-auto max-h-[calc(100vh-4rem)]",
        className,
      )}
    >
      <div className="flex flex-col items-center w-full">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center w-full">
            <div
              className={cn(
                "flex items-center gap-3 w-full py-2 px-3 rounded-md transition-colors",
                step.clickable ? "cursor-pointer hover:bg-slate-50" : "cursor-default",
                step.current ? "bg-blue-50" : ""
              )}
              onClick={() => {
                if (step.clickable && step.questionIndex !== undefined) {
                  onStepClick(step.questionIndex)
                }
              }}
              role={step.clickable ? "button" : "presentation"}
              aria-current={step.current ? "step" : undefined}
            >
              <div className="flex items-center gap-2 flex-1">
                {step.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <Circle className="h-5 w-5 text-slate-300" />
                )}
                <span className={cn(
                  "text-sm",
                  step.completed ? "text-slate-600" : "text-slate-700",
                  step.current ? "font-medium" : ""
                )}>
                  {step.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

