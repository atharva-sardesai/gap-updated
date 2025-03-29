"use client"

import { useState, useEffect } from "react"
import { WelcomeScreen } from "@/components/welcome-screen"
import { QuestionnaireScreen } from "@/components/questionnaire-screen"
import { ResultsScreen } from "@/components/results-screen"
import { VerticalProgress } from "@/components/vertical-progress"
import questionsData, { Question } from "@/lib/questions-data"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { LucideIcon } from "lucide-react"

export type Answer = {
  questionId: number
  compliant: boolean
  subQuestionValue?: number
  selectedRecommendationId?: string
}

export type AssessmentState = "welcome" | "questionnaire" | "results"

// Group questions by category for easier navigation
const questionsByCategory = questionsData.reduce(
  (acc, question) => {
    if (!acc[question.category]) {
      acc[question.category] = []
    }
    acc[question.category].push(question)
    return acc
  },
  {} as Record<string, typeof questionsData>,
)

// Get all unique categories
const categories = Object.keys(questionsByCategory)

interface Step {
  id: string | number
  label: string
  completed: boolean
  current: boolean
  clickable: boolean
  questionIndex?: number
}

export function ComplianceAssessment() {
  const [currentState, setCurrentState] = useState<AssessmentState>("welcome")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [visitedQuestions, setVisitedQuestions] = useState<number[]>([])

  // Track visited questions
  useEffect(() => {
    if (currentState === "questionnaire" && !visitedQuestions.includes(currentQuestionIndex)) {
      setVisitedQuestions((prev) => [...prev, currentQuestionIndex])
    }
  }, [currentQuestionIndex, currentState, visitedQuestions])

  const handleStartAssessment = () => {
    setCurrentState("questionnaire")
  }

  const handleAnswerQuestion = (compliant: boolean) => {
    const newAnswers = [...answers]

    // If we already have an answer for this question, preserve the subQuestionValue and selectedRecommendationId
    const existingAnswer = newAnswers[currentQuestionIndex]

    newAnswers[currentQuestionIndex] = {
      questionId: questionsData[currentQuestionIndex].id,
      compliant,
      subQuestionValue: existingAnswer?.subQuestionValue,
      selectedRecommendationId: existingAnswer?.selectedRecommendationId,
    }

    setAnswers(newAnswers)
  }

  const handleSubQuestionChange = (value: number) => {
    const newAnswers = [...answers]

    // If we don't have an answer yet, create one
    if (!newAnswers[currentQuestionIndex]) {
      newAnswers[currentQuestionIndex] = {
        questionId: questionsData[currentQuestionIndex].id,
        compliant: false,
        subQuestionValue: value,
      }
    } else {
      // Otherwise update the existing answer
      newAnswers[currentQuestionIndex] = {
        ...newAnswers[currentQuestionIndex],
        subQuestionValue: value,
      }
    }

    setAnswers(newAnswers)
  }

  const handleSelectRecommendation = (questionId: number, recommendationId: string) => {
    const newAnswers = [...answers]

    // Find the question index
    const questionIndex = currentQuestionIndex

    // If we don't have an answer yet, create one
    if (!newAnswers[questionIndex]) {
      newAnswers[questionIndex] = {
        questionId,
        compliant: false,
        selectedRecommendationId: recommendationId,
      }
    } else {
      // Otherwise update the existing answer
      newAnswers[questionIndex] = {
        ...newAnswers[questionIndex],
        selectedRecommendationId: recommendationId,
      }
    }

    setAnswers(newAnswers)
  }

  // Modify the handleNextQuestion function to navigate to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // If we're at the last question overall
      setCurrentState("results")
    }
  }

  // Add a function to handle previous question navigation
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleRestartAssessment = () => {
    setCurrentState("welcome")
    setCurrentQuestionIndex(0)
    setAnswers([])
    setVisitedQuestions([])
  }

  // Navigate to a specific question index
  const handleNavigateToQuestion = (questionIndex: number) => {
    if (questionIndex >= 0 && questionIndex < questionsData.length) {
      setCurrentQuestionIndex(questionIndex)
      if (currentState !== "questionnaire") {
        setCurrentState("questionnaire")
      }
    }
  }

  // Navigate to results if all questions are answered
  const handleViewResults = () => {
    if (answers.length === questionsData.length) {
      setCurrentState("results")
    }
  }

  // Calculate compliance percentage for real-time tracking
  const calculateCompliancePercentage = () => {
    if (answers.length === 0) return 0
    const compliantCount = answers.filter((answer) => answer.compliant).length
    return Math.round((compliantCount / answers.length) * 100)
  }

  const generateSteps = () => {
    const steps: Step[] = [
      {
        id: "welcome",
        label: "Welcome",
        completed: currentQuestionIndex > -1,
        current: currentQuestionIndex === -1,
        clickable: false,
      },
    ]

    // Add questions in sequential order
    questionsData.forEach((question, index) => {
      steps.push({
        id: `question-${question.id}`,
        label: `Q${index + 1}: ${question.text.length > 30 ? `${question.text.substring(0, 30)}...` : question.text}`,
        completed: answers[index]?.compliant !== undefined,
        current: currentQuestionIndex === index,
        clickable: true,
        questionIndex: index,
      })
    })

    // Add results step
    steps.push({
      id: "results",
      label: "Results",
      completed: currentQuestionIndex === questionsData.length,
      current: currentQuestionIndex === questionsData.length,
      clickable: false,
    })

    return steps
  }

  // Calculate the number of answered questions
  const answeredQuestionsCount = answers.filter((a) => a !== undefined).length

  const totalQuestions = questionsData.length;
  const totalCategories = Object.keys(
    questionsData.reduce((acc: Record<string, boolean>, question: Question) => {
      acc[question.category] = true;
      return acc;
    }, {} as Record<string, boolean>)
  ).length;

  // Update the return JSX to show navigation buttons for previous and next questions
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto px-4 py-8">
      <div className="md:col-span-3">
        {currentState === "welcome" && <WelcomeScreen onStart={handleStartAssessment} />}

        {currentState === "questionnaire" && (
          <>
            {answers.length > 0 && (
              <div className="mb-4 bg-white p-3 rounded-lg shadow-sm border flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Current Compliance Score:</span>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {calculateCompliancePercentage()}% Compliant
                </span>
              </div>
            )}

            <div className="mb-4 bg-white p-3 rounded-lg shadow-sm border flex flex-wrap items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-700">
                  Question {currentQuestionIndex + 1} of {questionsData.length}
                </span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  {answeredQuestionsCount}/{questionsData.length} Answered
                </span>
              </div>
              <div className="flex gap-2 mt-2 sm:mt-0">
                {currentQuestionIndex > 0 && (
                  <Button variant="outline" size="sm" onClick={handlePreviousQuestion}>
                    <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                  </Button>
                )}
                {currentQuestionIndex < questionsData.length - 1 && answers[currentQuestionIndex] && (
                  <Button variant="outline" size="sm" onClick={handleNextQuestion}>
                    Next <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                )}
                {answeredQuestionsCount > 0 && (
                  <Button variant="outline" size="sm" onClick={handleViewResults}>
                    View Results
                  </Button>
                )}
              </div>
            </div>

            <QuestionnaireScreen
              question={questionsData[currentQuestionIndex]}
              currentIndex={currentQuestionIndex}
              totalQuestions={questionsData.length}
              onAnswer={handleAnswerQuestion}
              onSubQuestionChange={handleSubQuestionChange}
              onSelectRecommendation={handleSelectRecommendation}
              onNext={handleNextQuestion}
              selectedAnswer={answers[currentQuestionIndex]?.compliant}
              subQuestionValue={answers[currentQuestionIndex]?.subQuestionValue}
              selectedRecommendationId={answers[currentQuestionIndex]?.selectedRecommendationId}
            />
          </>
        )}

        {currentState === "results" && (
          <ResultsScreen answers={answers} questions={questionsData} onRestart={handleRestartAssessment} />
        )}
      </div>

      <div className="md:col-span-1 h-fit sticky top-8">
        <VerticalProgress steps={generateSteps()} onStepClick={handleNavigateToQuestion} />
      </div>
    </div>
  )
}

