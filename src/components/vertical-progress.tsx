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
  // State to track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})

  // Helper to determine if a step is a category (not a question or welcome/results)
  const isCategory = (step: (typeof steps)[0]) => {
    return (
      typeof step.id === "number" && step.id > 0 && step.id <= steps.filter((s) => typeof s.id === "number").length - 2
    )
  }

  // Helper to determine if a step is a question (belongs to a category)
  const isQuestion = (step: (typeof steps)[0]) => {
    return typeof step.id === "string" && step.id.includes("-")
  }

  // Helper to get the category ID for a question
  const getCategoryId = (questionId: string) => {
    return Number(questionId.split("-")[0])
  }

  // Toggle category expansion
  const toggleCategory = (categoryId: number) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  // Determine if a category should be expanded
  const isCategoryExpanded = (categoryId: number) => {
    // If explicitly set in state, use that value
    if (expandedCategories[categoryId] !== undefined) {
      return expandedCategories[categoryId]
    }

    // Otherwise, expand if it contains the current question
    const categoryQuestions = steps.filter(
      (step) => typeof step.id === "string" && step.id.startsWith(`${categoryId}-`),
    )

    return categoryQuestions.some((question) => question.current)
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center bg-white p-4 rounded-lg shadow-md border overflow-y-auto max-h-[calc(100vh-4rem)]",
        className,
      )}
    >
      <div className="flex flex-col items-center w-full">
        {steps.map((step, index) => {
          // Skip rendering questions if their category is collapsed
          if (isQuestion(step)) {
            const categoryId = getCategoryId(step.id as string)
            if (!isCategoryExpanded(categoryId)) {
              return null
            }
          }

          return (
            <div key={step.id} className="flex flex-col items-center w-full">
              <div
                className={cn(
                  "flex items-center gap-3 w-full py-2 px-3 rounded-md transition-colors",
                  step.clickable || isCategory(step) ? "cursor-pointer hover:bg-slate-50" : "cursor-default",
                  step.current ? "bg-blue-50" : "",
                  isQuestion(step) ? "pl-8" : "", // Indent questions
                )}
                onClick={() => {
                  if (isCategory(step)) {
                    toggleCategory(step.id as number)
                  } else if (step.clickable && step.questionIndex !== undefined) {
                    onStepClick(step.questionIndex)
                  }
                }}
                role={step.clickable || isCategory(step) ? "button" : "presentation"}
                aria-current={step.current ? "step" : undefined}
              >
                {isCategory(step) ? (
                  // Category with expand/collapse icon
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      {step.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      ) : step.current ? (
                        <div className="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 animate-pulse flex-shrink-0" />
                      ) : (
                        <Circle className="h-5 w-5 text-slate-300 flex-shrink-0" />
                      )}
                      <span
                        className={cn(
                          "text-sm font-medium",
                          step.completed ? "text-green-600" : step.current ? "text-blue-600" : "text-slate-600",
                        )}
                      >
                        {step.label}
                      </span>
                    </div>
                    {isCategoryExpanded(step.id as number) ? (
                      <ChevronUp className="h-4 w-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    )}
                  </div>
                ) : (
                  // Regular step (welcome, question, or results)
                  <>
                    {step.completed ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    ) : step.current ? (
                      <div className="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 animate-pulse flex-shrink-0" />
                    ) : (
                      <Circle className="h-5 w-5 text-slate-300 flex-shrink-0" />
                    )}
                    <span
                      className={cn(
                        "text-sm font-medium",
                        step.completed ? "text-green-600" : step.current ? "text-blue-600" : "text-slate-400",
                        step.clickable ? "hover:underline" : "",
                      )}
                    >
                      {step.label}
                    </span>
                  </>
                )}
              </div>
              {index < steps.length - 1 && !isQuestion(step) && (
                <div className={cn("w-0.5 h-4", step.completed ? "bg-green-600" : "bg-slate-200")} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

