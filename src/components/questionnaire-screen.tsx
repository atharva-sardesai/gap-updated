"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Question } from "@/lib/questions-data"
import { RecommendationPanel } from "@/components/recommendation-panel"
import { InfoIcon as InfoCircle } from "lucide-react"

interface QuestionnaireScreenProps {
  question: Question
  currentIndex: number
  totalQuestions: number
  selectedAnswer?: boolean | null
  subQuestionValue?: number
  selectedRecommendationId?: string
  onAnswer: (compliant: boolean | null) => void
  onSubQuestionChange: (value: number) => void
  onSelectRecommendation: (questionId: number, recommendationId: string) => void
  onNext: () => void
  isLastQuestionOnPage?: boolean
}

export function QuestionnaireScreen({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  subQuestionValue,
  selectedRecommendationId,
  onAnswer,
  onSubQuestionChange,
  onSelectRecommendation,
  onNext,
  isLastQuestionOnPage,
}: QuestionnaireScreenProps) {
  const [showRecommendations, setShowRecommendations] = useState(false)

  const progressPercentage = Math.round((currentIndex / totalQuestions) * 100)

  const handleAnswerSelection = (compliant: boolean | null) => {
    onAnswer(compliant)
    setShowRecommendations(compliant === false)

    // If there's a sub-question and the answer is "No", set a default value
    if (compliant === false && question.subQuestion && subQuestionValue === undefined) {
      const defaultValue = typeof question.subQuestion.defaultValue === 'string' 
        ? parseInt(question.subQuestion.defaultValue, 10) 
        : question.subQuestion.defaultValue || 1;
      onSubQuestionChange(defaultValue);
    }

    // If the answer is "No" and there are recommendations, select the first one by default
    if (compliant === false && question.recommendations.length > 0 && !selectedRecommendationId) {
      onSelectRecommendation(question.id, question.recommendations[0].id)
    }
  }

  const handleSubQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    if (inputValue === "") {
      onSubQuestionChange(1)
    } else {
      const value = Number.parseInt(inputValue)
      if (!isNaN(value) && value >= (question.subQuestion?.min || 1)) {
        onSubQuestionChange(value)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-sm border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-medium text-slate-800">ISO 27001 Compliance Assessment</h2>
          <p className="text-sm text-slate-600">Evaluating your organization's security controls</p>
        </div>

        <div className="flex flex-col md:items-end gap-1">
          <div className="flex items-center justify-between gap-4 mb-1">
            <span className="text-sm font-medium text-slate-600">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-blue-600">{progressPercentage}% Complete</span>
          </div>
          <Progress value={progressPercentage} className="h-2 w-full md:w-64" />
        </div>
      </div>

      <Card className="shadow-md">
        <CardHeader className="pb-2">
          <div className="flex items-start gap-2">
            <div className="bg-blue-100 p-2 rounded-full mt-0.5">
              <question.icon className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-xl text-slate-800">{question.text}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {question.description}
                {question.helpText && (
                  <span className="block mt-1 text-xs text-muted-foreground">
                    {question.helpText}
                  </span>
                )}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 pt-4">
          <div className="flex gap-4">
            <Button
              variant={selectedAnswer === true ? "default" : "outline"}
              className={`flex-1 py-6 ${selectedAnswer === true ? "bg-green-600 hover:bg-green-700" : ""}`}
              onClick={() => handleAnswerSelection(true)}
            >
              Yes, We Are Compliant
            </Button>
            <Button
              variant={selectedAnswer === false ? "default" : "outline"}
              className={`flex-1 py-6 ${selectedAnswer === false ? "bg-blue-600 hover:bg-blue-700" : ""}`}
              onClick={() => handleAnswerSelection(false)}
            >
              No, We Need Solutions
            </Button>
            <Button
              variant={selectedAnswer === null ? "default" : "outline"}
              className={`flex-1 py-6 ${selectedAnswer === null ? "bg-gray-600 hover:bg-gray-700" : ""}`}
              onClick={() => handleAnswerSelection(null)}
            >
              Does Not Apply
            </Button>
          </div>

          {question.helpText && (
            <div className="bg-slate-50 p-3 rounded-md border flex gap-2">
              <InfoCircle className="h-5 w-5 text-slate-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-600">{question.helpText}</p>
            </div>
          )}

          {/* Sub-question that appears when the answer is "No" */}
          {selectedAnswer === false && question.subQuestion && (
            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-gray-700">
                {question.subQuestion.text}
              </p>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  min={question.subQuestion.min || 1}
                  max={question.subQuestion.max || 100}
                  value={subQuestionValue?.toString() || "1"}
                  onChange={handleSubQuestionChange}
                  placeholder={question.subQuestion.placeholder || ""}
                  className="w-24"
                />
                <span className="text-sm text-gray-500">
                  {question.subQuestion.unit}
                </span>
              </div>
            </div>
          )}

          {showRecommendations && selectedAnswer === false && (
            <RecommendationPanel
              recommendations={question.recommendations}
              questionCategory={question.category}
              questionId={question.id}
              subQuestionValue={subQuestionValue}
              selectedRecommendationId={selectedRecommendationId}
              onSelectRecommendation={onSelectRecommendation}
            />
          )}
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button
            onClick={onNext}
            disabled={
              selectedAnswer === undefined ||
              (selectedAnswer === false && question.subQuestion && subQuestionValue === undefined) ||
              (selectedAnswer === false && !selectedRecommendationId)
            }
            className="px-6"
          >
            {currentIndex === totalQuestions - 1 ? "View Results" : "Next Question"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

