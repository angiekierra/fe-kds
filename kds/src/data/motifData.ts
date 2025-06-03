import type { MotifDefinition } from "@/types/types";

export const PRELOADED_JASPAR_MOTIF_DATA: MotifDefinition[] = [
  {
    matrix_id: "MA0108.3",
    name: "TBP",
    pfm: {
      A: [16.0, 352.0, 3.0, 354.0, 268.0, 360.0, 222.0],
      C: [46.0, 0.0, 10.0, 0.0, 0.0, 3.0, 2.0],
      G: [18.0, 2.0, 2.0, 5.0, 0.0, 20.0, 44.0],
      T: [309.0, 35.0, 374.0, 30.0, 121.0, 6.0, 121.0],
    },
    family: ["TBP-related factors"],
    description: "TATA box - core promoter element",
    canonical_position: -30,
  },
  {
    matrix_id: "MA0105.2",
    name: "NFKB1",
    pfm: {
      A: [0.0, 0.0, 0.0, 2.0, 11.0, 5.0, 0.0, 0.0, 0.0, 0.0, 1.0],
      C: [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 5.0, 13.0, 17.0, 18.0, 15.0],
      G: [18.0, 18.0, 18.0, 16.0, 6.0, 2.0, 2.0, 0.0, 0.0, 0.0, 1.0],
      T: [0.0, 0.0, 0.0, 0.0, 0.0, 11.0, 11.0, 5.0, 1.0, 0.0, 1.0],
    },
    family: ["NF-kappaB-related factors"],
    description: "NF-κB binding site - inflammatory response",
    canonical_position: -200,
  },
  {
    matrix_id: "MA0491.3",
    name: "JUND",
    pfm: {
      A: [
        70166.0, 644.0, 1365.0, 103797.0, 4634.0, 2053.0, 4915.0, 103420.0,
        2796.0,
      ],
      C: [
        10173.0, 757.0, 873.0, 650.0, 76028.0, 496.0, 98628.0, 751.0, 12025.0,
      ],
      G: [
        20586.0, 443.0, 99787.0, 573.0, 20633.0, 1147.0, 953.0, 965.0, 7908.0,
      ],
      T: [
        5020.0, 104101.0, 3920.0, 925.0, 4650.0, 102249.0, 1449.0, 809.0,
        83216.0,
      ],
    },
    class: ["Basic leucine zipper factors (bZIP)"],
    family: ["Jun-related"],
    description: "JunD - AP-1 transcription factor",
    canonical_position: -50,
  },
];
