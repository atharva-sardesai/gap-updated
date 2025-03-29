"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ChevronDown,
  FileText,
  ShieldAlert,
  ExternalLink,
  DollarSign,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle2,
  FileSpreadsheet,
} from "lucide-react"
import type { Answer } from "@/components/compliance-assessment"
import type { Question } from "@/lib/questions-data.new"
import { ComplianceChart } from "@/components/compliance-chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import * as XLSX from 'xlsx'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

interface ResultsScreenProps {
  answers: Answer[]
  questions: Question[]
  onRestart: () => void
}

interface TimelineItem {
  category: string
  task: string
  effort: string
  timeline: string
  priority: string
  cost: string
}

interface CategorySummary {
  category: string
  totalEffortHours: [number, number] // min and max
  totalCost: [number, number] // min and max
  items: number
}

// Helper function to extract cost values
function extractCostValue(costRange: string, type: "min" | "max"): number {
  // Handle different formats like "₹500-1,000/year" or "₹2,500/year"
  try {
    // Remove currency symbol and any text after the numbers
    const numericPart = costRange.split("/")[0].replace("₹", "").trim()

    if (numericPart.includes("–") || numericPart.includes("-")) {
      const separator = numericPart.includes("–") ? "–" : "-"
      const [min, max] = numericPart.split(separator).map((part) => Number.parseInt(part.replace(/,/g, "")))
      return type === "min" ? min : max
    } else {
      const value = Number.parseInt(numericPart.replace(/,/g, ""))
      return value
    }
  } catch (e) {
    return 0
  }
}

// Format currency
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)
}

// Calculate estimates based on sub-question value and selected recommendation
function calculateEstimates(question: Question, answer: Answer) {
  // Find the selected recommendation
  const recommendation =
    question.recommendations.find((r) => r.id === answer.selectedRecommendationId) || question.recommendations[0]

  // Make sure subQuestionValue is a valid number
  const validSubQuestionValue =
    answer.subQuestionValue !== undefined && !isNaN(answer.subQuestionValue) ? answer.subQuestionValue : 0

  // Calculate effort
  const effort = recommendation.calculateEffort
    ? recommendation.calculateEffort(validSubQuestionValue)
    : recommendation.effortHours

  // Calculate timeline
  const timeline = recommendation.calculateTimeline
    ? recommendation.calculateTimeline(validSubQuestionValue)
    : recommendation.recommendedTimeline

  // Calculate cost based on sub-question value and recommendation
  let cost = recommendation.estimatedCostRange
  if (recommendation.calculateCost && validSubQuestionValue > 0) {
    cost = recommendation.calculateCost(validSubQuestionValue)
  } else if (validSubQuestionValue > 0) {
    // If no calculateCost function but we have a sub-question value, adjust the cost based on the value
    const baseCost = extractCostValue(recommendation.estimatedCostRange, "min")
    const adjustedCost = baseCost * validSubQuestionValue
    cost = formatCurrency(adjustedCost) + "/year"
  }

  return {
    effort,
    timeline,
    cost,
    recommendation,
  }
}

