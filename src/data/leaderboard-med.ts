export interface MedScore {
  model: string;
  category: "Open-source" | "Closed-source" | "Specialized";
  overall: number;
  mk: number;
  mlu: number;
  mr: number;
  mse: number;
  mtg: number;
}

export const medData: MedScore[] = [
  { model: "DeepSeek-R1", category: "Open-source", overall: 64.23, mk: 84.16, mlu: 69.64, mr: 63.40, mse: 59.63, mtg: 44.33 },
  { model: "Qwen2.5-72B", category: "Open-source", overall: 51.53, mk: 55.56, mlu: 47.42, mr: 50.83, mse: 60.55, mtg: 43.30 },
  { model: "Qwen2.5-32B", category: "Open-source", overall: 48.87, mk: 52.25, mlu: 46.48, mr: 42.24, mse: 61.11, mtg: 42.27 },
  { model: "DeepSeek-V3", category: "Open-source", overall: 48.03, mk: 51.06, mlu: 53.68, mr: 38.24, mse: 47.71, mtg: 49.48 },
  { model: "Mistral-24B", category: "Open-source", overall: 46.42, mk: 45.15, mlu: 43.35, mr: 28.10, mse: 50.15, mtg: 22.68 },
  { model: "Llama-3.1-8B", category: "Open-source", overall: 26.65, mk: 16.78, mlu: 20.50, mr: 18.63, mse: 25.38, mtg: 29.90 },
  { model: "o1-preview", category: "Closed-source", overall: 61.23, mk: 65.25, mlu: 63.85, mr: 62.75, mse: 64.81, mtg: 49.48 },
  { model: "GPT-4o", category: "Closed-source", overall: 58.73, mk: 61.23, mlu: 56.34, mr: 55.23, mse: 56.27, mtg: 64.58 },
  { model: "o1-mini", category: "Closed-source", overall: 57.86, mk: 56.03, mlu: 60.09, mr: 60.40, mse: 63.30, mtg: 49.48 },
  { model: "Baichuan-M1", category: "Specialized", overall: 60.34, mk: 70.69, mlu: 63.22, mr: 62.09, mse: 50.76, mtg: 54.95 },
  { model: "Baichuan-M1-14B", category: "Specialized", overall: 55.43, mk: 62.88, mlu: 40.53, mr: 55.23, mse: 70.03, mtg: 48.45 },
  { model: "HuatuoGPT-o1-72B", category: "Specialized", overall: 52.27, mk: 53.43, mlu: 49.45, mr: 56.86, mse: 56.27, mtg: 45.36 },
  { model: "DISC-MedLLM", category: "Specialized", overall: 11.34, mk: 7.09, mlu: 10.02, mr: 7.52, mse: 23.24, mtg: 2.06 },
];
