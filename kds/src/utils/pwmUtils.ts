import type { PWM, PFM, MotifMatch } from '@/types/types';

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

const DEFAULT_BACKGROUND_FREQUENCIES = { A: 0.25, C: 0.25, G: 0.25, T: 0.25 };

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