"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import { SelectItem } from "@/components/ui/select";
import CustomButton, { ButtonVariant } from "@/components/CustomButton";
import { listingSchema } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ListingForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = listingSchema;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const payload = {
      ...values,
      listingType: values.listingType.toUpperCase(),
      propertyType: values.propertyType.toUpperCase(),
      state: values.state.toUpperCase(),
      dealerId: session?.user.id,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/listing/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      toast({
        description: data.message,
        variant: "default",
      });
      router.push("/dealer");
    } catch (error) {
      console.error("Error:", error);
      toast({
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-8">
        <div className="flex space-x-4">
          <div className="flex-1">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="propertyName"
              label="Property Name"
              placeholder="Modern Apartment"
            />
          </div>
          <div className="flex-1">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              type="number"
              name="price"
              label="Price (PKR)"
              placeholder="1,000,000"
            />
          </div>
        </div>

        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="description"
          label="Description"
          placeholder="Enter property details"
        />

        <div className="flex space-x-4">
          <div className="flex-1">
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="listingType"
              label="Listing Type"
              placeholder="Select listing type"
            >
              <SelectItem value="sale">For Sale</SelectItem>
              <SelectItem value="rent">For Rent</SelectItem>
            </CustomFormField>
          </div>
          <div className="flex-1">
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="propertyType"
              label="Property Type"
              placeholder="Select property type"
            >
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="land">Land</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </CustomFormField>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="address"
              label="Address"
              placeholder="123 Main St"
            />
          </div>
          <div className="flex-1">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="city"
              label="City"
              placeholder="Lahore"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="state"
              label="State"
              placeholder="Select a state"
            >
              <SelectItem value="punjab">Punjab</SelectItem>
              <SelectItem value="sindh">Sindh</SelectItem>
              <SelectItem value="balochistan">Balochistan</SelectItem>
              <SelectItem value="khyber">Khyber Pakhtunkhwa</SelectItem>
            </CustomFormField>
          </div>
          <div className="flex-1">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              type="number"
              name="postalCode"
              label="Postal Code"
              placeholder="05450"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              type="number"
              name="bedrooms"
              label="Bedrooms"
              placeholder="2"
            />
          </div>
          <div className="flex-1">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              type="number"
              name="bathrooms"
              label="Bathrooms"
              placeholder="1"
            />
          </div>
        </div>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          type="number"
          name="area"
          label="Area (sq ft)"
          placeholder="1200"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          type="number"
          name="contactNumber"
          label="Contact Number"
          placeholder="+92 303 4720606"
        />

        <CustomButton
          variant={ButtonVariant.DEFAULT}
          text="Create Listing"
          isLoading={isLoading}
          disabled={isLoading}
        />
      </form>
    </Form>
  );
};

export default ListingForm;
