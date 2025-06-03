import { useEffect, useRef, useState } from "react";
import TraceForm from "@/components/TraceForm";
import MotifTabs from "@/components/motiftabs";
import { analyzeMotifSequences } from "@/utils/motifUtils";
import type { AnalysisResult } from "@/types/types";

export default function Tool() {
  const [showMotif, setShowMotif] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [tssPosition, setTssPosition] = useState<number>(100);
  const motifRef = useRef<HTMLDivElement | null>(null);

  const handleTraceSubmit = (seq1: string, seq2: string, tss: number) => {
    const result = analyzeMotifSequences(seq1, seq2, tss);
    setAnalysis(result);
    setTssPosition(tss);
    setShowMotif(true);
  };

  useEffect(() => {
    if (showMotif && motifRef.current) {
      motifRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showMotif]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed top-0 right-0 h-full flex items-center justify-end pointer-events-none z-0">
        <img
          src="dna.png"
          alt="bg-dna-right"
          className="h-full object-contain"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-teal-100 opacity-30 rounded-full blur-3xl"></div>
      </div>

      <div
        className="relative z-10 flex items-center justify-center px-4"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <div className="w-full max-w-2xl">
          <TraceForm onSubmit={handleTraceSubmit} />
        </div>
      </div>

      {showMotif && analysis && (
        <div
          ref={motifRef}
          className="relative z-10 px-4 pt-12 pb-20 flex justify-center"
        >
          <MotifTabs analysis={analysis} tssPosition={tssPosition} />
        </div>
      )}
    </div>
  );
}
