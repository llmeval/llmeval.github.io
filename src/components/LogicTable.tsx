"use client";

import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { logicData, type LogicScore } from "@/data/leaderboard-logic";

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 60
      ? "text-green-600 dark:text-green-400"
      : score >= 40
        ? "text-blue-600 dark:text-blue-400"
        : score >= 20
          ? "text-yellow-600 dark:text-yellow-400"
          : "text-muted-foreground";
  return <span className={`font-mono text-sm font-medium ${color}`}>{score.toFixed(1)}</span>;
}

const columns: ColumnDef<LogicScore>[] = [
  {
    id: "rank",
    header: "#",
    cell: ({ row }) => {
      const rank = row.index + 1;
      const badge =
        rank === 1
          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
          : rank === 2
            ? "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            : rank === 3
              ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
              : "bg-muted text-muted-foreground";
      return (
        <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${badge}`}>
          {rank}
        </span>
      );
    },
    size: 50,
  },
  {
    accessorKey: "model",
    header: "Model",
    cell: ({ row }) => (
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-semibold text-foreground">{row.original.model}</span>
        <span
          className={`inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
            row.original.config === "Thinking"
              ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
              : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
          }`}
        >
          {row.original.config}
        </span>
        <span
          className={`inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
            row.original.category === "Proprietary"
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
              : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
          }`}
        >
          {row.original.category}
        </span>
      </div>
    ),
    size: 260,
  },
  { accessorKey: "base", header: "Base", cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} />, size: 80 },
  { accessorKey: "hard", header: "Hard", cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} />, size: 80 },
  { accessorKey: "subQ", header: "Hard Sub-Q", cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} />, size: 100 },
  { accessorKey: "formFree", header: "Form. (Free)", cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} />, size: 100 },
  { accessorKey: "formFixed", header: "Form. (Fixed)", cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} />, size: 100 },
];

type Filter = "All" | "Thinking" | "No-Think" | "Proprietary" | "Open-weight";

export function LogicTable() {
  const [sorting, setSorting] = useState<SortingState>([{ id: "hard", desc: true }]);
  const [filter, setFilter] = useState<Filter>("All");

  const filteredData = useMemo(() => {
    if (filter === "All") return logicData;
    if (filter === "Thinking" || filter === "No-Think") return logicData.filter((d) => d.config === filter);
    return logicData.filter((d) => d.category === filter);
  }, [filter]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const filters: Filter[] = ["All", "Thinking", "No-Think", "Proprietary", "Open-weight"];

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {filters.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              filter === cat
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-left">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-border bg-muted/50">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="cursor-pointer px-3 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground select-none"
                    style={{ width: header.getSize() }}
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{ asc: " ↑", desc: " ↓" }[header.column.getIsSorted() as string] ?? ""}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-border transition-colors last:border-0 hover:bg-muted/30">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3 py-2.5">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Accuracy (%) on LLMEval-Logic across 14 frontier LLM configurations from 7 families, mean over 3 independent runs.
        <strong> Base</strong> = Item Acc. on the 246-item Base subset.{" "}
        <strong>Hard</strong> = Item Acc. (all sub-questions must match) on the 190-item adversarially hardened subset.{" "}
        <strong>Hard Sub-Q</strong> = per-sub-question accuracy (938 sub-questions).{" "}
        <strong>Form.</strong> = joint Z3 + rubric formalization accuracy under free / fixed symbol settings.
        Judge: gpt-5.1-chat (validated against Claude Opus 4.6 / Gemini 3.1 Pro, κ ∈ [0.873, 0.922]). Data from{" "}
        <a href="https://arxiv.org/abs/2605.19597" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          LLMEval-Logic
        </a>{" "}
        (arXiv 2026).
      </p>
    </div>
  );
}
