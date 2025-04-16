"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { DataTable } from "@/components/DataTable/DataTable";
import { columns } from "@/components/DataTable/Columns";
import { useToast } from "@/hooks/use-toast";
import TopHeader from "@/components/TopHeader";
import SectionHeader from "@/components/SectionHeader";
import Loader from "@/components/Loader";
import { User } from "@/components/DataTable/schema";

const Users = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { data: session } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast({
          description: "Failed to fetch users. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [toast]);

  return (
    <section className="flex flex-col h-full">
      <TopHeader />
      <SectionHeader title="Users" />
      {loading ? (
        <div className="flex flex-1 justify-center items-center">
          <Loader />
        </div>
      ) : users.length > 0 ? (
        <DataTable data={users} columns={columns} />
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mt-4">Oops!</h1>
          <p className="text-dark-secondary text-lg mt-2">
            There are currently no users in the system.
          </p>
        </div>
      )}
    </section>
  );
};

export default Users;
