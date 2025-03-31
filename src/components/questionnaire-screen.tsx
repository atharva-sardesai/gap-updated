"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"
import { Input } from "./ui/input"
import { Label } from "@/components/ui/label"
import type { Question } from "@/lib/questions-data"
import { RecommendationPanel } from "./recommendation-panel"
import { InfoIcon as InfoCircle } from "lucide-react"
import { ResultsScreen } from "./results-screen"
import { Answer, Answers } from "../types/assessment"
import questionsData from "../lib/questions-data"

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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [showResults, setShowResults] = useState(false)
  const [customSolutionHours, setCustomSolutionHours] = useState<number | undefined>(undefined)

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
      handleSelectRecommendation(question.recommendations[0].id)
    }
  }

  const handleSubQuestionChange = (value: number) => {
    console.log("Updating sub-question value:", { questionId: question.id, value })
    onSubQuestionChange(value)
  }

  const handleCustomSolutionChange = (value: number) => {
    console.log("Updating custom solution hours:", { questionId: question.id, value })
    setCustomSolutionHours(value)
  }

  const handleSelectRecommendation = (recommendationId: string) => {
    console.log("Selecting recommendation:", { questionId: question.id, recommendationId })
    onSelectRecommendation(question.id, recommendationId)
  }

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    // First reset all the local states
    setShowRecommendations(false)
    setCustomSolutionHours(undefined)
    
    // Reset all the parent states before moving to next question
    onAnswer(null)
    onSubQuestionChange(0)
    onSelectRecommendation(question.id, "")
    
    // Call the parent's onNext to move to the next question
    onNext()
    
    // Update local question index if needed
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else if (currentQuestionIndex === totalQuestions - 1) {
      setShowResults(true)
    }
  }

  const handleShowResults = () => {
    setShowResults(true)
  }

  const handleRestart = () => {
    setShowResults(false)
    setCurrentQuestionIndex(0)
    setAnswers({})
  }

  const currentQuestion = questionsData[currentQuestionIndex]
  const currentAnswer = answers[currentQuestionIndex]

  return (
    <div className="container mx-auto py-8 px-4">
      {!showResults ? (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-800">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </h2>
            <Button variant="outline" onClick={handleShowResults}>
              Skip to Results
            </Button>
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
                <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                  <Label htmlFor={question.subQuestion.id} className="text-blue-800 font-medium block mb-2">
                    {question.subQuestion.text}
                  </Label>
                  {question.subQuestion.unit === "" && question.subQuestion.placeholder === "Yes/No" ? (
                    <div className="flex gap-4">
                      <Button
                        variant={subQuestionValue === 1 ? "default" : "outline"}
                        className={`flex-1 py-2 ${subQuestionValue === 1 ? "bg-green-600 hover:bg-green-700" : ""}`}
                        onClick={() => handleSubQuestionChange(1)}
                      >
                        Yes
                      </Button>
                      <Button
                        variant={subQuestionValue === 0 ? "default" : "outline"}
                        className={`flex-1 py-2 ${subQuestionValue === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                        onClick={() => handleSubQuestionChange(0)}
                      >
                        No
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Input
                        id={question.subQuestion.id}
                        type="number"
                        placeholder={question.subQuestion.placeholder}
                        value={subQuestionValue || ""}
                        min={question.subQuestion.min || 1}
                        onChange={(e) => {
                          const value = Number.parseInt(e.target.value)
                          if (!isNaN(value) && question.subQuestion && value >= (question.subQuestion.min || 1)) {
                            handleSubQuestionChange(value)
                          }
                        }}
                        className="max-w-xs"
                      />
                      <span className="text-blue-700">{question.subQuestion.unit}</span>
                    </div>
                  )}
                </div>
              )}

              {showRecommendations && selectedAnswer === false && (
                <RecommendationPanel
                  recommendations={question.recommendations}
                  questionCategory={question.category}
                  questionId={question.id.toString()}
                  subQuestionValue={selectedRecommendationId === "custom-solution" ? customSolutionHours : subQuestionValue}
                  selectedRecommendationId={selectedRecommendationId}
                  onSelectRecommendation={onSelectRecommendation}
                  onSubQuestionChange={handleCustomSolutionChange}
                />
              )}
            </CardContent>

            <CardFooter className="flex justify-end">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="px-6"
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={
                  selectedAnswer === undefined || 
                  (selectedAnswer === false && !selectedRecommendationId)
                }
                className="px-6"
              >
                {currentQuestionIndex === totalQuestions - 1 ? "Show Results" : "Next"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <ResultsScreen 
          answers={Object.entries(answers).map(([_, answer]) => answer)}
          questions={questionsData}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}

