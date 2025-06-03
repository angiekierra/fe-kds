import type { MotifMatch, AnalysisResult, MotifDefinition, PFM, PWM } from '@/types/types';
import { PRELOADED_JASPAR_MOTIF_DATA } from "@/data/motifData";

const DEFAULT_BACKGROUND_FREQUENCIES = { A: 0.25, C: 0.25, G: 0.25, T: 0.25 };
const PWM_SCORE_THRESHOLD = 0.8;

export const MOTIF_DEFINITIONS_MAP: Record<string, MotifDefinition & { pwm: PWM }> = {};

export function convertPfmToPwm(pfm: PFM): PWM {
    const pwm: PWM = { A: [], C: [], G: [], T: [] };
    const motifLength = pfm.A.length;

    for (let i = 0; i < motifLength; i++) {
        const totalCountsAtPosition = pfm.A[i] + pfm.C[i] + pfm.G[i] + pfm.T[i];

        pwm.A.push(totalCountsAtPosition > 0 ? pfm.A[i] / totalCountsAtPosition : 0);
        pwm.C.push(totalCountsAtPosition > 0 ? pfm.C[i] / totalCountsAtPosition : 0);
        pwm.G.push(totalCountsAtPosition > 0 ? pfm.G[i] / totalCountsAtPosition : 0);
        pwm.T.push(totalCountsAtPosition > 0 ? pfm.T[i] / totalCountsAtPosition : 0);
    }
    return pwm;
}

export function normalizePWMScore(rawScore: number, minScore: number, maxScore: number): number {
    if (maxScore === minScore) return 0;
    return (rawScore - minScore) / (maxScore - minScore);
}

export function calculatePWMScore(
    subsequence: string,
    pwm: PWM,
    backgroundFrequencies: typeof DEFAULT_BACKGROUND_FREQUENCIES = DEFAULT_BACKGROUND_FREQUENCIES
): number {
    let score = 0;
    const motifLength = pwm.A ? pwm.A.length : 0;

    if (subsequence.length !== motifLength || motifLength === 0) {
        return -Infinity;
    }

    for (let i = 0; i < motifLength; i++) {
        const nucleotide = subsequence[i].toUpperCase();
        const bgProb = backgroundFrequencies[nucleotide as keyof typeof DEFAULT_BACKGROUND_FREQUENCIES];

        let probability = 0;
        if (pwm[nucleotide as keyof PWM]) {
            probability = pwm[nucleotide as keyof PWM][i];
        }

        if (probability === 0) {
            return -Infinity;
        }

        score += Math.log2(probability / bgProb);
    }
    return score;
}

export function getMinMaxScores(
    pwm: PWM,
    backgroundFrequencies: typeof DEFAULT_BACKGROUND_FREQUENCIES = DEFAULT_BACKGROUND_FREQUENCIES
): { minScore: number; maxScore: number } {
    let minScore = 0;
    let maxScore = 0;
    const motifLength = pwm.A ? pwm.A.length : 0;
    const nucleotides: Array<keyof PWM> = ['A', 'C', 'G', 'T'];

    for (let i = 0; i < motifLength; i++) {
        let minLogRatio = Infinity;
        let maxLogRatio = -Infinity;

        for (const nucleotide of nucleotides) {
            const probability = pwm[nucleotide]?.[i] || 0;
            const bgProb = backgroundFrequencies[nucleotide as keyof typeof DEFAULT_BACKGROUND_FREQUENCIES];

            if (probability === 0) {
                continue;
            }

            const logRatio = Math.log2(probability / bgProb);

            if (logRatio < minLogRatio) minLogRatio = logRatio;
            if (logRatio > maxLogRatio) maxLogRatio = logRatio;
        }

        if (minLogRatio !== Infinity) minScore += minLogRatio;
        if (maxLogRatio !== -Infinity) maxScore += maxLogRatio;
    }
    return { minScore, maxScore };
}

