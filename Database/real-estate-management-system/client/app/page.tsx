"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome to the Real Estate Management System
        </h1>
        <p className="text-gray-600 mb-6">
          Manage your properties, clients, and transactions efficiently. Log in
          to access your personalized dashboard.
        </p>
        <Button onClick={() => router.push("/login")}>Login</Button>
      </div>
    </div>
  );
};

export default Page;
