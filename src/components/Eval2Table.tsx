"use client";

import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { eval2Data, type Eval2Score } from "@/data/leaderboard-eval2";

const columns: ColumnDef<Eval2Score>[] = [
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
  { accessorKey: "model", header: "Model", cell: ({ getValue }) => <span className="font-semibold text-foreground">{getValue<string>()}</span>, size: 160 },
  { accessorKey: "total", header: "Total", cell: ({ getValue }) => <span className="font-mono text-sm font-medium text-accent">{getValue<number>().toFixed(2)}</span>, size: 70 },
  { accessorKey: "objAccuracy", header: "Obj.Acc", cell: ({ getValue }) => <span className="font-mono text-sm">{getValue<number>().toFixed(3)}</span>, size: 70 },
  { accessorKey: "objExplanation", header: "Obj.Exp", cell: ({ getValue }) => <span className="font-mono text-sm">{getValue<number>().toFixed(3)}</span>, size: 70 },
  { accessorKey: "accuracy", header: "Accuracy", cell: ({ getValue }) => <span className="font-mono text-sm">{getValue<number>().toFixed(3)}</span>, size: 80 },
  { accessorKey: "fluency", header: "Fluency", cell: ({ getValue }) => <span className="font-mono text-sm">{getValue<number>().toFixed(3)}</span>, size: 70 },
  { accessorKey: "logic", header: "Logic", cell: ({ getValue }) => <span className="font-mono text-sm">{getValue<number>().toFixed(3)}</span>, size: 70 },
  { accessorKey: "informativeness", header: "Info.", cell: ({ getValue }) => <span className="font-mono text-sm">{getValue<number>().toFixed(3)}</span>, size: 60 },
];

export function Eval2Table() {
  const [sorting, setSorting] = useState<SortingState>([{ id: "total", desc: true }]);

  const table = useReactTable({
    data: eval2Data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div>
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
        12 disciplines, 480 questions (objective + subjective). Total score on 0–100 scale.
        Data from <a href="https://github.com/llmeval/LLMEval-2" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LLMEval-2</a> (2023).
      </p>
    </div>
  );
}
