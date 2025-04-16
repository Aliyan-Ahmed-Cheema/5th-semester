"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import CustomButton, { ButtonVariant } from "@/components/CustomButton";
import Loader from "@/components/Loader";
import SectionHeader from "@/components/SectionHeader";
import TopHeader from "@/components/TopHeader";
import { DataTable } from "@/components/DataTable/DataTable";
import { columns } from "@/components/DataTable/AgreementColumns";
import { Agreement } from "@/components/DataTable/schema";

const Agreements = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [agreements, setAgreements] = useState<Agreement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgreements = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/agreement`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch agreements");
        }

        const data = await response.json();

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
  }, [toast]);

  const handleAddClick = () => {
    router.push("/admin/agreements/create");
  };

  return (
    <section className="flex flex-col h-full">
      <TopHeader />
      <SectionHeader title="Agreements">
        <CustomButton
          variant={ButtonVariant.DEFAULT}
          text="Add New Agreement"
          onClick={handleAddClick}
        />
      </SectionHeader>
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
