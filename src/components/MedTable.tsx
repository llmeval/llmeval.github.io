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
import { medData, type MedScore } from "@/data/leaderboard-med";

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 60
      ? "text-green-600 dark:text-green-400"
      : score >= 45
        ? "text-blue-600 dark:text-blue-400"
        : score >= 25
          ? "text-yellow-600 dark:text-yellow-400"
          : "text-muted-foreground";
  return <span className={`font-mono text-sm font-medium ${color}`}>{score.toFixed(2)}</span>;
}

const columns: ColumnDef<MedScore>[] = [
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
      <div>
        <span className="font-semibold text-foreground">{row.original.model}</span>
        <span
          className={`ml-2 inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
            row.original.category === "Open-source"
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : row.original.category === "Closed-source"
                ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
          }`}
        >
          {row.original.category}
        </span>
      </div>
    ),
    size: 220,
  },
  { accessorKey: "overall", header: "Overall", cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} />, size: 80 },
  { accessorKey: "mk", header: "MK", cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} />, size: 70 },
  { accessorKey: "mlu", header: "MLU", cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} />, size: 70 },
  { accessorKey: "mr", header: "MR", cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} />, size: 70 },
  { accessorKey: "mse", header: "MSE", cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} />, size: 70 },
  { accessorKey: "mtg", header: "MTG", cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} />, size: 70 },
];

export function MedTable() {
  const [sorting, setSorting] = useState<SortingState>([{ id: "overall", desc: true }]);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const filteredData = useMemo(
    () => (categoryFilter ? medData.filter((d) => d.category === categoryFilter) : medData),
    [categoryFilter]
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {[null, "Open-source", "Closed-source", "Specialized"].map((cat) => (
          <button
            key={cat ?? "all"}
            onClick={() => setCategoryFilter(cat)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              categoryFilter === cat
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat ?? "All"}
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
        Usability rates (%) across 5 medical dimensions. MK = Medical Knowledge, MLU = Medical Language Understanding,
        MR = Medical Reasoning, MSE = Medical Safety & Ethics, MTG = Medical Text Generation.
        Data from <a href="https://github.com/llmeval/LLMEval-Med" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LLMEval-Med</a> (EMNLP 2025).
      </p>
    </div>
  );
}
