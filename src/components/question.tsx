import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { InfoIcon } from "lucide-react"
import type { Question as QuestionType } from "../lib/questions-data"
import type { Answer } from "../types/assessment"

interface QuestionProps {
  question: QuestionType
  answer?: Answer
  onAnswer: (compliant: boolean) => void
}

export function Question({ question, answer, onAnswer }: QuestionProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 p-2 rounded-full">
            <question.icon className="h-5 w-5 text-blue-600" />
          </div>
          <CardTitle>{question.text}</CardTitle>
        </div>
        {question.description && (
          <CardDescription>{question.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {question.helpText && (
            <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-md">
              <InfoIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-700">{question.helpText}</p>
            </div>
          )}

          <div className="flex gap-2">
            <Button
              variant={answer?.compliant === true ? "default" : "outline"}
              onClick={() => onAnswer(true)}
            >
              Yes
            </Button>
            <Button
              variant={answer?.compliant === false ? "default" : "outline"}
              onClick={() => onAnswer(false)}
            >
              No
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export type { QuestionProps } 