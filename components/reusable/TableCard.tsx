"use client";
import { useState, useMemo } from "react";
import {
  useReactTable,
  ColumnDef,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/reusable/table";
import { Button } from "./button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  heading?: string;
  showBorder?:boolean
}

export function DataTable<TData, TValue>({
  columns,
  data,
  heading,
  showBorder=true
}: DataTableProps<TData, TValue>) {
  const [showAll, setShowAll] = useState(false);
  const pageSize = 10;

  const paginatedData = useMemo(() => {
    return showAll ? data : data.slice(0, pageSize);
  }, [data, showAll]);

  const table = useReactTable({
    data: paginatedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      {heading && <div className="text-xl font-semibold mb-2">{heading}</div>}
      <div className={`rounded-md flex flex-wrap ${showBorder ? "border" : ""}`}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {!header.isPlaceholder &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          {data.length > 0 && (
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>

        {data.length > pageSize && (
          <Button
            variant="default"
            size="sm"
            onClick={toggleShowAll}
            className="flex w-full justify-start bg-white text-orange-600 text-md border-t hover:bg-white hover:underline"
          >
            {showAll ? "See Less" : "See All"}
          </Button>
        )}
      </div>
    </div>
  );
}
