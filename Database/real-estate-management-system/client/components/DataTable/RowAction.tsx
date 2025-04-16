"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import ModalDialog from "@/components/Modal";
import { useToast } from "@/hooks/use-toast";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
};

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  title: string;
  fields: Array<{ label: string; key: keyof TData; value?: string }>;
  api: "user" | "listing" | "agreement";
}

export function DataTableRowActions<TData extends { id: string }>({
  row,
  title,
  fields,
  api,
}: DataTableRowActionsProps<TData>) {
  const { toast } = useToast();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleViewClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleDelete = async () => {
    const id = row.original.id;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${api}/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        toast({
          description: `${api} deleted successfully.`,
        });
        setDeleteModalOpen(false);
      } else {
        toast({
          description: `Failed to delete ${api}.`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error deleting record:", error);
      toast({
        description: "An error occurred while deleting the record.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleViewClick}>View</DropdownMenuItem>
          <DropdownMenuItem onClick={handleOpenDeleteModal}>
            Delete
          </DropdownMenuItem>{" "}
        </DropdownMenuContent>
      </DropdownMenu>

      <ModalDialog
        isOpen={isModalOpen}
        title={`Details of ${title}`}
        description="View the full details of the selected item"
        onClose={handleCloseModal}
      >
        <div className="space-y-1">
          {fields.map((field) => (
            <p className="text-gray-600" key={String(field.key)}>
              <span className="text-gray-800 font-medium">
                {field.label}:&nbsp;
              </span>
              {field.key === "createdAt"
                ? formatDate(row.original[field.key] as string)
                : (row.original[field.key] as
                    | string
                    | number
                    | React.ReactNode)}
            </p>
          ))}
        </div>
      </ModalDialog>

      <ModalDialog
        isOpen={isDeleteModalOpen}
        title={`Confirm Delete`}
        description={`Are you sure you want to delete this ${api}? This action cannot be undone.`}
        onClose={handleCloseDeleteModal}
      >
        <div className="space-x-2 flex justify-end">
          <Button variant="outline" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </ModalDialog>
    </>
  );
}
