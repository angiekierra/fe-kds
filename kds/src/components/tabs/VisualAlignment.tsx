import { Badge } from "@/components/ui/badge"
import type { MotifMatch } from "@/types/types"

interface VisualAlignmentProps {
  seq1Motifs: MotifMatch[]
  seq2Motifs: MotifMatch[]
  sharedMotifs: string[]
  sequence1: string
  sequence2: string
  tssPosition: number
}

export default function VisualAlignment({
  seq1Motifs,
  seq2Motifs,
  sharedMotifs,
  sequence1,
  sequence2,
  tssPosition,
}: VisualAlignmentProps) {
  const maxLength = Math.max(sequence1.length, sequence2.length)
  const scale = 800 / maxLength

  return (
    <div className="space-y-4">
      <div className="relative">
        <svg width="100%" height="300" className="border rounded">
          {/* Sequence 1 Track */}
          <g transform="translate(50, 50)">
            <text x="0" y="-10" className="text-sm font-medium fill-gray-700 mb-2">
              Sequence 1
            </text>
            <line x1={0} y1={0} x2={maxLength * scale} y2={0} stroke="#e5e7eb" strokeWidth={2} />

            {seq1Motifs.map((motif, i) => (
              <g key={`seq1-${i}`}>
                <rect
                  x={motif.start * scale}
                  y={-15}
                  width={(motif.end - motif.start + 1) * scale}
                  height={30}
                  fill={sharedMotifs.includes(motif.name) ? "#3b82f6" : "#6b7280"}
                  rx={4}
                  opacity={0.8}
                />
                <text
                  x={motif.start * scale + ((motif.end - motif.start + 1) * scale) / 2}
                  y={5}
                  textAnchor="middle"
                  className="text-xs fill-white font-medium"
                >
                  {motif.name}
                </text>
              </g>
            ))}
          </g>

          {/* Sequence 2 Track */}
          <g transform="translate(50, 200)">
            <text x="0" y="-10" className="text-sm font-medium fill-gray-700 mb-2">
              Sequence 2
            </text>
            <line x1={0} y1={0} x2={maxLength * scale} y2={0} stroke="#e5e7eb" strokeWidth={2} />

            {seq2Motifs.map((motif, i) => (
              <g key={`seq2-${i}`}>
                <rect
                  x={motif.start * scale}
                  y={-15}
                  width={(motif.end - motif.start + 1) * scale}
                  height={30}
                  fill={sharedMotifs.includes(motif.name) ? "#3b82f6" : "#6b7280"}
                  rx={4}
                  opacity={0.8}
                />
                <text
                  x={motif.start * scale + ((motif.end - motif.start + 1) * scale) / 2}
                  y={5}
                  textAnchor="middle"
                  className="text-xs fill-white font-medium"
                >
                  {motif.name}
                </text>
              </g>
            ))}
          </g>

          {/* TSS Marker */}
          <line
            x1={tssPosition * scale + 50}
            x2={tssPosition * scale + 50}
            y1={35}
            y2={265}
            stroke="red"
            strokeDasharray="4"
            strokeWidth={1}
          />
          <text
            x={tssPosition * scale + 50}
            y={25}
            textAnchor="middle"
            fontSize={10}
            fill="red"
          >
            TSS
          </text>

          {/* Connection lines */}
          {seq1Motifs.map((motif1, i) => {
            const match = seq2Motifs.find((m2) => m2.name === motif1.name)
            if (!match) return null

            const x1 = 50 + motif1.start * scale + ((motif1.end - motif1.start + 1) * scale) / 2
            const x2 = 50 + match.start * scale + ((match.end - match.start + 1) * scale) / 2
            const y1 = 65
            const y2 = 185

            return (
              <path
                key={`link-${i}`}
                d={`M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2 - 30} ${x2} ${y2}`}
                stroke="#3b82f6"
                strokeWidth={2}
                fill="none"
                opacity={0.6}
                strokeDasharray="5,5"
              />
            )
          })}
        </svg>
      </div>

      {/* Motif Lists */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <h4 className="font-medium mb-2">Sequence 1 Motifs ({seq1Motifs.length})</h4>
          <div className="space-y-1">
            {seq1Motifs.map((motif, i) => (
              <div key={i} className="flex items-center gap-2">
                <Badge variant={sharedMotifs.includes(motif.name) ? "default" : "secondary"}>{motif.name}</Badge>
                <span className="text-xs text-gray-500">
                  {motif.start}-{motif.end} ({motif.family})
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-">Sequence 2 Motifs ({seq2Motifs.length})</h4>
          <div className="space-y-1">
            {seq2Motifs.map((motif, i) => (
              <div key={i} className="flex items-center gap-2">
                <Badge variant={sharedMotifs.includes(motif.name) ? "default" : "secondary"}>{motif.name}</Badge>
                <span className="text-xs text-gray-500">
                  {motif.start}-{motif.end} ({motif.family})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