export function findMotifsInSequence(
    dnaSequence: string,
    motifName: string,
    jasparId: string,
    pwm: PWM,
    threshold: number
): MotifMatch[] {
    const foundInstances: MotifMatch[] = [];
    const motifLength = pwm.A ? pwm.A.length : 0;

    if (dnaSequence.length < motifLength || motifLength === 0) {
        return foundInstances;
    }

    const { minScore, maxScore } = getMinMaxScores(pwm);

    for (let i = 0; i <= dnaSequence.length - motifLength; i++) {
        const subsequence = dnaSequence.substring(i, i + motifLength).toUpperCase();

        if (!/^[ACGT]+$/.test(subsequence)) {
            continue;
        }

        const rawScore = calculatePWMScore(subsequence, pwm);

        if (rawScore === -Infinity) {
            continue;
        }

        const normalizedScore = normalizePWMScore(rawScore, minScore, maxScore);

        if (normalizedScore >= threshold) {
            foundInstances.push({
                name: motifName,
                jasparId: jasparId,
                start: i,
                end: i + motifLength - 1,
                strand: "+",
                score: normalizedScore,
                matched_sequence: subsequence,
                family: "",
                canonical_position: 0,
                description: "",
                compatibility_score: 0,
            });
        }
    }
    return foundInstances;
}

PRELOADED_JASPAR_MOTIF_DATA.forEach((unifiedDef) => {
    const pwm = convertPfmToPwm(unifiedDef.pfm);
    MOTIF_DEFINITIONS_MAP[unifiedDef.matrix_id] = {
        ...unifiedDef,
        pwm: pwm,
    };
});

export function findMotifs(sequence: string, tss: number): MotifMatch[] {
    const motifs: MotifMatch[] = [];
    const upperSeq = sequence.toUpperCase();

    Object.values(MOTIF_DEFINITIONS_MAP).forEach((unifiedDef) => {
        const pwm = unifiedDef.pwm;

        if (!pwm) {
            return;
        }

        const foundPwmMatches = findMotifsInSequence(
            upperSeq,
            unifiedDef.name,
            unifiedDef.matrix_id,
            pwm,
            PWM_SCORE_THRESHOLD
        );

        foundPwmMatches.forEach((match) => {
            const relativePosition = match.start - tss;
            const distanceFromCanonical = Math.abs(relativePosition - unifiedDef.canonical_position);
            const compatibility_score = Math.max(0, 1 - distanceFromCanonical / 100);

            const familyName = unifiedDef.family && unifiedDef.family.length > 0 ? unifiedDef.family[0] : 'Unknown';
            const description = unifiedDef.description || 'No description available';

            motifs.push({
                ...match,
                family: familyName,
                canonical_position: unifiedDef.canonical_position,
                description: description,
                compatibility_score,
            });
        });
    });

    return motifs.sort((a, b) => a.start - b.start);
}

export function analyzeMotifSequences(
    seq1: string,
    seq2: string,
    tssPosition: number
): AnalysisResult {
    const sequence1_motifs = findMotifs(seq1, tssPosition);
    const sequence2_motifs = findMotifs(seq2, tssPosition);

    const shared_motif_names = new Set<string>();
    sequence1_motifs.forEach(m1 => {
        if (sequence2_motifs.some(m2 => m2.jasparId === m1.jasparId)) {
            shared_motif_names.add(m1.name);
        }
    });

    const family_matches: Record<string, string[]> = {};
    sequence1_motifs.forEach((m1) => {
        sequence2_motifs.forEach((m2) => {
            if (m1.family === m2.family && m1.jasparId !== m2.jasparId) {
                if (!family_matches[m1.family]) {
                    family_matches[m1.family] = [];
                }
                const key = `${m1.name} (${m1.jasparId}) - ${m2.name} (${m2.jasparId})`;
                if (!family_matches[m1.family].includes(key)) {
                    family_matches[m1.family].push(key);
                }
            }
        });
    });

    const allMotifs = [...sequence1_motifs, ...sequence2_motifs];

    const overall_compatibility =
        allMotifs.length > 0
            ? allMotifs.reduce((sum, m) => sum + (m.compatibility_score * m.score), 0) /
              allMotifs.length
            : 0;

    return {
        sequence1_motifs,
        sequence2_motifs,
        shared_motifs: Array.from(shared_motif_names),
        family_matches,
        overall_compatibility,
    };
}