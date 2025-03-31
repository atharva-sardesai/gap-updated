export interface Answer {
  questionId: number
  compliant: boolean | null // null means "Does not apply"
  subQuestionValue?: number
  selectedRecommendationId?: string
}

export type Answers = Record<number, Answer> 