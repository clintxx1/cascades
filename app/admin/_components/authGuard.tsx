"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { HomeIcon, Loader, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FormSchema = z.object({
  passkey: z
    .string({
      required_error: "Please select your passkey",
    })
    .min(1, {
      message: "Passkey must be at least 1 character(s) long",
    }),
});

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      passkey: "",
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("cascadesPassKeyToken");
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

    if (token && secretKey) {
      try {
        const decoded = jwt.verify(token, secretKey) as jwt.JwtPayload;
        if (decoded && Date.now() / 1000 < decoded.exp!) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("cascadesPassKeyToken");
        }
      } catch (err) {
        console.error("Token verification failed:", err);
        localStorage.removeItem("cascadesPassKeyToken");
        setIsAuthenticated(false);
      }
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY as string;

    if (data.passkey === process.env.NEXT_PUBLIC_HASHED_PASSKEY) {
      const expiryTime = Math.floor(Date.now() / 1000) + 8 * 60 * 60; // 8 hours from now
      const token = jwt.sign({ exp: expiryTime }, secretKey);
      localStorage.setItem("cascadesPassKeyToken", token);
      setIsAuthenticated(true);
    } else {
      setError("Incorrect passkey. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-crystalBlue text-3xl font-semibold gap-5">
        Loading Cascades Portal
        <Loader className="animate-spin h-12 w-12" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <div className="space-y-8">{children}</div>;
  }

  return (
    <div className="flex items-center flex-col md:gap-20 justify-center w-full h-screen overflow-hidden">
      <div className="font-semibold lg:text-[42px] text-3xl text-crystalBlue text-center grid place-items-center">
        <Image
          src={"https://ik.imagekit.io/cascades/header_logo_large.png"}
          alt="cascades logo"
          className="block flex-shrink-0 h-20 w-20 object-contain"
          width={1272}
          height={1209}
        />
        <p>
          Welcome to <br /> Cascades Admin Section
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4 md:w-auto w-full px-4"
        >
          <FormField
            control={form.control}
            name="passkey"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Passkey:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter PassKey"
                    className="md:w-[500px] w-full"
                    onChangeCapture={() => setError("")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && (
            <Alert variant="destructive" className="py-3">
              {error}
            </Alert>
          )}
          <div className="flex md:flex-row flex-col md:gap-0 gap-5 items-center justify-around py-5">
            <Button asChild variant={"secondary"} className="md:w-auto w-full">
              <Link href={"/"}>
                <div className="flex items-center gap-3">
                  <HomeIcon className="h-4 w-4 text-darkLiver" />
                  <p>Back to Home</p>
                </div>
              </Link>
            </Button>
            <Button type="submit" className="px-10 md:w-auto w-full">
              <div className="flex items-center gap-3">
                <Lock className="h-4 w-4" />
                <p>Login</p>
              </div>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AuthGuard;
