"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { DataTable } from "@/components/DataTable/DataTable";
import { useToast } from "@/hooks/use-toast";
import TopHeader from "@/components/TopHeader";
import Loader from "@/components/Loader";
import { Listings } from "@/components/DataTable/schema";
import SectionHeader from "@/components/SectionHeader";
import CustomButton, { ButtonVariant } from "@/components/CustomButton";
import { columns } from "@/components/DataTable/ListingColumn";

const Dashboard = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { data: session } = useSession();
  const [listings, setListings] = useState<Listings[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      if (!session?.user?.id) return;

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listing?dealerId=${session.user.id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch listings");
        }

        const data: Listings[] = await response.json();
        setListings(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
        toast({
          description: "Failed to fetch listings. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [session, toast]);

  const handleAddClick = () => {
    router.push("/dealer/create");
  };

  return (
    <section className="flex flex-col h-full">
      <TopHeader />
      <SectionHeader title="Listings">
        <CustomButton
          variant={ButtonVariant.DEFAULT}
          text="Add New Listing"
          onClick={handleAddClick}
        />
      </SectionHeader>
      {loading ? (
        <div className="flex flex-1 justify-center items-center">
          <Loader />
        </div>
      ) : listings.length > 0 ? (
        <DataTable data={listings} columns={columns} />
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mt-4">Oops!</h1>
          <p className="text-dark-secondary text-lg mt-2">
            There are currently no listings available.
          </p>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
