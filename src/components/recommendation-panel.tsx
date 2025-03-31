"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Clock, ExternalLink, Users, Calendar, DollarSign, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { Recommendation } from "@/lib/questions-data"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface RecommendationPanelProps {
  recommendations: Recommendation[]
  questionCategory: string
  questionId: string
  subQuestionValue?: number
  selectedRecommendationId?: string
  onSelectRecommendation: (questionId: number, recommendationId: string) => void
  onSubQuestionChange: (value: number) => void
}

export function RecommendationPanel({
  recommendations,
  questionCategory,
  questionId,
  subQuestionValue = 0,
  selectedRecommendationId,
  onSelectRecommendation,
  onSubQuestionChange,
}: RecommendationPanelProps) {
  const [inputError, setInputError] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)

  // Get the first recommendation for timeline details
  const primaryRecommendation = recommendations.find((r) => r.id === selectedRecommendationId) || recommendations[0]

  const handleCustomEffortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numValue = Number.parseInt(value)
    
    // Always update the input value
    if (value === "") {
      setInputError("Please enter a value")
    } else if (isNaN(numValue)) {
      setInputError("Please enter a valid number")
    } else if (numValue < 40) {
      setInputError("Value must be at least 40 hours")
    } else if (numValue > 2000) {
      setInputError("Value cannot exceed 2000 hours")
    } else {
      setInputError("")
      // Update the parent component's subQuestionValue through onSubQuestionChange
      onSubQuestionChange(numValue)
    }
  }

  // Calculate estimates based on sub-question value
  const calculateEstimates = (recommendation: Recommendation) => {
    // For custom solutions, use the subQuestionValue directly
    if (recommendation.id === "custom-solution") {
      return {
        effort: subQuestionValue || 0,
        timeline: subQuestionValue ? `${Math.ceil(subQuestionValue / 40)} weeks` : "0 weeks",
        cost: "Internal Cost"
      }
    }

    // For other recommendations, use the existing logic
    const validSubQuestionValue = subQuestionValue !== undefined && !isNaN(subQuestionValue) ? subQuestionValue : 0

    const effort =
      recommendation.calculateEffort && validSubQuestionValue > 0
        ? recommendation.calculateEffort(validSubQuestionValue)
        : recommendation.effortHours

    const timeline =
      recommendation.calculateTimeline && validSubQuestionValue > 0
        ? recommendation.calculateTimeline(validSubQuestionValue)
        : recommendation.recommendedTimeline

    let cost = recommendation.estimatedCostRange
    if (validSubQuestionValue > 0) {
      if (recommendation.calculateCost) {
        cost = recommendation.calculateCost(validSubQuestionValue)
      } else if (recommendation.perUnitCost) {
        const { amount, unit, period } = recommendation.perUnitCost
        const totalCost = amount * validSubQuestionValue
        cost = formatCurrency(totalCost) + `/${period}`
      } else {
        // If no calculateCost or perUnitCost, adjust based on base cost
        const baseCost = extractCostValue(recommendation.estimatedCostRange, "min")
        const adjustedCost = baseCost * validSubQuestionValue
        cost = formatCurrency(adjustedCost) + "/year"
      }
    }

    return { effort, timeline, cost }
  }

  const primaryEstimates = calculateEstimates(primaryRecommendation)

  const handleRecommendationSelect = (recommendationId: string) => {
    console.log("Selecting recommendation:", { questionId: Number(questionId), recommendationId })
    onSelectRecommendation(Number(questionId), recommendationId)
  }

  const [selectedTier, setSelectedTier] = useState<"open-source" | "enterprise" | "cloud">("open-source")

  // Calculate cost based on sub-question value
  const calculateCost = (recommendation: Recommendation) => {
    if (!subQuestionValue || subQuestionValue <= 0) {
      return recommendation.estimatedCostRange;
    }

    if (recommendation.calculateCost) {
      return recommendation.calculateCost(subQuestionValue);
    }

    // If no calculateCost function but we have a sub-question value, adjust the cost based on the value
    const baseCost = extractCostValue(recommendation.estimatedCostRange, "min");
    const adjustedCost = baseCost * subQuestionValue;
    return formatCurrency(adjustedCost) + "/year";
  };

  // Helper function to extract cost values
  function extractCostValue(costRange: string, type: "min" | "max"): number {
    try {
      const numericPart = costRange.split("/")[0].replace("₹", "").trim();
      if (numericPart.includes("–") || numericPart.includes("-")) {
        const separator = numericPart.includes("–") ? "–" : "-";
        const [min, max] = numericPart.split(separator).map((part) => Number.parseInt(part.replace(/,/g, "")));
        return type === "min" ? min : max;
      } else {
        return Number.parseInt(numericPart.replace(/,/g, ""));
      }
    } catch (e) {
      return 0;
    }
  }

  // Format currency
  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  }

  return (
    <div className="mt-6 space-y-4">
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
        <h3 className="font-medium text-amber-800">Enterprise Recommendations</h3>
        <p className="text-amber-700 text-sm mt-1">
          Based on your answer, here are enterprise-level solutions to help your organization become compliant:
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
        <h4 className="font-medium text-blue-800 mb-3">Select Your Preferred Solution</h4>
        <RadioGroup 
          value={selectedRecommendationId || recommendations[0]?.id} 
          onValueChange={handleRecommendationSelect} 
          className="space-y-3"
        >
          {recommendations.map((rec) => {
            const estimates = calculateEstimates(rec)
            return (
              <div
                key={rec.id}
                className={`flex items-start space-x-2 p-3 rounded-md border ${
                  selectedRecommendationId === rec.id ? "bg-blue-100 border-blue-300" : "bg-white border-slate-200"
                }`}
              >
                <RadioGroupItem value={rec.id} id={rec.id} className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor={rec.id} className="font-medium text-slate-800 cursor-pointer">
                    {rec.name} ({rec.tier === "standard" ? "Standard" : "Premium"})
                  </Label>
                  <p className="text-sm text-slate-600 mt-1">{rec.shortDescription}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                    <div className="flex items-center gap-1 text-sm text-slate-700">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>{estimates.effort} hours</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-700">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span>{estimates.timeline}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-700">
                      <DollarSign className="h-4 w-4 text-blue-500" />
                      <span>{estimates.cost}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </RadioGroup>
      </div>

      {selectedRecommendationId && (
        <>
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="details">Solution Details</TabsTrigger>
              <TabsTrigger value="implementation">Implementation Plan</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4">
              <RecommendationCard recommendation={primaryRecommendation} subQuestionValue={subQuestionValue} onSubQuestionChange={onSubQuestionChange} />
            </TabsContent>

            <TabsContent value="implementation" className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                <h4 className="font-medium text-blue-800 flex items-center gap-2 mb-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Implementation Timeline & Effort
                </h4>

                <div className="p-3 bg-white rounded-md border border-blue-100 mb-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-slate-800 font-medium">Fix Timeline</p>
                      <p className="text-slate-600 text-sm">
                        {`${questionCategory} – ${primaryEstimates.effort} hours setup time, complete ${primaryEstimates.timeline}.`}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-blue-800 font-medium text-sm">Required Resources</p>
                      <p className="text-blue-700 text-sm">{primaryRecommendation.requiredResources}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-blue-800 font-medium text-sm">Effort Required</p>
                      <p className="text-blue-700 text-sm">{primaryEstimates.effort} hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-blue-800 font-medium text-sm">Priority Level</p>
                      <p className="text-blue-700 text-sm">{primaryRecommendation.priority}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <DollarSign className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-blue-800 font-medium text-sm">Estimated Cost</p>
                      <p className="text-blue-700 text-sm">{primaryEstimates.cost}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => window.open(primaryRecommendation.pricingPage, "_blank")}
            >
              <DollarSign className="h-4 w-4" />
              View Pricing Details
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

function RecommendationCard({
  recommendation,
  subQuestionValue = 0,
  onSubQuestionChange,
}: {
  recommendation: Recommendation
  subQuestionValue?: number
  onSubQuestionChange: (value: number) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [inputError, setInputError] = useState<string>("")

  // Calculate estimates based on sub-question value
  const estimates = {
    effort:
      recommendation.calculateEffort && subQuestionValue > 0
        ? recommendation.calculateEffort(subQuestionValue)
        : recommendation.effortHours,

    timeline:
      recommendation.calculateTimeline && subQuestionValue > 0
        ? recommendation.calculateTimeline(subQuestionValue)
        : recommendation.recommendedTimeline,

    cost:
      recommendation.id === "custom-solution"
        ? "Internal Cost"
        : recommendation.calculateCost && subQuestionValue > 0
        ? recommendation.calculateCost(subQuestionValue)
        : recommendation.estimatedCostRange,
  }

  const handleCustomEffortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numValue = Number.parseInt(value)
    
    // Always update the input value
    if (value === "") {
      setInputError("Please enter a value")
    } else if (isNaN(numValue)) {
      setInputError("Please enter a valid number")
    } else if (numValue < 40) {
      setInputError("Value must be at least 40 hours")
    } else if (numValue > 2000) {
      setInputError("Value cannot exceed 2000 hours")
    } else {
      setInputError("")
      // Update the parent component's subQuestionValue through onSubQuestionChange
      onSubQuestionChange(numValue)
    }
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border rounded-md shadow-sm">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-2 rounded-full">
              {recommendation.icon && <recommendation.icon className="h-5 w-5 text-blue-600" />}
            </div>
            <div>
              <h4 className="font-medium text-slate-800">{recommendation.name}</h4>
              <p className="text-sm text-slate-500">{recommendation.shortDescription}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium text-slate-700">{estimates.cost}</p>
              <p className="text-xs text-slate-500">{recommendation.pricingModel}</p>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
            />
          </div>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="px-4 pb-4 space-y-4 border-t pt-4">
          <p className="text-slate-600">{recommendation.description}</p>

          {recommendation.id === "custom-solution" && (
            <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
              <h5 className="font-medium text-blue-800 mb-2">Customize Effort Hours</h5>
              <div className="space-y-2">
                <Label htmlFor="customEffortHours">Customize Effort Hours</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="customEffortHours"
                    type="number"
                    placeholder="Enter effort hours"
                    value={subQuestionValue || ""}
                    onChange={(e) => {
                      const value = e.target.value
                      const numValue = Number.parseInt(value)
                      if (value === "" || !isNaN(numValue)) {
                        onSubQuestionChange(numValue)
                      }
                    }}
                    className="max-w-xs"
                  />
                  <span>hours</span>
                </div>
                <p className="text-sm text-muted-foreground">Enter the estimated effort hours</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-slate-800 mb-2">Pros</h5>
              <ul className="space-y-1">
                {recommendation.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-slate-800 mb-2">Cons</h5>
              <ul className="space-y-1">
                {recommendation.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h5 className="font-medium text-slate-800 mb-2">Setup Time</h5>
              <p className="text-sm text-slate-600">{recommendation.setupTime}</p>
            </div>
            <div>
              <h5 className="font-medium text-slate-800 mb-2">Required Resources</h5>
              <p className="text-sm text-slate-600">{recommendation.requiredResources}</p>
            </div>
            <div>
              <h5 className="font-medium text-slate-800 mb-2">Organization Size</h5>
              <p className="text-sm text-slate-600">{recommendation.organizationSize}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            {recommendation.officialWebsite && (
              <Button variant="outline" asChild>
                <a href={recommendation.officialWebsite} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </a>
              </Button>
            )}
            {recommendation.pricingPage && (
              <Button variant="outline" asChild>
                <a href={recommendation.pricingPage} target="_blank" rel="noopener noreferrer">
                  <DollarSign className="h-4 w-4 mr-2" />
                  View Pricing
                </a>
              </Button>
            )}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default RecommendationPanel