export function ResultsScreen({ answers, questions, onRestart }: ResultsScreenProps) {
  const compliantCount = answers.filter((answer) => answer.compliant).length
  const compliancePercentage = Math.round((compliantCount / questions.length) * 100)

  // Get non-compliant questions with their answers
  const nonCompliantQuestions = questions
    .map((question, index) => ({
      question,
      answer: answers[index],
    }))
    .filter((item) => !item.answer?.compliant)

  // Group non-compliant areas by category
  const nonCompliantByCategory = nonCompliantQuestions.reduce(
    (acc, item) => {
      const category = item.question.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(item)
      return acc
    },
    {} as Record<string, typeof nonCompliantQuestions>,
  )

  // Generate timeline items
  const timelineItems: TimelineItem[] = nonCompliantQuestions
    .map((item) => {
      const estimates = calculateEstimates(item.question, item.answer)

      return {
        category: item.question.category,
        task: `Deploy ${estimates.recommendation.name}`,
        effort: estimates.effort,
        timeline: estimates.timeline,
        priority: estimates.recommendation.priority,
        cost: estimates.cost,
      }
    })
    .sort((a, b) => {
      // Sort by priority: High, Medium, Low
      const priorityOrder = { High: 0, Medium: 1, Low: 2 }
      return (
        priorityOrder[a.priority as keyof typeof priorityOrder] -
        priorityOrder[b.priority as keyof typeof priorityOrder]
      )
    })

  // Calculate category summaries
  const categorySummaries: CategorySummary[] = Object.entries(nonCompliantByCategory).map(([category, items]) => {
    // Calculate total effort hours
    const totalEffortMin = items.reduce((sum, item) => {
      const estimates = calculateEstimates(item.question, item.answer)
      const hours = estimates.effort.split("–")[0]
      return sum + Number.parseInt(hours)
    }, 0)

    const totalEffortMax = items.reduce((sum, item) => {
      const estimates = calculateEstimates(item.question, item.answer)
      const hours = estimates.effort.split("–")[1] || estimates.effort.split("–")[0]
      return sum + Number.parseInt(hours)
    }, 0)

    // Calculate total cost
    const totalCostMin = items.reduce((sum, item) => {
      const estimates = calculateEstimates(item.question, item.answer)
      const cost = extractCostValue(estimates.cost, "min")
      return sum + cost
    }, 0)

    const totalCostMax = items.reduce((sum, item) => {
      const estimates = calculateEstimates(item.question, item.answer)
      const cost = extractCostValue(estimates.cost, "max")
      return sum + cost
    }, 0)

    return {
      category,
      totalEffortHours: [totalEffortMin, totalEffortMax],
      totalCost: [totalCostMin, totalCostMax],
      items: items.length,
    }
  })

  // Calculate grand totals
  const grandTotalEffort: [number, number] = categorySummaries.reduce(
    (acc, summary) => [acc[0] + summary.totalEffortHours[0], acc[1] + summary.totalEffortHours[1]],
    [0, 0],
  )

  const grandTotalCost: [number, number] = categorySummaries.reduce(
    (acc, summary) => [acc[0] + summary.totalCost[0], acc[1] + summary.totalCost[1]],
    [0, 0],
  )

  // Calculate days to complete all high priority items
  const highPriorityDays = Math.max(
    ...timelineItems
      .filter((item) => item.priority === "High")
      .map((item) => {
        const days = item.timeline.match(/Within (\d+) days?/)
        return days ? Number.parseInt(days[1]) : 30
      }),
  )

  // Calculate days to complete all items
  const allItemsDays = Math.max(
    ...timelineItems.map((item) => {
      const days = item.timeline.match(/Within (\d+) days?/)
      return days ? Number.parseInt(days[1]) : 30
    }),
  )

  const exportToExcel = () => {
    // Prepare data for compliant controls
    const compliantData = questions
      .map((question, index) => ({
        question,
        answer: answers[index],
      }))
      .filter((item) => item.answer?.compliant)
      .map((item) => ({
        'Control Category': item.question.category,
        'Control': item.question.text,
        'Status': 'Compliant'
      }));

    // Prepare data for non-compliant controls
    const nonCompliantData = nonCompliantQuestions.map((item) => {
      const estimates = calculateEstimates(item.question, item.answer);
      const subQuestionInfo = item.question.subQuestion && item.answer.subQuestionValue
        ? `${item.question.subQuestion.text}: ${item.answer.subQuestionValue} ${item.question.subQuestion.unit}`
        : '';
      
      return {
        'Control Category': item.question.category,
        'Control': item.question.text,
        'Sub-Question Details': subQuestionInfo,
        'Selected Solution': estimates.recommendation.name,
        'Implementation Time': estimates.timeline,
        'Effort (Hours)': estimates.effort,
        'Estimated Cost': estimates.cost
      };
    });

    // Create workbook and add worksheets
    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.json_to_sheet(compliantData);
    const ws2 = XLSX.utils.json_to_sheet(nonCompliantData);
    
    XLSX.utils.book_append_sheet(wb, ws1, "Compliant Controls");
    XLSX.utils.book_append_sheet(wb, ws2, "Non-Compliant Controls");
    
    // Save the file
    XLSX.writeFile(wb, "compliance-assessment-report.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(16);
    doc.text("ISO 27001 Compliance Assessment Report", 15, 20);
    
    // Add summary section
    doc.setFontSize(12);
    doc.text("Summary", 15, 35);
    doc.setFontSize(10);
    doc.text(`Overall Compliance: ${compliancePercentage}%`, 15, 45);
    doc.text(`Compliant Controls: ${compliantCount}`, 15, 52);
    doc.text(`Non-Compliant Controls: ${questions.length - compliantCount}`, 15, 59);
    
    // Add compliant controls section
    doc.setFontSize(12);
    doc.text("Compliant Controls", 15, 75);
    
    const compliantData = questions
      .map((question, index) => ({
        question,
        answer: answers[index],
      }))
      .filter((item) => item.answer?.compliant)
      .map((item) => [
        item.question.category,
        item.question.text
      ]);

    autoTable(doc, {
      startY: 80,
      head: [['Category', 'Control']],
      body: compliantData,
      theme: 'striped',
      headStyles: { fillColor: [59, 130, 246] },
      styles: { fontSize: 8, cellPadding: 2 },
      columnStyles: {
        0: { cellWidth: 40 },
        1: { cellWidth: 140 }
      }
    });

    // Add non-compliant controls section
    const finalY = (doc as any).lastAutoTable.finalY || 80;
    doc.setFontSize(12);
    doc.text("Non-Compliant Controls and Recommendations", 15, finalY + 15);

    const nonCompliantData = nonCompliantQuestions.map((item) => {
      const estimates = calculateEstimates(item.question, item.answer);
      const subQuestionInfo = item.question.subQuestion && item.answer.subQuestionValue
        ? `${item.question.subQuestion.text}: ${item.answer.subQuestionValue} ${item.question.subQuestion.unit}`
        : '';
      
      return [
        item.question.category,
        item.question.text,
        subQuestionInfo,
        estimates.recommendation.name,
        estimates.timeline,
        estimates.cost
      ];
    });

    autoTable(doc, {
      startY: finalY + 20,
      head: [['Category', 'Control', 'Sub-Question Details', 'Recommended Solution', 'Timeline', 'Cost']],
      body: nonCompliantData,
      theme: 'striped',
      headStyles: { fillColor: [59, 130, 246] },
      styles: { fontSize: 8, cellPadding: 2 },
      columnStyles: {
        0: { cellWidth: 25 },
        1: { cellWidth: 50 },
        2: { cellWidth: 40 },
        3: { cellWidth: 35 },
        4: { cellWidth: 25 },
        5: { cellWidth: 25 }
      }
    });

    // Add implementation summary
    const finalY2 = (doc as any).lastAutoTable.finalY || finalY + 20;
    doc.setFontSize(12);
    doc.text("Implementation Summary", 15, finalY2 + 15);
    doc.setFontSize(10);
    doc.text(`Total Implementation Time: ${allItemsDays} days`, 15, finalY2 + 25);
    doc.text(`High Priority Items: ${highPriorityDays} days`, 15, finalY2 + 32);
    doc.text(`Total Effort: ${grandTotalEffort[0]}-${grandTotalEffort[1]} hours`, 15, finalY2 + 39);
    doc.text(`Estimated Cost Range: ${formatCurrency(grandTotalCost[0])} - ${formatCurrency(grandTotalCost[1])}/year`, 15, finalY2 + 46);

    // Save the PDF
    doc.save("iso-27001-compliance-report.pdf");
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-t-4 border-t-blue-600">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Security Assessment Results</CardTitle>
          <CardDescription className="text-center text-lg">
            Your organization is {compliancePercentage}% compliant with security best practices
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-64 h-64">
              <ComplianceChart
                compliantPercentage={compliancePercentage}
                nonCompliantPercentage={100 - compliancePercentage}
              />
            </div>

            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-slate-50 p-4 rounded-lg border">
                  <div className="text-3xl font-bold text-slate-800">{questions.length}</div>
                  <div className="text-sm text-slate-600">Total Requirements</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="text-3xl font-bold text-green-600">{compliantCount}</div>
                  <div className="text-sm text-green-700">Compliant Areas</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <div className="text-3xl font-bold text-amber-600">{questions.length - compliantCount}</div>
                  <div className="text-sm text-amber-700">Non-Compliant Areas</div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <h3 className="font-medium text-blue-800 mb-2">Security Assessment Summary</h3>
                <p className="text-blue-700 text-sm">
                  Your organization has demonstrated compliance in {compliantCount} out of {questions.length} key
                  security areas.
                  {compliancePercentage >= 80
                    ? " Your security posture is strong, but there are still some areas that need attention."
                    : compliancePercentage >= 50
                      ? " You have a moderate security foundation, but significant improvements are needed."
                      : " Your organization requires substantial security improvements to meet best practices."}
                </p>
              </div>
            </div>
          </div>

          {/* Implementation Summary Section */}
          {nonCompliantQuestions.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-800">Implementation Summary</h3>
                <div className="flex gap-2">
                  <Button
                    onClick={exportToExcel}
                    className="flex items-center gap-2"
                    variant="outline"
                  >
                    <FileSpreadsheet className="h-4 w-4" />
                    Export to Excel
                  </Button>
                  <Button
                    onClick={exportToPDF}
                    className="flex items-center gap-2"
                    variant="outline"
                  >
                    <FileText className="h-4 w-4" />
                    Export to PDF
                  </Button>
                </div>
              </div>

              {/* Consolidated Timeline */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    Consolidated Timeline
                  </CardTitle>
                  <CardDescription>Estimated timeline for implementing all recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                      <div className="text-2xl font-bold text-amber-600">{highPriorityDays} days</div>
                      <div className="text-sm text-amber-700">High Priority Items</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <div className="text-2xl font-bold text-blue-600">{allItemsDays} days</div>
                      <div className="text-sm text-blue-700">All Items</div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4">
                    This timeline assumes sequential implementation of all recommendations. Some items can be
                    implemented in parallel to reduce the overall timeline.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-lg border">
                    <h4 className="font-medium text-slate-800 mb-2">Recommended Implementation Approach</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-slate-600">
                      <li>Begin with high priority items first (estimated {highPriorityDays} days)</li>
                      <li>Implement medium priority items next</li>
                      <li>Complete low priority items last</li>
                      <li>Consider implementing multiple items in parallel where resources allow</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              {/* Effort and Cost Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-500" />
                      Total Effort Required
                    </CardTitle>
                    <CardDescription>Estimated hours needed to implement all recommendations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-slate-800 mb-4">
                      {grandTotalEffort[0] === grandTotalEffort[1]
                        ? `${grandTotalEffort[0]} hours`
                        : `${grandTotalEffort[0]}–${grandTotalEffort[1]} hours`}
                    </div>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Category</TableHead>
                          <TableHead>Effort (hours)</TableHead>
                          <TableHead>Items</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {categorySummaries.map((summary, index) => (
                          <TableRow key={index}>
                            <TableCell>{summary.category}</TableCell>
                            <TableCell>
                              {summary.totalEffortHours[0] === summary.totalEffortHours[1]
                                ? summary.totalEffortHours[0]
                                : `${summary.totalEffortHours[0]}–${summary.totalEffortHours[1]}`}
                            </TableCell>
                            <TableCell>{summary.items}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-blue-500" />
                      Total Cost Estimation
                    </CardTitle>
                    <CardDescription>Estimated annual cost for all recommended solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-slate-800 mb-4">
                      {formatCurrency(grandTotalCost[0])} – {formatCurrency(grandTotalCost[1])}/year
                    </div>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Category</TableHead>
                          <TableHead>Cost Range (annual)</TableHead>
                          <TableHead>Items</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {categorySummaries.map((summary, index) => (
                          <TableRow key={index}>
                            <TableCell>{summary.category}</TableCell>
                            <TableCell>
                              {formatCurrency(summary.totalCost[0])} – {formatCurrency(summary.totalCost[1])}
                            </TableCell>
                            <TableCell>{summary.items}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              {/* Implementation Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    Comprehensive Fix Timeline
                  </CardTitle>
                  <CardDescription>Prioritized implementation schedule for all non-compliant areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Priority</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Task</TableHead>
                        <TableHead>Effort</TableHead>
                        <TableHead>Timeline</TableHead>
                        <TableHead>Est. Cost</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {timelineItems.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <div
                              className={`flex items-center gap-1 ${
                                item.priority === "High"
                                  ? "text-red-600"
                                  : item.priority === "Medium"
                                    ? "text-amber-600"
                                    : "text-blue-600"
                              }`}
                            >
                              <AlertTriangle
                                className={`h-4 w-4 ${
                                  item.priority === "High"
                                    ? "text-red-500"
                                    : item.priority === "Medium"
                                      ? "text-amber-500"
                                      : "text-blue-500"
                                }`}
                              />
                              {item.priority}
                            </div>
                          </TableCell>
                          <TableCell>{item.category}</TableCell>
                          <TableCell>{item.task}</TableCell>
                          <TableCell>{item.effort} hours</TableCell>
                          <TableCell>{item.timeline}</TableCell>
                          <TableCell>{item.cost}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Action Plan */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800">Detailed Action Plan</h3>
                <p className="text-slate-600">
                  Address these non-compliant areas to improve your organization's security posture:
                </p>

                <div className="space-y-3">
                  {Object.entries(nonCompliantByCategory).map(([category, items]) => (
                    <NonCompliantCategory key={category} category={category} items={items} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onRestart}>
            Restart Assessment
          </Button>
          <div className="flex gap-2">
            <Button
              onClick={exportToExcel}
              className="flex items-center gap-2"
              variant="outline"
            >
              <FileSpreadsheet className="h-4 w-4" />
              Export to Excel
            </Button>
            <Button
              onClick={exportToPDF}
              className="flex items-center gap-2"
              variant="outline"
            >
              <FileText className="h-4 w-4" />
              Export to PDF
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

function NonCompliantCategory({
  category,
  items,
}: {
  category: string
  items: Array<{ question: Question; answer: Answer }>
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border rounded-md shadow-sm">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
        <div className="flex items-center gap-3">
          <div className="bg-amber-100 p-2 rounded-full">
            <ShieldAlert className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <h4 className="font-medium text-slate-800">{category}</h4>
            <p className="text-sm text-slate-600">{items.length} non-compliant items</p>
          </div>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
        />
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="px-4 pb-4 pt-1 space-y-4">
          {items.map((item, index) => {
            const estimates = calculateEstimates(item.question, item.answer)

            return (
              <div key={index} className="border-t pt-4">
                <h5 className="font-medium text-slate-700 mb-2">{item.question.text}</h5>

                {item.question.subQuestion && item.answer.subQuestionValue && (
                  <div className="bg-blue-50 p-3 rounded-md border border-blue-100 mb-3">
                    <p className="text-sm text-blue-800">
                      <span className="font-medium">{item.question.subQuestion.text}</span>{" "}
                      <span className="text-blue-600">
                        {item.answer.subQuestionValue} {item.question.subQuestion.unit}
                      </span>
                    </p>
                  </div>
                )}

                <div className="bg-slate-50 p-3 rounded-md border mb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <h6 className="font-medium text-slate-800">Selected Solution: {estimates.recommendation.name}</h6>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{estimates.cost}</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{estimates.recommendation.shortDescription}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs"
                      onClick={() => window.open(estimates.recommendation.officialWebsite, "_blank")}
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Visit Website
                    </Button>
                    <Button
                      size="sm"
                      className="text-xs"
                      onClick={() => window.open(estimates.recommendation.pricingPage, "_blank")}
                    >
                      <DollarSign className="mr-1 h-3 w-3" />
                      See Pricing
                    </Button>
                  </div>

                  <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Effort: {estimates.effort} hours
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Timeline: {estimates.timeline}
                    </div>
                    <div className="flex items-center gap-1">
                      <AlertTriangle className="h-3 w-3" />
                      Priority: {estimates.recommendation.priority}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

