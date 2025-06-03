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
    description:
      "TBP is a core promoter element crucial for precisely initiating transcription by RNA Polymerase II",
    canonical_position: -30,
  },

  {
    matrix_id: "MA0506.1",
    name: "NRF1",
    pfm: {
      A: [602.0, 623.0, 196.0, 0.0, 1514.0, 0.0, 0.0, 0.0, 0.0, 74.0, 2245.0],
      C: [
        375.0, 4001.0, 189.0, 4016.0, 1862.0, 403.0, 0.0, 4338.0, 349.0, 4550.0,
        804.0,
      ],
      G: [
        3647.0, 0.0, 4239.0, 468.0, 935.0, 528.0, 4624.0, 0.0, 4275.0, 0.0,
        1575.0,
      ],
      T: [0.0, 0.0, 0.0, 140.0, 313.0, 3693.0, 0.0, 286.0, 0.0, 0.0, 0.0],
    },
    family: ["NRF-related factors"],
    description:
      "NRF1 is a transcription factor that binds promoter regions to regulate gene expression.",
    canonical_position: -35,
  },

  {
    matrix_id: "MA0095.4",
    name: "YY1",
    pfm: {
      A: [3123.0, 41529.0, 39666.0, 30769.0, 41506.0, 689.0, 561.0, 1597.0],
      C: [33122.0, 926.0, 1447.0, 2536.0, 746.0, 241.0, 165.0, 971.0],
      G: [3684.0, 287.0, 1320.0, 8658.0, 712.0, 708.0, 42263.0, 39612.0],
      T: [3419.0, 606.0, 915.0, 1385.0, 384.0, 41710.0, 359.0, 1168.0],
    },
    class: ["C2H2 zinc finger factors"],
    family: ["More than 3 adjacent zinc fingers"],
    description:
      "A transcriptional regulator that can act as both an activator and repressor, influences chromatin structure and gene expression.",
    canonical_position: -25,
  },

  {
    matrix_id: "MA0079.5",
    name: "SP1",
    pfm: {
      A: [
        1.05485, 1.05485, 1.05485, 1.05485, 266.878, 1.05485, 1.05485, 254.219,
        161.392,
      ],
      C: [
        1.05485, 1.05485, 1.05485, 1.05485, 731.013, 1.05485, 85.443, 51.6878,
        1.05485,
      ],
      G: [
        950.422, 996.835, 996.835, 996.835, 1.05485, 996.835, 912.447, 659.283,
        836.498,
      ],
      T: [
        47.4684, 1.05485, 1.05485, 1.05485, 1.05485, 1.05485, 1.05485, 34.8101,
        1.05485,
      ],
    },
    class: ["C2H2 zinc finger factors"],
    family: ["Three-zinc finger Kruppel-related"],
    description: "Key regulator of gene expression via binding near TSS",
    canonical_position: 25,
  },

  {
    matrix_id: "MA0527.2",
    name: "ZBTB33",
    pfm: {
      A: [6.0, 28.0, 10.0, 0.0, 35.0, 2.0, 0.0, 461.0, 8.0, 416.0],
      C: [66.0, 659.0, 89.0, 705.0, 0.0, 668.0, 0.0, 80.0, 57.0, 94.0],
      G: [32.0, 11.0, 5.0, 0.0, 667.0, 0.0, 705.0, 118.0, 450.0, 141.0],
      T: [601.0, 7.0, 601.0, 0.0, 3.0, 35.0, 0.0, 46.0, 190.0, 54.0],
    },
    class: ["C2H2 zinc finger factors"],
    family: ["Other factors with up to three adjacent zinc fingers"],
    description:
      "Binds to methylated promoters of genes such as tumor supressors",
    canonical_position: -50,
  },

  {
    matrix_id: "MA0060.4",
    name: "NFYA",
    pfm: {
      A: [23.0, 31.0, 4683.0, 4584.0, 37.0, 166.0, 4088.0, 611.0],
      C: [4657.0, 4713.0, 29.0, 94.0, 132.0, 4215.0, 213.0, 1131.0],
      G: [34.0, 28.0, 17.0, 124.0, 11.0, 319.0, 489.0, 2713.0],
      T: [111.0, 53.0, 96.0, 23.0, 4645.0, 125.0, 35.0, 370.0],
    },
    class: ["Heteromeric CCAAT-binding factors"],
    family: ["Heteromeric CCAAT-binding"],
    description:
      "A heteromeric transcription factor that binds to CCAAT boxes in promoters and regulates gene expression.",
    canonical_position: -75,
  },

  {
    matrix_id: "MA0139.1",
    name: "CTCF",
    pfm: {
      A: [
        87.0, 167.0, 281.0, 56.0, 8.0, 744.0, 40.0, 107.0, 851.0, 5.0, 333.0,
        54.0, 12.0, 56.0, 104.0, 372.0, 82.0, 117.0, 402.0,
      ],
      C: [
        291.0, 145.0, 49.0, 800.0, 903.0, 13.0, 528.0, 433.0, 11.0, 0.0, 3.0,
        12.0, 0.0, 8.0, 733.0, 13.0, 482.0, 322.0, 181.0,
      ],
      G: [
        76.0, 414.0, 449.0, 21.0, 0.0, 65.0, 334.0, 48.0, 32.0, 903.0, 566.0,
        504.0, 890.0, 775.0, 5.0, 507.0, 307.0, 73.0, 266.0,
      ],
      T: [
        459.0, 187.0, 134.0, 36.0, 2.0, 91.0, 11.0, 324.0, 18.0, 3.0, 9.0,
        341.0, 8.0, 71.0, 67.0, 17.0, 37.0, 396.0, 59.0,
      ],
    },
    class: ["C2H2 zinc finger factors"],
    family: ["More than 3 adjacent zinc fingers"],
    description:
      "CTCF is a multifunctional transcription factor that plays a key role in chromatin organization, gene regulation, and insulation of genomic domains.",
    canonical_position: -60,
  },
];
