"use client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import moment from "moment";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
const FormSchema = z.object({
  categories: z
    .string({
      required_error: "Please select a category.",
    })
    .min(1),
  name: z
    .string({
      required_error: "Please enter a name.",
    })
    .min(1),
  from_email: z
    .string({
      required_error: "Please enter an email address.",
    })
    .email()
    .min(1),
  contact: z
    .string({
      required_error: "Please enter a contact number.",
    })
    .min(1),
  message: z
    .string({
      required_error: "Please enter add a message.",
    })
    .min(1),
});

export default function InquiryForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      categories: "",
      name: "",
      from_email: "",
      contact: "",
      message: "",
    },
  });

  const getEntryId = async () => {
    const formEntry = await fetch("/api/form", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await formEntry.json();

    if (!data.length) return 1;

    return data[0].entry_id + 1;
  };

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true);
      const date = moment().format("LL");
      const time = moment().format("hh:mm a");
      const entry_id = await getEntryId();
      const payload = {
        ...data,
        date,
        time,
        entry_id,
        url: `${window.location.href}`,
        form_name: "Contact Form",
      };

      /* SENDGRID */
      const email = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      /* EMAILJS */
      // const res = await emailjs.send(
      //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      //   payload,
      //   process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      // );

      if (email.status === 200) {
        const inquiry = await fetch("/api/form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (inquiry.status === 200) {
          form.reset({
            categories: "",
            name: "",
            from_email: "",
            contact: "",
            message: "",
          });
          toast({
            title: "Contact Form",
            description: "Inquiry submitted successfully",
          });
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Contact Form",
        description:
          "An error occurred. Please contact the administrator for support",
      });
    }
  };
  return (
    <div className="pb-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
          id="myForm"
        >
          <FormField
            control={form.control}
            name="categories"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categories</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full lg:text-[20px] lg:leading-[36px] leading-8">
                      <SelectValue placeholder="Select a category for your inquiry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="General Inquiry">
                      General Inquiry
                    </SelectItem>
                    <SelectItem value="Programs Offered">
                      Programs Offered
                    </SelectItem>
                    <SelectItem value="Admissions">Admissions</SelectItem>
                    <SelectItem value="Book a Tour">Book a Tour</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Full Name"
                    className="w-full lg:text-[20px] lg:leading-[36px] leading-8"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="from_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    placeholder="Email"
                    className="w-full lg:text-[20px] lg:leading-[36px] leading-8"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Contact Number"
                    className="w-full lg:text-[20px] lg:leading-[36px] leading-8"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Message"
                    className="w-full lg:text-[20px] lg:leading-[36px] leading-8"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center lg:justify-end justify-center pt-4">
            <Button
              type="submit"
              className="text-watermelonRed hover:text-watermelonRed transition-colors duration-300 lg:text-[28px] text-[24px] py-8 border-watermelonRed rounded-2xl border-[2px] italic"
              size={"lg"}
              variant={"outline"}
              disabled={loading}
            >
              {loading && (
                <LoaderCircle className="h-7 w-7 animate-spin mr-4" />
              )}
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
