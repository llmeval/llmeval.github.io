export interface Eval2Score {
  model: string;
  objAccuracy: number;
  objExplanation: number;
  fluency: number;
  accuracy: number;
  logic: number;
  informativeness: number;
  rank: number;
  total: number;
}

export const eval2Data: Eval2Score[] = [
  { model: "GPT-4", objAccuracy: 2.378, objExplanation: 1.670, fluency: 2.895, accuracy: 4.260, logic: 2.779, informativeness: 2.691, rank: 1, total: 86.72 },
  { model: "GPT-3.5", objAccuracy: 2.160, objExplanation: 1.542, fluency: 2.861, accuracy: 3.822, logic: 2.694, informativeness: 2.489, rank: 2, total: 80.71 },
  { model: "Xunfei-Spark", objAccuracy: 2.114, objExplanation: 1.557, fluency: 2.815, accuracy: 3.750, logic: 2.560, informativeness: 2.196, rank: 3, total: 78.05 },
  { model: "Baichuan-13B-Chat", objAccuracy: 2.003, objExplanation: 1.428, fluency: 2.847, accuracy: 3.727, logic: 2.631, informativeness: 2.472, rank: 4, total: 77.51 },
  { model: "MiniMax-Abab5", objAccuracy: 1.922, objExplanation: 1.443, fluency: 2.878, accuracy: 3.800, logic: 2.656, informativeness: 2.478, rank: 5, total: 77.47 },
  { model: "NewBing", objAccuracy: 2.197, objExplanation: 1.583, fluency: 2.796, accuracy: 3.608, logic: 2.558, informativeness: 2.061, rank: 6, total: 77.28 },
  { model: "Claude", objAccuracy: 1.923, objExplanation: 1.463, fluency: 2.680, accuracy: 3.597, logic: 2.613, informativeness: 2.414, rank: 7, total: 75.57 },
  { model: "MOSS-Mars", objAccuracy: 1.961, objExplanation: 1.465, fluency: 2.737, accuracy: 3.480, logic: 2.508, informativeness: 2.229, rank: 8, total: 74.41 },
  { model: "Tiangong", objAccuracy: 1.933, objExplanation: 1.354, fluency: 2.774, accuracy: 3.520, logic: 2.576, informativeness: 2.339, rank: 9, total: 74.36 },
  { model: "Ziya-LLaMA-13B", objAccuracy: 1.681, objExplanation: 1.306, fluency: 2.804, accuracy: 3.207, logic: 2.473, informativeness: 2.120, rank: 10, total: 69.48 },
  { model: "Tongyi-Qianwen", objAccuracy: 1.638, objExplanation: 1.275, fluency: 2.776, accuracy: 3.098, logic: 2.443, informativeness: 2.126, rank: 11, total: 68.01 },
  { model: "360", objAccuracy: 1.720, objExplanation: 1.322, fluency: 2.700, accuracy: 3.022, logic: 2.394, informativeness: 2.056, rank: 12, total: 67.97 },
  { model: "Zhigong", objAccuracy: 1.680, objExplanation: 1.297, fluency: 2.764, accuracy: 3.067, logic: 2.427, informativeness: 1.916, rank: 13, total: 67.27 },
  { model: "ChatGLM2-6B", objAccuracy: 1.690, objExplanation: 1.345, fluency: 2.758, accuracy: 2.934, logic: 2.401, informativeness: 1.956, rank: 14, total: 67.07 },
  { model: "Vicuna-33B", objAccuracy: 1.567, objExplanation: 1.277, fluency: 2.599, accuracy: 3.033, logic: 2.440, informativeness: 2.143, rank: 15, total: 66.53 },
  { model: "InternLM-7B", objAccuracy: 1.655, objExplanation: 1.355, fluency: 2.636, accuracy: 3.091, logic: 2.295, informativeness: 1.938, rank: 16, total: 66.52 },
  { model: "ChatGLM", objAccuracy: 1.602, objExplanation: 1.239, fluency: 2.670, accuracy: 3.022, logic: 2.374, informativeness: 2.084, rank: 17, total: 66.05 },
  { model: "Tigerbot-180B", objAccuracy: 1.604, objExplanation: 1.294, fluency: 2.573, accuracy: 3.079, logic: 2.489, informativeness: 1.882, rank: 18, total: 65.90 },
  { model: "AquilaChat-7B", objAccuracy: 1.548, objExplanation: 1.239, fluency: 2.710, accuracy: 2.945, logic: 2.383, informativeness: 1.918, rank: 19, total: 64.82 },
  { model: "BELLE-7B-2M", objAccuracy: 1.484, objExplanation: 1.224, fluency: 2.685, accuracy: 2.695, logic: 2.347, informativeness: 1.880, rank: 20, total: 62.98 },
];
