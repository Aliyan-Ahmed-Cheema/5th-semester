"use client";

import SectionHeader from "@/components/SectionHeader";
import TopHeader from "@/components/TopHeader";
import AgreementForm from "@/components/Forms/AgreementForm";

const CreateAgreements = () => {
  return (
    <>
      <TopHeader />
      <SectionHeader title="Create New Agreement" />
      <AgreementForm />
    </>
  );
};

export default CreateAgreements;
