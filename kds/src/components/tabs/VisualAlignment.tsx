import { Badge } from "@/components/ui/badge";
import type { MotifMatch } from "@/types/types";

interface VisualAlignmentProps {
  seq1Motifs: MotifMatch[];
  seq2Motifs: MotifMatch[];
  sharedMotifs: string[];
  sequence1: string;
  sequence2: string;
  tssPosition: number;
}

export default function VisualAlignment({
  seq1Motifs,
  seq2Motifs,
  sharedMotifs,
  sequence1,
  sequence2,
  tssPosition,
}: VisualAlignmentProps) {
  const maxLength = Math.max(sequence1.length, sequence2.length);

  const baseDisplayWidth = 1500;

  const minBpPx = 5; // Each base pair is at least 5 pixels wide
  const calculatedScale = Math.max(minBpPx, baseDisplayWidth / maxLength);

  const svgWidth = maxLength * calculatedScale + 100; // 100px padding for labels/end

  return (
    <div className="space-y-4">
      {/* Wrapper div for horizontal scrolling */}
      <div className="overflow-x-auto border rounded bg-white p-4">
        <svg width={svgWidth} height="300">
          <g transform="translate(50, 50)">
            <text x="0" y="-20" className="text-sm font-medium fill-gray-700">
              Sequence 1
            </text>
            <line
              x1={0}
              y1={0}
              x2={maxLength * calculatedScale}
              y2={0}
              stroke="#e5e7eb"
              strokeWidth={2}
            />

            {seq1Motifs.map((motif, i) => (
              <g key={`seq1-${i}`}>
                <rect
                  x={motif.start * calculatedScale}
                  y={-15}
                  width={(motif.end - motif.start + 1) * calculatedScale}
                  height={30}
                  fill={
                    sharedMotifs.includes(motif.name) ? "#3b82f6" : "#6b7280"
                  }
                  rx={4}
                  opacity={0.8}
                />
                <text
                  x={
                    motif.start * calculatedScale +
                    ((motif.end - motif.start + 1) * calculatedScale) / 2
                  }
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
            <text x="0" y="30" className="text-sm font-medium fill-gray-700">
              Sequence 2
            </text>
            <line
              x1={0}
              y1={0}
              x2={maxLength * calculatedScale}
              y2={0}
              stroke="#e5e7eb"
              strokeWidth={2}
            />

            {seq2Motifs.map((motif, i) => (
              <g key={`seq2-${i}`}>
                <rect
                  x={motif.start * calculatedScale}
                  y={-15}
                  width={(motif.end - motif.start + 1) * calculatedScale}
                  height={30}
                  fill={
                    sharedMotifs.includes(motif.name) ? "#3b82f6" : "#6b7280"
                  }
                  rx={4}
                  opacity={0.8}
                />
                <text
                  x={
                    motif.start * calculatedScale +
                    ((motif.end - motif.start + 1) * calculatedScale) / 2
                  }
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
          {/* TSS position needs to be scaled and offset by the G group's transform */}
          <line
            x1={tssPosition * calculatedScale + 50}
            x2={tssPosition * calculatedScale + 50}
            y1={35} /* Adjusted y1 to be slightly above Sequence 1 track */
            y2={265} /* Adjusted y2 to be slightly below Sequence 2 track */
            stroke="red"
            strokeDasharray="4"
            strokeWidth={1}
          />
          <text
            x={tssPosition * calculatedScale + 50}
            y={25} /* Adjusted y to be above the TSS line */
            textAnchor="middle"
            fontSize={10}
            fill="red"
          >
            TSS
          </text>

          {/* Connection lines */}
          {seq1Motifs.map((motif1, i) => {
            const match = seq2Motifs.find((m2) => m2.name === motif1.name);
            if (!match) return null;

            const x1 =
              50 +
              motif1.start * calculatedScale +
              ((motif1.end - motif1.start + 1) * calculatedScale) / 2;
            const x2 =
              50 +
              match.start * calculatedScale +
              ((match.end - match.start + 1) * calculatedScale) / 2;
            const y1 = 65; // Y position for the bottom of Sequence 1 track
            const y2 = 185; // Y position for the top of Sequence 2 track

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
            );
          })}
        </svg>
      </div>

      {/* Motif Lists (below the scrollable SVG) */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <h4 className="font-medium mb-2">
            Sequence 1 Motifs ({seq1Motifs.length})
          </h4>
          <div className="space-y-1">
            {seq1Motifs.map((motif, i) => (
              <div key={i} className="flex items-center gap-2">
                <Badge
                  variant={
                    sharedMotifs.includes(motif.name) ? "default" : "secondary"
                  }
                >
                  {motif.name}
                </Badge>
                <span className="text-xs text-gray-500">
                  {motif.start}-{motif.end} ({motif.family})
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-2">
            Sequence 2 Motifs ({seq2Motifs.length})
          </h4>
          <div className="space-y-1">
            {seq2Motifs.map((motif, i) => (
              <div key={i} className="flex items-center gap-2">
                <Badge
                  variant={
                    sharedMotifs.includes(motif.name) ? "default" : "secondary"
                  }
                >
                  {motif.name}
                </Badge>
                <span className="text-xs text-gray-500">
                  {motif.start}-{motif.end} ({motif.family})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
