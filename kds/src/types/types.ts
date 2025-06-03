export type NucleotideProbabilities = number[];

export interface PFM {
    A: NucleotideProbabilities;
    C: NucleotideProbabilities;
    G: NucleotideProbabilities;
    T: NucleotideProbabilities;
}

export interface PWM {
    A: NucleotideProbabilities;
    C: NucleotideProbabilities;
    G: NucleotideProbabilities;
    T: NucleotideProbabilities;
}

export interface MotifDefinition {
    matrix_id: string;
    name: string;
    pfm: PFM;
    family?: string[];
    class?: string[];
    description?: string;
    canonical_position: number;
}

export interface MotifMatch {
    name: string;
    jasparId: string;
    start: number;
    end: number;
    strand: "+" | "-";
    score: number;
    matched_sequence: string;
    family: string;
    canonical_position: number;
    description: string;
    compatibility_score: number;
}

export interface AnalysisResult {
    sequence1_motifs: MotifMatch[];
    sequence2_motifs: MotifMatch[];
    shared_motifs: string[];
    family_matches: { [key: string]: string[] };
    overall_compatibility: number;
}