"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "./schema";
import { DataTableColumnHeader } from "./ColumnHeader";
import { DataTableRowActions } from "./RowAction";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "srNo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sr." />
    ),
    cell: ({ row }) => <div>{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Name" />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("firstName")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Name" />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("lastName")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("role")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions
        api="user"
        row={row}
        title={`${row.original.firstName} ${row.original.lastName}`}
        fields={[
          { label: "First Name", key: "firstName" },
          { label: "Last Name", key: "lastName" },
          { label: "Email", key: "email" },
          { label: "Role", key: "role" },
          { label: "Created At", key: "createdAt" },
        ]}
      />
    ),
  },
];
