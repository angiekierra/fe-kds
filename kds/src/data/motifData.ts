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
    matrix_id: "MA0105.2",
    name: "NFKB1",
    pfm: {
      A: [0.0, 0.0, 0.0, 2.0, 11.0, 5.0, 0.0, 0.0, 0.0, 0.0, 1.0],
      C: [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 5.0, 13.0, 17.0, 18.0, 15.0],
      G: [18.0, 18.0, 18.0, 16.0, 6.0, 2.0, 2.0, 0.0, 0.0, 0.0, 1.0],
      T: [0.0, 0.0, 0.0, 0.0, 0.0, 11.0, 11.0, 5.0, 1.0, 0.0, 1.0],
    },
    family: ["NF-kappaB-related factors"],
    description:
      "NF-kB is a pivotal transcription factor that controls numerous genes involved in immune and inflammatory responses as well as cell survival.",
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
    description:
      "A component of the AP-1 transcription factor complex, which plays a crucial role in regulating gene expression in response to diverse stimuli like stress, cytokines, and growth factors",
    canonical_position: -50,
  },

  {
    matrix_id: "MA0036.4",
    name: "GATA2",
    pfm: {
      A: [940.0, 444.0, 417.0, 14098.0, 145.0, 96.0, 2373.0],
      C: [10607.0, 259.0, 34.0, 14.0, 77.0, 13786.0, 492.0],
      G: [1223.0, 150.0, 21.0, 43.0, 48.0, 126.0, 367.0],
      T: [1443.0, 13360.0, 13741.0, 58.0, 13943.0, 205.0, 10981.0],
    },
    family: ["C4-GATA-related"],
    description:
      "A transcription factor critical for cell differentiation and development and plays a crucial role in hematopoiesis (blood cell formation)",
    canonical_position: -100,
  },

  {
    matrix_id: "MA0137.4",
    name: "STAT1",
    pfm: {
      A: [0.0, 0.0, 361.0, 109.0, 1739.0, 163.0, 29.0, 3620.0, 3624.0],
      C: [52.0, 6.0, 3262.0, 2009.0, 0.0, 0.0, 7.0, 0.0, 5.0],
      G: [0.0, 110.0, 6.0, 0.0, 1637.0, 3466.0, 3426.0, 9.0, 0.0],
      T: [3577.0, 3513.0, 0.0, 1511.0, 253.0, 0.0, 167.0, 0.0, 0.0],
    },
    family: ["STAT factors"],
    description:
      "A key transcription factor in cytokine and growth factor signaling pathways, which is activated by external signals and regulates gene expression involved in immune responses, cell growth, and differentiation.",
    canonical_position: -300,
  },

  {
    matrix_id: "MA0123.1",
    name: "ABI4",
    pfm: {
      A: [0.0, 12.0, 0.0, 0.0, 1.0, 0.0, 5.0, 3.0, 3.0, 4.0],
      C: [49.0, 0.0, 20.0, 23.0, 3.0, 45.0, 28.0, 25.0, 31.0, 26.0],
      G: [0.0, 37.0, 29.0, 1.0, 45.0, 4.0, 6.0, 11.0, 5.0, 7.0],
      T: [0.0, 0.0, 0.0, 25.0, 0.0, 0.0, 10.0, 10.0, 10.0, 12.0],
    },
    class: ["AP2/EREBP"],
    family: ["ERF/DREB"],
    description:
      "A transcription factor in plants crucial for abscisic acid (ABA) signaling, which regulates seed dormancy, germination, and stress responses.",
    canonical_position: -150,
  },

  {
    matrix_id: "MA0299.1",
    name: "GAL4",
    pfm: {
      A: [
        0.0, 0.0, 0.0, 778.0, 292.0, 1019.0, 2339.0, 567.0, 1913.0, 659.0, 96.0,
        1170.0, 0.0, 235.0, 0.0,
      ],
      C: [
        2779.0, 0.0, 438.0, 655.0, 1137.0, 810.0, 0.0, 1296.0, 335.0, 592.0,
        767.0, 517.0, 1437.0, 392.0, 2779.0,
      ],
      G: [
        0.0, 2779.0, 2273.0, 927.0, 1151.0, 1002.0, 538.0, 810.0, 0.0, 1744.0,
        494.0, 1105.0, 729.0, 419.0, 0.0,
      ],
      T: [
        0.0, 0.0, 97.0, 717.0, 498.0, 390.0, 98.0, 194.0, 737.0, 204.0, 1786.0,
        404.0, 824.0, 2001.0, 0.0,
      ],
    },
    family: ["C6 zinc cluster factors"],
    description:
      "GAL4 is a well-characterized transcriptional activator in yeast that regulates genes involved in galactose metabolism, crucial for the cell's ability to utilize different sugar sources.",
    canonical_position: -300,
  },

  {
    matrix_id: "MA0018.5",
    name: "CREB1",
    pfm: {
      A: [1911.0, 1728.0, 73505.0, 2186.0, 1417.0, 8889.0, 3533.0, 75819.0],
      C: [970.0, 2298.0, 1748.0, 14144.0, 1895.0, 1231.0, 71982.0, 1018.0],
      G: [1109.0, 72555.0, 2012.0, 6339.0, 74401.0, 1207.0, 2177.0, 1222.0],
      T: [75554.0, 2963.0, 2279.0, 56875.0, 1831.0, 68217.0, 1852.0, 1485.0],
    },
    class: ["Basic leucine zipper factors (bZIP)"],
    family: ["CREB-related factors"],
    description:
      "CREB is activated by cAMP signaling and plays a crucial role in gene expression related to cellular responses to stimuli, neuronal plasticity, and long-term memory formation.",
    canonical_position: -110,
  },

  {
    matrix_id: "MA0002.3",
    name: "RUNX1",
    pfm: {
      A: [123.0, 57.0, 0.0, 87.0, 0.0, 17.0, 10.0, 131.0, 500.0],
      C: [1072.0, 0.0, 75.0, 127.0, 0.0, 42.0, 400.0, 463.0, 158.0],
      G: [149.0, 7.0, 1872.0, 70.0, 1987.0, 1848.0, 251.0, 81.0, 289.0],
      T: [656.0, 1936.0, 53.0, 1716.0, 13.0, 93.0, 1339.0, 1325.0, 1053.0],
    },
    class: ["Runt domain factors"],
    family: ["Runt-related factors"],
    description:
      "RUNX transcription factors are essential regulators of cell differentiation and development, particularly in hematopoiesis (blood cell formation), osteogenesis (bone formation), and nervous system development.",
    canonical_position: -130,
  },

  {
    matrix_id: "MA1936.2",
    name: "FOXO1",
    pfm: {
      A: [
        156.0, 173.0, 207.0, 347.0, 347.0, 11.0, 347.0, 9.0, 15.0, 347.0, 347.0,
        120.0,
      ],
      C: [
        16.0, 38.0, 140.0, 0.0, 12.0, 347.0, 101.0, 11.0, 0.0, 55.0, 10.0, 13.0,
      ],
      G: [
        191.0, 69.0, 37.0, 68.0, 20.0, 0.0, 26.0, 347.0, 347.0, 0.0, 18.0,
        227.0,
      ],
      T: [0.0, 347.0, 19.0, 73.0, 0.0, 0.0, 0.0, 0.0, 24.0, 16.0, 66.0, 0.0],
    },
    class: ["Tryptophan cluster factors", "Fork head/winged helix factors"],
    family: ["Ets-related", "FOX"],
    description:
      "FOXO proteins are key regulators of cellular responses to oxidative stress, metabolism, and longevity, influencing processes like apoptosis and DNA repair.",
    canonical_position: -220,
  },
];
