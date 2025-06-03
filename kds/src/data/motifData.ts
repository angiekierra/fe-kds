import type { MotifDefinition } from  "@/types/types";

export const PRELOADED_JASPAR_MOTIF_DATA: MotifDefinition[] = [
    {
        "matrix_id": "MA0108.3",
        "name": "TBP",
        "pfm": {
            "A": [16.0, 352.0, 3.0, 354.0, 268.0, 360.0, 222.0],
            "C": [46.0, 0.0, 10.0, 0.0, 0.0, 3.0, 2.0],
            "G": [18.0, 2.0, 2.0, 5.0, 0.0, 20.0, 44.0],
            "T": [309.0, 35.0, 374.0, 30.0, 121.0, 6.0, 121.0]
        },
        "family": ["TBP-related factors"],
        "description": "TATA box - core promoter element",
        "canonical_position": -30
    },
    {
        "matrix_id": "MA0105.2",
        "name": "NFKB1",
        "pfm": {
            "A": [0.0, 0.0, 0.0, 2.0, 11.0, 5.0, 0.0, 0.0, 0.0, 0.0, 1.0],
            "C": [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 5.0, 13.0, 17.0, 18.0, 15.0],
            "G": [18.0, 18.0, 18.0, 16.0, 6.0, 2.0, 2.0, 0.0, 0.0, 0.0, 1.0],
            "T": [0.0, 0.0, 0.0, 0.0, 0.0, 11.0, 11.0, 5.0, 1.0, 0.0, 1.0]
        },
        "family": ["NF-kappaB-related factors"],
        "description": "NF-κB binding site - inflammatory response",
        "canonical_position": -200
    }
];