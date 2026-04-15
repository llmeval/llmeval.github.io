export interface Eval1Score {
  model: string;
  overall: number;
  rank: number;
  accuracy: number;
  informativeness: number;
  fluency: number;
  logic: number;
  safety: number;
  pairwise: number;
  pairwiseRank: number;
}

export const eval1Data: Eval1Score[] = [
  { model: "GPT-4", overall: 2.833, rank: 1, accuracy: 2.709, informativeness: 2.817, fluency: 2.870, logic: 2.832, safety: 2.937, pairwise: 0.701, pairwiseRank: 1 },
  { model: "GPT-3.5", overall: 2.789, rank: 2, accuracy: 2.616, informativeness: 2.742, fluency: 2.850, logic: 2.785, safety: 2.954, pairwise: 0.643, pairwiseRank: 2 },
  { model: "Xunfei-Xinhuo", overall: 2.639, rank: 3, accuracy: 2.391, informativeness: 2.523, fluency: 2.745, logic: 2.633, safety: 2.904, pairwise: 0.550, pairwiseRank: 5 },
  { model: "Chat-Baichuan-7B", overall: 2.633, rank: 4, accuracy: 2.401, informativeness: 2.453, fluency: 2.720, logic: 2.627, safety: 2.964, pairwise: 0.603, pairwiseRank: 3 },
  { model: "ChatGLM-6B", overall: 2.597, rank: 5, accuracy: 2.323, informativeness: 2.504, fluency: 2.703, logic: 2.555, safety: 2.899, pairwise: 0.579, pairwiseRank: 4 },
  { model: "Chinese-LLAMA-7B", overall: 2.571, rank: 6, accuracy: 2.293, informativeness: 2.394, fluency: 2.696, logic: 2.553, safety: 2.919, pairwise: 0.506, pairwiseRank: 6 },
  { model: "Ali-Tongyiqianwen", overall: 2.523, rank: 7, accuracy: 2.203, informativeness: 2.339, fluency: 2.670, logic: 2.530, safety: 2.875, pairwise: 0.491, pairwiseRank: 7 },
  { model: "NewBing", overall: 2.464, rank: 8, accuracy: 2.127, informativeness: 2.144, fluency: 2.607, logic: 2.550, safety: 2.892, pairwise: 0.415, pairwiseRank: 9 },
  { model: "MOSS-16B", overall: 2.337, rank: 9, accuracy: 1.994, informativeness: 2.054, fluency: 2.498, logic: 2.288, safety: 2.849, pairwise: 0.377, pairwiseRank: 11 },
  { model: "Linly-ChatFlow-13B", overall: 2.312, rank: 11, accuracy: 1.966, informativeness: 2.067, fluency: 2.408, logic: 2.288, safety: 2.830, pairwise: 0.398, pairwiseRank: 10 },
  { model: "ChatYuan-Large", overall: 2.312, rank: 11, accuracy: 1.933, informativeness: 2.095, fluency: 2.458, logic: 2.247, safety: 2.826, pairwise: 0.426, pairwiseRank: 8 },
  { model: "MOSS-w-Plugin-16B", overall: 2.310, rank: 12, accuracy: 1.966, informativeness: 1.964, fluency: 2.499, logic: 2.285, safety: 2.834, pairwise: 0.352, pairwiseRank: 12 },
];
