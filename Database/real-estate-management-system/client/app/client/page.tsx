"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import TopHeader from "@/components/TopHeader";
import Loader from "@/components/Loader";
import { Listings } from "@/types/schema";
import SectionHeader from "@/components/SectionHeader";
import CustomButton, { ButtonVariant } from "@/components/CustomButton";

const ClientDashboard = () => {
  const { toast } = useToast();
  const { data: session } = useSession();
  const [listings, setListings] = useState<Listings[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listing/all`
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
  }, [toast]);

  const handleInterestClick = async (listingId: string) => {
    if (!session?.user?.id) {
      toast({
        description: "You need to be logged in to express interest.",
        variant: "destructive",
      });
      return;
    }

    setProcessingId(listingId);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listing/toggle-interest`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ listingId, userId: session.user.id }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to toggle interest");
      }

      const data = await response.json();

      setListings((prevListings) =>
        prevListings.map((listing) =>
          listing.id === listingId
            ? { ...listing, interestedClients: data.data.interestedClients }
            : listing
        )
      );

      toast({
        description: data.message,
        variant: "default",
      });
    } catch (error) {
      console.error("Error toggling interest:", error);
      toast({
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <section className="flex flex-col h-full">
      <TopHeader />
      <SectionHeader title="Listings" />
      {loading ? (
        <div className="flex flex-1 justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {listings.map((listing) => {
            const isInterested = listing.interestedClients.includes(
              session?.user?.id || ""
            );

            return (
              <div
                key={listing.id}
                className="border space-y-1 rounded-lg p-4 bg-white hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-medium mb-2">
                  {listing.propertyName}
                </h2>
                <p className="text-gray-600">
                  <span className="text-gray-800 font-medium">
                    Price:&nbsp;
                  </span>
                  {listing.price.toLocaleString()}
                </p>
                <p className="text-gray-600">
                  <span className="text-gray-800 font-medium">Type:&nbsp;</span>
                  {listing.propertyType}
                </p>
                <p className="text-gray-600">
                  <span className="text-gray-800 font-medium">
                    Purpose:&nbsp;
                  </span>
                  {listing.listingType}
                </p>
                <p className="text-gray-600">
                  <span className="text-gray-800 font-medium">
                    Location:&nbsp;
                  </span>
                  {listing.city}, {listing.state}
                </p>
                <p className="text-gray-600">
                  <span className="text-gray-800 font-medium">
                    Bedrooms:&nbsp;
                  </span>
                  {listing.bedrooms}
                </p>
                <p className="text-gray-600">
                  <span className="text-gray-800 font-medium">
                    Bathrooms:&nbsp;
                  </span>
                  {listing.bathrooms}
                </p>
                <p className="text-gray-600">
                  <span className="text-gray-800 font-medium">Area:&nbsp;</span>
                  {listing.area} sq ft
                </p>
                <div>
                  <CustomButton
                    variant={ButtonVariant.DEFAULT}
                    text={isInterested ? "Cancel Request" : "I'm Interested"}
                    className="w-full mt-2"
                    isLoading={processingId === listing.id}
                    disabled={processingId === listing.id}
                    onClick={() => handleInterestClick(listing.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ClientDashboard;
