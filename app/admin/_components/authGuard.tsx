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
import { Loader } from "lucide-react";

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
    <div className="flex items-center justify-center w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
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
                    className="w-[500px]"
                    onChangeCapture={() => setError("")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col items-center justify-center space-y-5 py-5">
            {error && <Alert variant="destructive">{error}</Alert>}
            <Button type="submit" className="px-10">
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AuthGuard;
