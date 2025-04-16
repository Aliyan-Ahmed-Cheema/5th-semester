"use client";

import TopHeader from "@/components/TopHeader";
import SectionHeader from "@/components/SectionHeader";
import ListingForm from "@/components/Forms/ListingForm";

const CreateListing = () => {
  return (
    <>
      <TopHeader />
      <SectionHeader title="Create New Listing" />
      <ListingForm />
    </>
  );
};

export default CreateListing;
