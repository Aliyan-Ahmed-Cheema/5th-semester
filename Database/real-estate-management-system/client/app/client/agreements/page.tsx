"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { DataTable } from "@/components/DataTable/DataTable";
import { useToast } from "@/hooks/use-toast";
import TopHeader from "@/components/TopHeader";
import Loader from "@/components/Loader";
import SectionHeader from "@/components/SectionHeader";
import { columns } from "@/components/DataTable/AgreementColumns";
import { Agreement } from "@/components/DataTable/schema";

const Agreements = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { data: session } = useSession();
  const [agreements, setAgreements] = useState<Agreement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgreements = async () => {
      if (!session?.user?.id) return;

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/agreement/client?clientId=${session.user.id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch agreements");
        }

        const data: Agreement[] = await response.json();
        setAgreements(data);
      } catch (error) {
        console.error("Error fetching agreements:", error);
        toast({
          description: "Failed to fetch agreements. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAgreements();
  }, [session, toast]);

  return (
    <section className="flex flex-col h-full">
      <TopHeader />
      <SectionHeader title="Agreements" />
      {loading ? (
        <div className="flex flex-1 justify-center items-center">
          <Loader />
        </div>
      ) : agreements.length > 0 ? (
        <DataTable data={agreements} columns={columns} />
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mt-4">Oops!</h1>
          <p className="text-dark-secondary text-lg mt-2">
            There are currently no agreements available.
          </p>
        </div>
      )}
    </section>
  );
};

export default Agreements;
