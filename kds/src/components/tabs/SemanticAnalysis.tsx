import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Brain } from "lucide-react"
import type { MotifMatch } from "@/types/types"

interface SemanticAnalysisProps {
  familyMatches: Record<string, string[]>
  seq1Motifs: MotifMatch[]
  seq2Motifs: MotifMatch[]
}

export default function SemanticAnalysis({
  familyMatches,
  seq1Motifs,
  seq2Motifs,
}: SemanticAnalysisProps) {
  const allFamilies = [...new Set([...seq1Motifs.map((m) => m.family), ...seq2Motifs.map((m) => m.family)])]

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium mb-3">Transcription Factor Family Distribution</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allFamilies.map((family) => {
            const seq1Count = seq1Motifs.filter((m) => m.family === family).length
            const seq2Count = seq2Motifs.filter((m) => m.family === family).length
            return (
              <div key={family} className="p-3 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{family}</span>
                  <Badge variant="outline">{seq1Count + seq2Count} total</Badge>
                </div>
                <div className="flex gap-2 text-sm text-gray-600">
                  <span>Seq1: {seq1Count}</span>
                  <span>Seq2: {seq2Count}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {Object.keys(familyMatches).length > 0 && (
        <div>
          <h4 className="font-medium mb-3">Functional Redundancy Detection</h4>
          <Alert>
            <Brain className="h-4 w-4" />
            <AlertDescription>
              These sequences contain different motifs from the same TF families, suggesting potential functional
              conservation through redundancy.
            </AlertDescription>
          </Alert>
          <div className="mt-3 space-y-2">
            {Object.entries(familyMatches).map(([family, matches]) => (
              <div key={family} className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium text-blue-900">{family} Family</div>
                <div className="text-sm text-blue-700 mt-1">Cross-sequence matches: {matches.join(", ")}</div>
                <div className="text-xs text-blue-600 mt-1">
                  → Likely conserved regulatory function despite sequence differences
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium mb-2">Biological Insights</h4>
        <ul className="text-sm space-y-1 text-gray-700">
          <li>• TFs from the same family often have similar DNA-binding preferences</li>
          <li>• Functional redundancy can provide regulatory robustness</li>
          <li>• Cross-species conservation often occurs at the family level</li>
          <li>• Disease mutations may be compensated by family members</li>
        </ul>
      </div>
    </div>
  )
}
