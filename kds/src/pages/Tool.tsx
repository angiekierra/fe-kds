import { useEffect, useRef, useState } from "react";
import TraceForm from "@/components/TraceForm";
import MotifTabs from "@/components/motiftabs";
import { analyzeMotifSequences } from "@/utils/motifUtils";
import type { AnalysisResult } from "@/types/types";

export default function Tool() {
  const [showMotif, setShowMotif] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [tssPosition, setTssPosition] = useState<number>(100);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const motifRef = useRef<HTMLDivElement | null>(null);

  const handleTraceSubmit = (seq1: string, seq2: string, tss: number) => {
    setErrorMessage(null);

    const dnaRegex = /^[ACGTNacgtn]*$/;
    if (!seq1.trim() || !seq2.trim()) {
      setErrorMessage("Both DNA sequences are required.");
      return;
    }
    if (!dnaRegex.test(seq1)) {
      setErrorMessage(
        "DNA Sequence 1 contains invalid characters. Use A, C, G, T, N only."
      );
      return;
    }
    if (!dnaRegex.test(seq2)) {
      setErrorMessage(
        "DNA Sequence 2 contains invalid characters. Use A, C, G, T, N only."
      );
      return;
    }

    if (isNaN(tss) || tss < 0) {
      setErrorMessage("TSS Position must be a non-negative number.");
      return;
    }

    try {
      const result = analyzeMotifSequences(seq1, seq2, tss);
      setAnalysis(result);
      setTssPosition(tss);
      setShowMotif(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMessage(
        error.message || "An unexpected error occurred during analysis."
      );
      setShowMotif(false); // Hide results if analysis fails
      setAnalysis(null);
    }
  };

  useEffect(() => {
    if (showMotif && motifRef.current) {
      motifRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showMotif, analysis]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed top-0 right-0 h-full flex items-center justify-end pointer-events-none z-0">
        <img
          src="dna.png"
          alt="bg-dna-right"
          className="h-full object-contain blur-md lg:blur-sm xl:blur-none"
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
          {errorMessage && (
            <div className="text-red-500 bg-red-100 p-3 rounded-md mt-4 text-center">
              {errorMessage}
            </div>
          )}
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
