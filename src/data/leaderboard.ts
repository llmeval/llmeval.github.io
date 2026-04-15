export interface ModelScore {
  rank: number;
  model: string;
  organization: string;
  accessType: string;
  evalDate: string;
  relativeScore: number;
  absoluteScore: number;
  engineering: number;
  economics: number;
  education: number;
  law: number;
  literature: number;
  management: number;
  science: number;
  history: number;
  medicine: number;
  military: number;
}

export const leaderboardData: ModelScore[] = [
  { rank: 1, model: "Doubao-1.5-Thinking-Pro", organization: "ByteDance", accessType: "API", evalDate: "2025.7.21", relativeScore: 100.00, absoluteScore: 93.67, engineering: 9.47, economics: 9.67, education: 9.43, law: 9.77, literature: 8.93, management: 9.53, science: 9.23, history: 9.70, medicine: 8.97, military: 8.97 },
  { rank: 2, model: "DeepSeek-R1", organization: "DeepSeek", accessType: "API", evalDate: "2025.7.21", relativeScore: 97.40, absoluteScore: 91.23, engineering: 9.47, economics: 9.43, education: 9.27, law: 9.37, literature: 8.83, management: 9.37, science: 9.03, history: 9.53, medicine: 8.50, military: 8.43 },
  { rank: 3, model: "Gemini-2.5-Pro-Preview", organization: "Google", accessType: "API", evalDate: "2025.7.21", relativeScore: 97.22, absoluteScore: 91.07, engineering: 9.20, economics: 9.47, education: 9.20, law: 9.30, literature: 8.43, management: 9.63, science: 9.07, history: 9.40, medicine: 8.50, military: 8.87 },
  { rank: 4, model: "Gemini-2.5-Pro-Preview-Thinking", organization: "Google", accessType: "API", evalDate: "2025.7.21", relativeScore: 97.15, absoluteScore: 91.00, engineering: 9.13, economics: 9.50, education: 9.37, law: 9.47, literature: 8.40, management: 9.63, science: 9.20, history: 9.27, medicine: 8.30, military: 8.73 },
  { rank: 5, model: "DeepSeek-V3", organization: "DeepSeek", accessType: "API", evalDate: "2025.7.21", relativeScore: 96.48, absoluteScore: 90.37, engineering: 9.30, economics: 9.57, education: 8.93, law: 9.23, literature: 8.60, management: 9.13, science: 8.97, history: 9.47, medicine: 8.83, military: 8.33 },
  { rank: 6, model: "Qwen3-235B", organization: "Alibaba Cloud", accessType: "API", evalDate: "2025.7.21", relativeScore: 96.44, absoluteScore: 90.33, engineering: 9.23, economics: 9.43, education: 9.03, law: 9.50, literature: 8.23, management: 9.43, science: 8.97, history: 9.17, medicine: 8.73, military: 8.60 },
  { rank: 7, model: "Doubao-1.5-Pro-256K", organization: "ByteDance", accessType: "API", evalDate: "2025.7.21", relativeScore: 95.69, absoluteScore: 89.63, engineering: 8.83, economics: 9.03, education: 9.13, law: 9.43, literature: 8.57, management: 9.27, science: 8.83, history: 9.10, medicine: 8.60, military: 8.83 },
  { rank: 8, model: "GLM-4.6", organization: "Zhipu AI", accessType: "API", evalDate: "2025.9.30", relativeScore: 95.26, absoluteScore: 89.23, engineering: 8.80, economics: 9.27, education: 8.70, law: 9.23, literature: 8.40, management: 9.63, science: 8.90, history: 9.30, medicine: 8.43, military: 8.57 },
  { rank: 9, model: "QwQ-32B", organization: "Alibaba Cloud", accessType: "API", evalDate: "2025.8.1", relativeScore: 94.52, absoluteScore: 88.54, engineering: 8.30, economics: 9.46, education: 9.23, law: 9.33, literature: 7.83, management: 9.46, science: 8.65, history: 9.27, medicine: 8.57, military: 8.43 },
  { rank: 10, model: "Kimi-K2", organization: "Moonshot AI", accessType: "API", evalDate: "2025.9.5", relativeScore: 94.27, absoluteScore: 88.30, engineering: 9.23, economics: 9.17, education: 8.80, law: 9.00, literature: 8.40, management: 9.17, science: 8.77, history: 9.13, medicine: 8.53, military: 8.10 },
  { rank: 11, model: "GPT-5", organization: "OpenAI", accessType: "API", evalDate: "2025.8.7", relativeScore: 93.84, absoluteScore: 87.90, engineering: 8.83, economics: 9.37, education: 8.90, law: 8.87, literature: 8.10, management: 9.10, science: 8.90, history: 9.03, medicine: 8.50, military: 8.30 },
  { rank: 12, model: "Claude-Sonnet-4.5-Thinking", organization: "Anthropic", accessType: "API", evalDate: "2025.9.29", relativeScore: 93.48, absoluteScore: 87.57, engineering: 8.90, economics: 9.17, education: 8.80, law: 8.97, literature: 8.00, management: 9.23, science: 8.90, history: 9.00, medicine: 8.27, military: 8.33 },
  { rank: 13, model: "o1-2024-12-17", organization: "OpenAI", accessType: "API", evalDate: "2025.7.21", relativeScore: 93.35, absoluteScore: 87.43, engineering: 8.90, economics: 9.30, education: 8.67, law: 8.77, literature: 7.73, management: 9.27, science: 8.90, history: 8.97, medicine: 8.17, military: 8.77 },
  { rank: 14, model: "Claude-Sonnet-4.5", organization: "Anthropic", accessType: "API", evalDate: "2025.9.29", relativeScore: 93.31, absoluteScore: 87.40, engineering: 8.80, economics: 8.97, education: 8.93, law: 8.73, literature: 8.37, management: 9.10, science: 8.97, history: 8.93, medicine: 8.13, military: 8.47 },
  { rank: 15, model: "Gemini-2.5-Flash-Thinking", organization: "Google", accessType: "API", evalDate: "2025.8.1", relativeScore: 92.74, absoluteScore: 86.87, engineering: 8.67, economics: 9.27, education: 8.70, law: 9.00, literature: 7.80, management: 8.93, science: 8.90, history: 9.00, medicine: 8.03, military: 8.57 },
  { rank: 16, model: "DeepSeek-V3.2", organization: "DeepSeek", accessType: "API", evalDate: "2025.12.1", relativeScore: 92.27, absoluteScore: 86.43, engineering: 8.73, economics: 9.13, education: 8.53, law: 8.70, literature: 7.40, management: 9.33, science: 8.87, history: 9.37, medicine: 8.53, military: 7.83 },
  { rank: 17, model: "Qwen3-32B", organization: "Alibaba Cloud", accessType: "API", evalDate: "2025.7.21", relativeScore: 92.21, absoluteScore: 86.37, engineering: 8.43, economics: 9.10, education: 8.57, law: 9.10, literature: 7.77, management: 9.47, science: 8.67, history: 9.30, medicine: 7.70, military: 8.27 },
  { rank: 18, model: "Claude-Sonnet-4-Thinking", organization: "Anthropic", accessType: "API", evalDate: "2025.7.21", relativeScore: 91.03, absoluteScore: 85.27, engineering: 8.57, economics: 9.00, education: 8.63, law: 8.73, literature: 7.57, management: 9.10, science: 8.93, history: 8.70, medicine: 7.97, military: 8.07 },
  { rank: 19, model: "Claude-Sonnet-4", organization: "Anthropic", accessType: "API", evalDate: "2025.7.21", relativeScore: 91.00, absoluteScore: 85.23, engineering: 8.57, economics: 8.80, education: 8.50, law: 8.70, literature: 7.80, management: 9.03, science: 8.80, history: 8.80, medicine: 8.17, military: 8.07 },
  { rank: 20, model: "GPT-4o-Search-Preview", organization: "OpenAI", accessType: "API", evalDate: "2025.7.21", relativeScore: 89.40, absoluteScore: 83.73, engineering: 8.27, economics: 8.77, education: 8.43, law: 8.67, literature: 7.77, management: 8.80, science: 8.20, history: 8.73, medicine: 8.27, military: 7.83 },
  { rank: 21, model: "GLM-4-32B", organization: "Tsinghua & Zhipu AI", accessType: "API", evalDate: "2025.8.1", relativeScore: 88.43, absoluteScore: 82.83, engineering: 7.77, economics: 8.97, education: 8.33, law: 8.33, literature: 7.03, management: 9.13, science: 8.27, history: 8.77, medicine: 8.23, military: 8.00 },
  { rank: 22, model: "GPT-4o-2024-11-20", organization: "OpenAI", accessType: "API", evalDate: "2025.7.21", relativeScore: 88.08, absoluteScore: 82.50, engineering: 7.90, economics: 8.67, education: 8.30, law: 8.33, literature: 7.17, management: 8.97, science: 8.57, history: 8.67, medicine: 7.63, military: 8.30 },
  { rank: 23, model: "Gemini-1.5-Pro", organization: "Google", accessType: "API", evalDate: "2025.8.1", relativeScore: 85.92, absoluteScore: 80.47, engineering: 8.13, economics: 8.45, education: 8.30, law: 8.37, literature: 7.04, management: 8.17, science: 8.43, history: 8.50, medicine: 7.48, military: 7.60 },
  { rank: 24, model: "Qwen2.5-32B-Instruct", organization: "Alibaba Cloud", accessType: "API", evalDate: "2025.8.1", relativeScore: 85.07, absoluteScore: 79.68, engineering: 7.70, economics: 8.57, education: 8.33, law: 8.33, literature: 6.70, management: 8.50, science: 8.17, history: 7.70, medicine: 7.60, military: 8.08 },
  { rank: 25, model: "o3-Mini", organization: "OpenAI", accessType: "API", evalDate: "2025.7.21", relativeScore: 84.13, absoluteScore: 78.80, engineering: 7.97, economics: 8.60, education: 8.30, law: 8.20, literature: 6.73, management: 8.57, science: 8.53, history: 7.17, medicine: 7.03, military: 7.70 },
  { rank: 26, model: "GPT-4 Turbo", organization: "OpenAI", accessType: "API", evalDate: "2023.11.18", relativeScore: 78.56, absoluteScore: 73.60, engineering: 6.97, economics: 8.17, education: 8.33, law: 7.80, literature: 6.00, management: 7.57, science: 8.13, history: 7.00, medicine: 6.43, military: 7.20 },
  { rank: 27, model: "Yi-34B-Chat", organization: "01.AI", accessType: "API", evalDate: "2023.12.1", relativeScore: 70.17, absoluteScore: 65.70, engineering: 5.77, economics: 6.63, education: 7.37, law: 7.53, literature: 5.47, management: 5.77, science: 5.47, history: 7.47, medicine: 6.30, military: 7.93 },
  { rank: 28, model: "ChatGLM-Pro", organization: "Tsinghua & Zhipu AI", accessType: "API", evalDate: "2023.11.1", relativeScore: 69.14, absoluteScore: 64.73, engineering: 5.90, economics: 7.07, education: 7.03, law: 7.90, literature: 5.43, management: 6.33, science: 5.00, history: 6.67, medicine: 5.97, military: 7.43 },
  { rank: 29, model: "GPT-4-0613", organization: "OpenAI", accessType: "API", evalDate: "2023.9.29", relativeScore: 66.17, absoluteScore: 61.97, engineering: 6.50, economics: 6.73, education: 6.60, law: 6.73, literature: 5.43, management: 6.10, science: 6.47, history: 5.30, medicine: 5.20, military: 6.90 },
  { rank: 30, model: "GPT-3.5-Turbo", organization: "OpenAI", accessType: "API", evalDate: "2023.9.29", relativeScore: 55.42, absoluteScore: 51.90, engineering: 4.97, economics: 5.37, education: 6.40, law: 6.47, literature: 4.43, management: 4.67, science: 5.43, history: 4.20, medicine: 4.37, military: 5.60 },
];

export const disciplineColumns = [
  { key: "engineering" as const, label: "Engineering" },
  { key: "economics" as const, label: "Economics" },
  { key: "education" as const, label: "Education" },
  { key: "law" as const, label: "Law" },
  { key: "literature" as const, label: "Literature" },
  { key: "management" as const, label: "Management" },
  { key: "science" as const, label: "Science" },
  { key: "history" as const, label: "History" },
  { key: "medicine" as const, label: "Medicine" },
  { key: "military" as const, label: "Military" },
];
