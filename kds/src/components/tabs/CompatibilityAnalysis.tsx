import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import type { MotifMatch } from "@/types/types"

interface CompatibilityAnalysisProps {
  seq1Motifs: MotifMatch[]
  seq2Motifs: MotifMatch[]
  overallScore: number
  tssPosition: number
}

export default function CompatibilityAnalysis({
  seq1Motifs,
  seq2Motifs,
  overallScore,
  tssPosition,
}: CompatibilityAnalysisProps) {
  const allMotifs = [...seq1Motifs, ...seq2Motifs]

  const getScoreColor = (score: number): string => {
    if (score >= 0.8) return "text-green-600"
    if (score >= 0.6) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreLabel = (score: number): string => {
    if (score >= 0.8) return "High"
    if (score >= 0.6) return "Medium"
    return "Low"
  }

  return (
    <div className="space-y-6">
      <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <div className="text-3xl font-bold mb-2 text-gray-900">{(overallScore * 100).toFixed(1)}%</div>
        <div className="text-lg text-gray-600 mb-3">Overall Regulatory Compatibility</div>
        <Progress value={overallScore * 100} className="w-64 mx-auto" />
        <div className={`mt-2 font-medium ${getScoreColor(overallScore)}`}>
          {getScoreLabel(overallScore)} Compatibility
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-3">Positional Compatibility Analysis</h4>
        <div className="space-y-3">
          {allMotifs.map((motif, i) => {
            const relativePos = motif.start - tssPosition
            const distance = Math.abs(relativePos - motif.canonical_position)
            return (
              <div key={i} className="p-3 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="font-medium">{motif.name}</span>
                    <Badge variant="outline" className="ml-2">{motif.family}</Badge>
                  </div>
                  <div className={`font-medium ${getScoreColor(motif.compatibility_score)}`}>
                    {(motif.compatibility_score * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <div>
                      Actual position: {relativePos > 0 ? "+" : ""}
                      {relativePos} bp from TSS
                    </div>
                    <div>Canonical position: {motif.canonical_position} bp from TSS</div>
                  </div>
                  <div>
                    <div>Distance offset: {distance} bp</div>
                    <div className={
                      motif.compatibility_score >= 0.8 ? "text-green-600" :
                      motif.compatibility_score >= 0.6 ? "text-yellow-600" : "text-red-600"
                    }>
                      {motif.compatibility_score >= 0.8 ? "Optimal position" :
                        motif.compatibility_score >= 0.6 ? "Acceptable position" : "Suboptimal position"}
                    </div>
                  </div>
                </div>
                <Progress value={motif.compatibility_score * 100} className="mt-2" />
              </div>
            )
          })}
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium mb-2">Scoring Methodology</h4>
        <ul className="text-sm space-y-1 text-gray-700">
          <li>• <strong>Position-aware scoring:</strong> Motifs closer to canonical positions score higher</li>
          <li>• <strong>Distance penalty:</strong> Score decreases with distance from optimal location</li>
          <li>• <strong>Functional relevance:</strong> Only biologically relevant positions contribute to regulation</li>
          <li>• <strong>TSS reference:</strong> All positions calculated relative to transcription start site</li>
        </ul>
      </div>
    </div>
  )
}
