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
import { leaderboardData, type ModelScore } from "@/data/leaderboard";

function ScoreBadge({ score, max = 100 }: { score: number; max?: number }) {
  const pct = max === 10 ? score * 10 : score;
  const color =
    pct >= 90
      ? "text-green-600 dark:text-green-400"
      : pct >= 80
        ? "text-blue-600 dark:text-blue-400"
        : pct >= 65
          ? "text-yellow-600 dark:text-yellow-400"
          : "text-muted-foreground";
  return <span className={`font-mono text-sm font-medium ${color}`}>{score.toFixed(max === 10 ? 2 : 2)}</span>;
}

const columns: ColumnDef<ModelScore>[] = [
  {
    accessorKey: "rank",
    header: "#",
    cell: ({ getValue }) => {
      const rank = getValue<number>();
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
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-foreground">{row.original.model}</span>
          <span
            className={`inline-flex rounded-full px-1.5 py-0.5 text-[9px] font-medium leading-none ${
              row.original.accessType === "Open-source"
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
            }`}
          >
            {row.original.accessType === "Open-source" ? "Open" : "Closed"}
          </span>
        </div>
        <div className="text-xs text-muted-foreground">{row.original.organization}</div>
      </div>
    ),
    size: 200,
  },
  {
    accessorKey: "relativeScore",
    header: "Relative",
    cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} />,
    size: 80,
  },
  {
    accessorKey: "absoluteScore",
    header: "Absolute",
    cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} />,
    size: 80,
  },
  {
    accessorKey: "engineering",
    header: "Eng.",
    cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} max={10} />,
    size: 60,
  },
  {
    accessorKey: "economics",
    header: "Econ.",
    cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} max={10} />,
    size: 60,
  },
  {
    accessorKey: "law",
    header: "Law",
    cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} max={10} />,
    size: 60,
  },
  {
    accessorKey: "science",
    header: "Sci.",
    cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} max={10} />,
    size: 60,
  },
  {
    accessorKey: "medicine",
    header: "Med.",
    cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} max={10} />,
    size: 60,
  },
  {
    accessorKey: "management",
    header: "Mgmt.",
    cell: ({ getValue }) => <ScoreBadge score={getValue<number>()} max={10} />,
    size: 60,
  },
];

export function LeaderboardTable() {
  const [sorting, setSorting] = useState<SortingState>([{ id: "absoluteScore", desc: true }]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [showTop, setShowTop] = useState<number | null>(20);
  const [typeFilter, setTypeFilter] = useState<string | null>(null);

  const filteredData = useMemo(() => {
    let data = leaderboardData;
    if (typeFilter) data = data.filter((d) => d.accessType === typeFilter);
    if (showTop) data = data.slice(0, showTop);
    return data;
  }, [showTop, typeFilter]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div>
      {/* Controls */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search models..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="h-10 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:w-64"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {[null, "Open-source", "Closed-source"].map((t) => (
            <button
              key={t ?? "type-all"}
              onClick={() => setTypeFilter(t)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                typeFilter === t
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {t ?? "All Types"}
            </button>
          ))}
          <span className="mx-1 text-border">|</span>
          {[null, 20, 30].map((n) => (
            <button
              key={n ?? "n-all"}
              onClick={() => setShowTop(n)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                showTop === n
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {n ? `Top ${n}` : `All (${leaderboardData.length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
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
                      {{
                        asc: " ↑",
                        desc: " ↓",
                      }[header.column.getIsSorted() as string] ?? ""}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-border transition-colors last:border-0 hover:bg-muted/30"
              >
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
        Click column headers to sort. Absolute scores are on a 0–100 scale; discipline scores on a 0–10 scale.
        Relative scores use the SOTA model (Doubao-1.5-Thinking-Pro) as the 100% baseline.
        59 models from the full appendix of <a href="https://github.com/llmeval/LLMEval-Fair" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LLMEval-Fair</a> (ACL 2026).
      </p>
    </div>
  );
}
