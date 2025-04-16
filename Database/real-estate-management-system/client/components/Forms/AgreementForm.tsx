"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import CustomButton, { ButtonVariant } from "@/components/CustomButton";
import SectionHeader from "@/components/SectionHeader";
import TopHeader from "@/components/TopHeader";
import { useToast } from "@/hooks/use-toast";
import { SelectItem } from "@/components/ui/select";
import Loader from "@/components/Loader";

type Dealer = {
  id: string;
  firstName: string;
  lastName: string;
};

type Property = {
  id: string;
  propertyName: string;
};

type Client = {
  id: string;
  firstName: string;
  lastName: string;
};

const formSchema = z.object({
  dealerId: z.string({ required_error: "Dealer is required" }),
  propertyId: z.string({ required_error: "Property is required" }),
  clientId: z.string({ required_error: "Client is required" }),
  agreementType: z.enum(["SALE", "RENT", "LEASE"]),
  price: z.string().optional(),
  rentAmount: z.string().optional(),
  duration: z.string().optional(),
  leaseAmount: z.string().optional(),
  leaseTerms: z.string().optional(),
});

const AgreementForm = () => {
  const { toast } = useToast();
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);
  const [dealersLoading, setDealersLoading] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { watch, setValue } = form;
  const agreementType = watch("agreementType");

  useEffect(() => {
    const fetchDealers = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/dealers`
        );
        if (!response.ok) throw new Error("Failed to fetch dealers");
        const data: Dealer[] = await response.json();
        setDealers(data);
      } catch (error) {
        console.error("Error fetching dealers:", error);
      } finally {
        setDealersLoading(false);
      }
    };

    fetchDealers();
  }, []);

  const handleDealerChange = async (dealerId: string) => {
    setValue("propertyId", "");
    setValue("clientId", "");
    setProperties([]);
    setClients([]);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listing?dealerId=${dealerId}`
      );
      if (!response.ok) throw new Error("Failed to fetch properties");
      const data: Property[] = await response.json();
      setProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handlePropertyChange = async (propertyId: string) => {
    setValue("clientId", "");
    setClients([]);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listing/interested-clients?propertyId=${propertyId}`
      );
      if (!response.ok) throw new Error("Failed to fetch clients");
      const data: Client[] = await response.json();
      setClients(data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/agreement/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create agreement");
      }

      toast({
        description: "Agreement created successfully!",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      toast({
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-8">
        {dealersLoading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            <div className="flex space-x-4">
              <div className="flex-1">
                <CustomFormField
                  fieldType={FormFieldType.SELECT}
                  control={form.control}
                  name="dealerId"
                  label="Dealer"
                  placeholder="Select a dealer"
                  onChange={(e) => handleDealerChange(e.target.value)}
                >
                  {dealers.map((dealer) => (
                    <SelectItem key={dealer.id} value={dealer.id}>
                      {dealer.firstName} {dealer.lastName}
                    </SelectItem>
                  ))}
                </CustomFormField>
              </div>
              <div className="flex-1">
                <CustomFormField
                  fieldType={FormFieldType.SELECT}
                  control={form.control}
                  name="propertyId"
                  label="Property"
                  placeholder="Select a property"
                  disabled={properties.length === 0}
                  onChange={(e) => handlePropertyChange(e.target.value)}
                >
                  {properties.map((property) => (
                    <SelectItem key={property.id} value={property.id}>
                      {property.propertyName}
                    </SelectItem>
                  ))}
                </CustomFormField>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <CustomFormField
                  fieldType={FormFieldType.SELECT}
                  control={form.control}
                  name="clientId"
                  label="Client"
                  placeholder="Select a client"
                  disabled={clients.length === 0}
                >
                  {clients.map((client) => (
                    <SelectItem key={client.id} value={client.id}>
                      {client.firstName} {client.lastName}
                    </SelectItem>
                  ))}
                </CustomFormField>
              </div>
              <div className="flex-1">
                <CustomFormField
                  fieldType={FormFieldType.SELECT}
                  control={form.control}
                  name="agreementType"
                  label="Agreement Type"
                  placeholder="Select an agreement type"
                >
                  <SelectItem value="SALE">Sale</SelectItem>
                  <SelectItem value="RENT">Rent</SelectItem>
                  <SelectItem value="LEASE">Lease</SelectItem>
                </CustomFormField>
              </div>
            </div>

            {agreementType === "SALE" && (
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                type="number"
                name="price"
                label="Price"
                placeholder="Enter sale price"
              />
            )}

            {agreementType === "RENT" && (
              <div className="flex space-x-4">
                <div className="flex-1">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    type="number"
                    name="rentAmount"
                    label="Rent Amount"
                    placeholder="Enter rent amount"
                  />
                </div>
                <div className="flex-1">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    type="number"
                    name="duration"
                    label="Duration"
                    placeholder="Enter rental duration (e.g., 12 months)"
                  />
                </div>
              </div>
            )}

            {agreementType === "LEASE" && (
              <div className="flex space-x-4">
                <div className="flex-1">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    type="number"
                    name="leaseAmount"
                    label="Lease Amount"
                    placeholder="Enter lease amount"
                  />
                </div>
                <div className="flex-1">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="leaseTerms"
                    label="Lease Terms"
                    placeholder="Enter lease terms"
                  />
                </div>
              </div>
            )}

            <CustomButton
              variant={ButtonVariant.DEFAULT}
              text={loading ? "Creating..." : "Create Agreement"}
              type="submit"
              isLoading={loading}
              disabled={loading}
            />
          </>
        )}
      </form>
    </Form>
  );
};

export default AgreementForm;
