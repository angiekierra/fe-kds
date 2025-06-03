export interface MotifMatch {
  name: string
  start: number
  end: number
  strand: "+" | "-"
  score: number
  sequence: string
  family: string
  canonical_position: number
  description: string
  compatibility_score: number
}

export interface AnalysisResult {
  sequence1_motifs: MotifMatch[]
  sequence2_motifs: MotifMatch[]
  shared_motifs: string[]
  family_matches: { [key: string]: string[] }
  overall_compatibility: number
}

export const MOTIF_DATABASE: Record<string, {
  sequence: string
  family: string
  canonical_position: number
  description: string
}> = {
  TATA: {
    sequence: "TATAAA",
    family: "TFIID",
    canonical_position: -30,
    description: "TATA box - core promoter element",
  },
  CAAT: {
    sequence: "CCAAT",
    family: "CCAAT-binding",
    canonical_position: -80,
    description: "CAAT box - enhancer element",
  },
  AP1: {
    sequence: "TGAGTCA",
    family: "bZIP",
    canonical_position: -100,
    description: "AP-1 binding site",
  },
  ATF: {
    sequence: "TGACGTCA",
    family: "bZIP",
    canonical_position: -120,
    description: "ATF binding site",
  },
  SP1: {
    sequence: "GGGCGG",
    family: "Zinc finger",
    canonical_position: -50,
    description: "SP1 binding site",
  },
  NF1: {
    sequence: "TTGGC",
    family: "CTF/NF1",
    canonical_position: -60,
    description: "Nuclear factor 1 binding site",
  },
  OCT: {
    sequence: "ATGCAAAT",
    family: "POU",
    canonical_position: -70,
    description: "Octamer binding site",
  },
  NFKB: {
    sequence: "GGGACTTTCC",
    family: "Rel/NF-κB",
    canonical_position: -200,
    description: "NF-κB binding site - inflammatory response",
  },
  P53: {
    sequence: "RRRCWWGYYY",
    family: "p53",
    canonical_position: -150,
    description: "p53 response element - tumor suppressor",
  },
  E2F: {
    sequence: "TTTCGCGC",
    family: "E2F",
    canonical_position: -90,
    description: "E2F binding site - cell cycle regulation",
  },
  CREB: {
    sequence: "TGACGTCA",
    family: "bZIP",
    canonical_position: -110,
    description: "CREB binding site - cAMP response element",
  },
  GATA: {
    sequence: "WGATAR",
    family: "GATA",
    canonical_position: -180,
    description: "GATA binding site - hematopoiesis",
  },
  HNF4: {
    sequence: "AGGTCAAAGGTCA",
    family: "Nuclear receptor",
    canonical_position: -250,
    description: "HNF4 binding site - hepatocyte function",
  },
  STAT: {
    sequence: "TTCNNNGAA",
    family: "STAT",
    canonical_position: -300,
    description: "STAT binding site - cytokine signaling",
  },
  EGR1: {
    sequence: "GCGGGGGCG",
    family: "Zinc finger",
    canonical_position: -75,
    description: "Early growth response 1 binding site",
  },
  MEF2: {
    sequence: "CTAWWWWTAG",
    family: "MADS",
    canonical_position: -400,
    description: "MEF2 binding site - muscle development",
  },
  IRF: {
    sequence: "GAAA",
    family: "IRF",
    canonical_position: -500,
    description: "Interferon regulatory factor binding site",
  },
  YY1: {
    sequence: "CCAT",
    family: "Zinc finger",
    canonical_position: -65,
    description: "Yin Yang 1 binding site - transcriptional regulator",
  },
  HSF: {
    sequence: "NGAAN",
    family: "HSF",
    canonical_position: -350,
    description: "Heat shock factor binding site",
  },
  SRF: {
    sequence: "CCWTATAWGG",
    family: "MADS",
    canonical_position: -200,
    description: "Serum response factor binding site",
  },
  ETS: {
    sequence: "GGAA",
    family: "ETS",
    canonical_position: -85,
    description: "ETS family binding site",
  },
  TCF: {
    sequence: "CAAAG",
    family: "HMG",
    canonical_position: -150,
    description: "T-cell factor binding site - Wnt signaling",
  },
  HIF1: {
    sequence: "RCGTG",
    family: "bHLH-PAS",
    canonical_position: -600,
    description: "Hypoxia-inducible factor 1 binding site",
  },
  FOXO: {
    sequence: "TTGTTTAC",
    family: "Forkhead",
    canonical_position: -220,
    description: "FOXO binding site - longevity and metabolism",
  },
  RUNX: {
    sequence: "TGTGGT",
    family: "RUNX",
    canonical_position: -130,
    description: "RUNX binding site - hematopoiesis and development",
  },
  PAX: {
    sequence: "TCACGC",
    family: "Paired box",
    canonical_position: -280,
    description: "PAX binding site - developmental regulation",
  },
  MYOD: {
    sequence: "CANNTG",
    family: "bHLH",
    canonical_position: -450,
    description: "MyoD binding site - muscle differentiation",
  },
  SMAD: {
    sequence: "GTCT",
    family: "SMAD",
    canonical_position: -320,
    description: "SMAD binding site - TGF-β signaling",
  },
  PITX: {
    sequence: "TAATCC",
    family: "Homeodomain",
    canonical_position: -190,
    description: "PITX binding site - pituitary development",
  },
  LEF: {
    sequence: "CTTTGA",
    family: "HMG",
    canonical_position: -160,
    description: "LEF binding site - lymphoid development",
  },
  TEAD: {
    sequence: "CATTCC",
    family: "TEA/ATTS",
    canonical_position: -240,
    description: "TEAD binding site - Hippo pathway",
  },
  DPE: {
    sequence: "RGWYV",
    family: "TFIID",
    canonical_position: 28,
    description: "Downstream promoter element",
  },
  INR: {
    sequence: "YYANWYY",
    family: "TFIID",
    canonical_position: 0,
    description: "Initiator element - transcription start site",
  },
  BRE: {
    sequence: "SSRCGCC",
    family: "TFIIB",
    canonical_position: -37,
    description: "TFIIB recognition element",
  },
  MTE: {
    sequence: "CSARCSSAACGS",
    family: "TFIID",
    canonical_position: 18,
    description: "Motif ten element",
  },
  GC_BOX: {
    sequence: "GGGCGG",
    family: "Zinc finger",
    canonical_position: -40,
    description: "GC box - SP1/SP3 binding",
  },
}

