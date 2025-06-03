import { useState } from "react";
import VisualAlignment from "./tabs/VisualAlignment";
import SemanticAnalysis from "./tabs/SemanticAnalysis";
import CompatibilityAnalysis from "./tabs/CompatibilityAnalysis";
import AnalysisSummary from "./tabs/AnalysisSummary";
import type { AnalysisResult } from "@/types/types";

interface MotifTabsProps {
  analysis: AnalysisResult;
  tssPosition: number;
}

export default function MotifTabs({ analysis, tssPosition }: MotifTabsProps) {
  const [activeTab, setActiveTab] = useState("Visual Alignment");

  const {
    sequence1_motifs,
    sequence2_motifs,
    shared_motifs,
    family_matches,
    overall_compatibility,
  } = analysis;

  // Estimate sequence length based on motif ends
  const seq1Length = Math.max(...sequence1_motifs.map((m) => m.end + 1), 100);
  const seq2Length = Math.max(...sequence2_motifs.map((m) => m.end + 1), 100);

  return (
    <div className="bg-teal-50 rounded-md p-2 w-full max-w-6xl mx-auto">
      <div className="flex flex-wrap border-b border-gray-300">
        {[
          "Visual Alignment",
          "Semantic Analysis",
          "Compatibility Score",
          "Summary",
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-t-md ${
              activeTab === tab
                ? "bg-white text-black border border-b-0 border-gray-300"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white border border-t-0 border-gray-300 p-6 rounded-b-md">
        {activeTab === "Visual Alignment" && (
          <VisualAlignment
            seq1Motifs={sequence1_motifs}
            seq2Motifs={sequence2_motifs}
            sharedMotifs={shared_motifs}
            sequence1={"N".repeat(seq1Length)}
            sequence2={"N".repeat(seq2Length)}
            tssPosition={tssPosition}
          />
        )}
        {activeTab === "Semantic Analysis" && (
          <SemanticAnalysis
            familyMatches={family_matches}
            seq1Motifs={sequence1_motifs}
            seq2Motifs={sequence2_motifs}
          />
        )}
        {activeTab === "Compatibility Score" && (
          <CompatibilityAnalysis
            seq1Motifs={sequence1_motifs}
            seq2Motifs={sequence2_motifs}
            overallScore={overall_compatibility}
            tssPosition={tssPosition}
          />
        )}
        {activeTab === "Summary" && <AnalysisSummary analysis={analysis} />}
      </div>
    </div>
  );
}
