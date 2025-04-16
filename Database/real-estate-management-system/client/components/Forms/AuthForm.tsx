"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import { useState } from "react";
import Link from "next/link";
import { authSchema } from "@/lib/utils";
import { z } from "zod";
import CustomButton, { ButtonVariant } from "../CustomButton";
import { signIn } from "next-auth/react";
import { SelectItem } from "../ui/select";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      if (type === "sign-up") {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
              role: values.role,
            }),
          }
        );

        const result = await response.json();

        if (!response.ok) {
          toast({
            description: result.error,
            variant: "destructive",
          });
        } else {
          toast({
            description: result.message,
            variant: "default",
          });
          router.push("/login");
        }
      } else if (type === "login") {
        const result = await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
          role: values.role,
        });

        if (result?.error) {
          toast({
            description:
              "The credentials provided are invalid. Please try again.",
            variant: "destructive",
          });
        } else {
          switch (values.role) {
            case "ADMIN":
              router.push("/admin");
              break;
            case "DEALER":
              router.push("/dealer");
              break;
            case "CLIENT":
              router.push("/client");
              break;
            default:
              router.push("/");
              break;
          }
        }
      }
    } catch (error) {
      toast({
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <h1 className="text-3xl text-dark-primary font-medium">
            {type === "login" ? "Welcome Back!" : "Create an account"}
          </h1>

          {type === "sign-up" && (
            <div className="flex space-x-4">
              <div className="flex-1">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                />
              </div>
              <div className="flex-1">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                />
              </div>
            </div>
          )}

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="password"
            label="Password"
            placeholder={"********"}
            type="password"
          />

          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="role"
            label="Role"
            placeholder="Select a role"
          >
            <SelectItem value="ADMIN">Admin</SelectItem>
            <SelectItem value="DEALER">Dealer</SelectItem>
            <SelectItem value="CLIENT">Client</SelectItem>
          </CustomFormField>

          <CustomButton
            type="submit"
            variant={ButtonVariant.DEFAULT}
            text={type === "login" ? "Login" : "Sign Up"}
            disabled={isLoading}
            isLoading={isLoading}
            className="w-full"
          />
        </form>
      </Form>

      <p className="text-sm text-center mt-5">
        <span>
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
        </span>
        {type === "login" ? (
          <Link href="/sign-up" className="font-medium ml-1">
            Sign Up
          </Link>
        ) : (
          <Link href="/login" className="font-medium ml-1">
            Login
          </Link>
        )}
      </p>
    </>
  );
};

export default AuthForm;