export function findMotifs(sequence: string, tss: number): MotifMatch[] {
  const motifs: MotifMatch[] = []
  const upperSeq = sequence.toUpperCase()

  Object.entries(MOTIF_DATABASE).forEach(([name, motifData]) => {
    const motifSeq = motifData.sequence

    for (let i = 0; i <= upperSeq.length - motifSeq.length; i++) {
      if (upperSeq.substring(i, i + motifSeq.length) === motifSeq) {
        const relativePosition = i - tss
        const distanceFromCanonical = Math.abs(relativePosition - motifData.canonical_position)
        const compatibility_score = Math.max(0, 1 - distanceFromCanonical / 100)

        motifs.push({
          name,
          start: i,
          end: i + motifSeq.length - 1,
          strand: "+",
          score: 0.8 + Math.random() * 0.2,
          sequence: motifSeq,
          family: motifData.family,
          canonical_position: motifData.canonical_position,
          description: motifData.description,
          compatibility_score,
        })
      }
    }
  })

  return motifs.sort((a, b) => a.start - b.start)
}

export function analyzeMotifSequences(
  seq1: string,
  seq2: string,
  tssPosition: number
): AnalysisResult {
  const sequence1_motifs = findMotifs(seq1, tssPosition)
  const sequence2_motifs = findMotifs(seq2, tssPosition)

  const shared_motifs = sequence1_motifs
    .filter((m1) => sequence2_motifs.some((m2) => m2.name === m1.name))
    .map((m) => m.name)

  const family_matches: Record<string, string[]> = {}
  sequence1_motifs.forEach((m1) => {
    sequence2_motifs.forEach((m2) => {
      if (m1.family === m2.family && m1.name !== m2.name) {
        if (!family_matches[m1.family]) {
          family_matches[m1.family] = []
        }
        const key = `${m1.name}-${m2.name}`
        if (!family_matches[m1.family].includes(key)) {
          family_matches[m1.family].push(key)
        }
      }
    })
  })

  const allMotifs = [...sequence1_motifs, ...sequence2_motifs]
  const overall_compatibility =
    allMotifs.length > 0
      ? allMotifs.reduce((sum, m) => sum + m.compatibility_score, 0) / allMotifs.length
      : 0

  return {
    sequence1_motifs,
    sequence2_motifs,
    shared_motifs: [...new Set(shared_motifs)],
    family_matches,
    overall_compatibility,
  }
}
