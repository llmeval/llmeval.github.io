export interface LogicScore {
  model: string;
  config: "Thinking" | "No-Think";
  category: "Proprietary" | "Open-weight";
  base: number;
  hard: number;
  subQ: number;
  formFree: number;
  formFixed: number;
}

export const logicData: LogicScore[] = [
  { model: "Gemini 3.1 Pro", config: "Thinking", category: "Proprietary", base: 74.0, hard: 37.5, subQ: 76.0, formFree: 45.12, formFixed: 58.13 },
  { model: "Claude Opus 4.6", config: "Thinking", category: "Proprietary", base: 68.7, hard: 36.7, subQ: 76.6, formFree: 38.62, formFixed: 56.91 },
  { model: "Claude Opus 4.6", config: "No-Think", category: "Proprietary", base: 69.0, hard: 36.0, subQ: 74.4, formFree: 43.50, formFixed: 50.00 },
  { model: "Gemini 3.1 Pro (low-think)", config: "No-Think", category: "Proprietary", base: 73.3, hard: 33.5, subQ: 71.3, formFree: 44.31, formFixed: 54.47 },
  { model: "GPT-5.4 Pro", config: "No-Think", category: "Proprietary", base: 71.8, hard: 33.0, subQ: 70.0, formFree: 32.93, formFixed: 60.16 },
  { model: "GPT-5.4 Pro", config: "Thinking", category: "Proprietary", base: 71.8, hard: 32.6, subQ: 68.4, formFree: 30.08, formFixed: 58.94 },
  { model: "Qwen 3.5 Plus", config: "Thinking", category: "Open-weight", base: 71.3, hard: 29.3, subQ: 70.0, formFree: 36.18, formFixed: 52.44 },
  { model: "Kimi K2.5", config: "Thinking", category: "Open-weight", base: 72.9, hard: 28.1, subQ: 68.4, formFree: 36.18, formFixed: 59.35 },
  { model: "Hy3 preview", config: "Thinking", category: "Open-weight", base: 75.3, hard: 21.6, subQ: 62.7, formFree: 27.64, formFixed: 51.22 },
  { model: "Seed 2.0 Pro", config: "Thinking", category: "Proprietary", base: 75.5, hard: 20.4, subQ: 63.3, formFree: 35.77, formFixed: 56.91 },
  { model: "Seed 2.0 Pro", config: "No-Think", category: "Proprietary", base: 56.2, hard: 6.1, subQ: 39.4, formFree: 30.89, formFixed: 47.56 },
  { model: "Qwen 3.5 Plus", config: "No-Think", category: "Open-weight", base: 42.0, hard: 3.0, subQ: 33.7, formFree: 25.20, formFixed: 35.77 },
  { model: "Kimi K2.5", config: "No-Think", category: "Open-weight", base: 37.9, hard: 1.8, subQ: 27.0, formFree: 27.24, formFixed: 38.62 },
  { model: "Hy3 preview", config: "No-Think", category: "Open-weight", base: 51.4, hard: 0.9, subQ: 27.4, formFree: 21.95, formFixed: 24.80 },
];
