"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import TopHeader from "@/components/TopHeader";
import Loader from "@/components/Loader";
import { Users, Building, FileText } from "lucide-react";

interface CountResponse {
  count: number;
}

const Dashboard = () => {
  const { toast } = useToast();
  const [users, setUsers] = useState<CountResponse>({ count: 0 });
  const [listings, setListings] = useState<CountResponse>({ count: 0 });
  const [agreements, setAgreements] = useState<CountResponse>({ count: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, listingsRes, agreementsRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/count`),
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listing/count`),
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/agreement/count`),
        ]);

        if (!usersRes.ok || !listingsRes.ok || !agreementsRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const usersData: CountResponse = await usersRes.json();
        const listingsData: CountResponse = await listingsRes.json();
        const agreementsData: CountResponse = await agreementsRes.json();

        setUsers(usersData);
        setListings(listingsData);
        setAgreements(agreementsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast({
          description: "Failed to fetch data. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast]);

  return (
    <section className="flex flex-col h-full">
      <TopHeader />
      {loading ? (
        <div className="flex flex-1 justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
            <Users className="w-12 h-12 text-blue-500 mb-2" />
            <h2 className="text-xl font-medium">Total Users</h2>
            <p className="text-4xl mt-2">{users.count}</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
            <Building className="w-12 h-12 text-green-500 mb-2" />
            <h2 className="text-xl font-medium">Total Listings</h2>
            <p className="text-4xl mt-2">{listings.count}</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
            <FileText className="w-12 h-12 text-purple-500 mb-2" />
            <h2 className="text-xl font-medium">Total Agreements</h2>
            <p className="text-4xl mt-2">{agreements.count}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
