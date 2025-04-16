"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Agreement } from "./schema";
import { DataTableColumnHeader } from "./ColumnHeader";
import { DataTableRowActions } from "./RowAction";

export const columns: ColumnDef<Agreement>[] = [
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
    accessorKey: "dealer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dealer" />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("dealer")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "property",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Property" />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("property")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "client",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Client" />
    ),
    cell: ({ row }) => <div>{row.getValue("client")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "agreementType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Agreement Type" />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("agreementType")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions
        api="agreement"
        row={row}
        title={row.original.property}
        fields={getFieldsWithData(row.original)}
      />
    ),
  },
];

const getFieldsWithData = (rowData: Agreement) => {
  const mandatoryFields = [
    { label: "Dealer", key: "dealer" as keyof Agreement },
    { label: "Property", key: "property" as keyof Agreement },
    { label: "Client", key: "client" as keyof Agreement },
    { label: "Agreement Type", key: "agreementType" as keyof Agreement },
  ];

  const additionalFields = [
    { label: "Price", key: "price" as keyof Agreement },
    { label: "Rent Amount", key: "rentAmount" as keyof Agreement },
    { label: "Duration", key: "duration" as keyof Agreement },
    { label: "Lease Amount", key: "leaseAmount" as keyof Agreement },
    { label: "Lease Terms", key: "leaseTerms" as keyof Agreement },
  ];

  let fieldsToRender = mandatoryFields;

  fieldsToRender = [
    ...fieldsToRender,
    ...additionalFields.filter(
      (field) => rowData[field.key] && rowData[field.key] !== ""
    ),
  ];

  return fieldsToRender;
};
