import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authSchema = (type: string) => {
  return z.object({
    firstName:
      type === "login"
        ? z.string().optional()
        : z.string().min(3, "First Name must be at least 3 characters long"),
    lastName:
      type === "login"
        ? z.string().optional()
        : z.string().min(3, "Last Name must be at least 3 characters long"),
    email: z
      .string({ required_error: "Email is required" })
      .email("Please enter a valid email address"),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, "Password must be at least 8 characters long"),
    role: z.string({ required_error: "Please select a role" }),
  });
};

export const listingSchema = z.object({
  propertyName: z.string({ required_error: "Property name is required" }),
  description: z.string({
    required_error: "Description should be at least 10 characters",
  }),
  price: z.coerce
    .number({ required_error: "Price is required" })
    .positive({ message: "Price must be a positive number" }),
  listingType: z.enum(["sale", "rent"]),
  propertyType: z.enum(["house", "apartment", "land", "commercial"]),
  address: z.string({ required_error: "Address is required" }),
  city: z.string({ required_error: "City is required" }),
  state: z.enum(["punjab", "sindh", "balochistan", "khyber"]),
  postalCode: z.string({ required_error: "Postal code is required" }),
  bedrooms: z.coerce
    .number({ required_error: "Bedroom are required" })
    .int()
    .nonnegative({ message: "Must be a non-negative integer" }),
  bathrooms: z.coerce
    .number({ required_error: "Bathrooms are required" })
    .int()
    .nonnegative({ message: "Must be a non-negative integer" }),
  area: z.coerce
    .number({ required_error: "Area is required" })
    .positive({ message: "Area must be a positive number" }),
  contactNumber: z
    .string({ required_error: "Contact Number is required" })
    .min(10, { message: "Contact number is required" }),
});

export const agreementSchema = z.object({
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
