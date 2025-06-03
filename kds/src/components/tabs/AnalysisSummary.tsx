// File: components/tabs/AnalysisSummary.tsx
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dna, Brain, Target, AlertCircle } from "lucide-react"
import { type AnalysisResult } from "@/utils/motifUtils"

interface AnalysisSummaryProps {
  analysis: AnalysisResult
}

export default function AnalysisSummary({ analysis }: AnalysisSummaryProps) {
  const totalMotifs = analysis.sequence1_motifs.length + analysis.sequence2_motifs.length
  const sharedCount = analysis.shared_motifs.length
  const familyMatchCount = Object.keys(analysis.family_matches).length

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SummaryCard label="Total Motifs" value={totalMotifs} color="blue" />
        <SummaryCard label="Shared Motifs" value={sharedCount} color="green" />
        <SummaryCard label="Family Matches" value={familyMatchCount} color="purple" />
        <SummaryCard
          label="Compatibility"
          value={(analysis.overall_compatibility * 100).toFixed(0) + "%"}
          color="orange"
        />
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Regulatory Insights & Hypotheses</h4>

        {sharedCount > 0 && (
          <Alert className="border-gray-300">
            <Dna className="h-4 w-4" />
            <AlertDescription>
              <strong>Conserved Architecture:</strong> {sharedCount} shared motifs suggest these sequences may regulate
              similar genes or pathways. Shared motifs: {analysis.shared_motifs.join(", ")}.
            </AlertDescription>
          </Alert>
        )}

        {familyMatchCount > 0 && (
          <Alert className="border-gray-300">
            <Brain className="h-4 w-4" />
            <AlertDescription>
              <strong>Functional Redundancy:</strong> {familyMatchCount} TF family matches indicate potential regulatory
              backup mechanisms.
            </AlertDescription>
          </Alert>
        )}

        {analysis.overall_compatibility >= 0.8 && (
          <Alert>
            <Target className="h-4 w-4" />
            <AlertDescription>
              <strong>High Regulatory Potential:</strong> Excellent positional compatibility suggests both sequences are
              likely functional.
            </AlertDescription>
          </Alert>
        )}

        {analysis.overall_compatibility < 0.5 && (
          <Alert className="border-pink-600 bg-pink-50 text-pink-600">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Positional Concerns:</strong> Motifs may be too far from canonical positions to be fully
              functional.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  )
}

function SummaryCard({
  label,
  value,
  color,
}: {
  label: string
  value: number | string
  color: "blue" | "green" | "purple" | "orange"
}) {
  const bg = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-teal-50 text-teal-600",
    purple: "bg-violet-50 text-violet-600",
    orange: "bg-amber-50 text-amber-600",
  }[color]

  return (
    <div className={`text-center p-4 rounded-lg ${bg}`}>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  )
}
