"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Listings } from "./schema";
import { DataTableColumnHeader } from "./ColumnHeader";
import { DataTableRowActions } from "./RowAction";

export const columns: ColumnDef<Listings>[] = [
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
    accessorKey: "propertyName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Property Name" />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("propertyName")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "listingType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Listing Type" />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("listingType")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "propertyType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Property Type" />
    ),
    cell: ({ row }) => <div>{row.getValue("propertyType")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("price")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions
        api="listing"
        row={row}
        title={row.original.propertyName}
        fields={[
          { label: "Property Name", key: "propertyName" },
          { label: "Listing Type", key: "listingType" },
          { label: "Property Type", key: "propertyType" },
          { label: "Price", key: "price" },
          { label: "Description", key: "description" },
          { label: "Address", key: "address" },
          { label: "City", key: "city" },
          { label: "State", key: "state" },
          { label: "Postal Code", key: "postalCode" },
          { label: "Bedrooms", key: "bedrooms" },
          { label: "Bathrooms", key: "bathrooms" },
          { label: "Area", key: "area" },
          { label: "Contact Number", key: "contactNumber" },
          { label: "Dealer", key: "dealer" },
          { label: "Created At", key: "createdAt" },
        ]}
      />
    ),
  },
];
