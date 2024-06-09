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
import { fetchFormList, submitFormDetails } from "@/lib/form";
import { Form as PrismaFormSchema } from "@prisma/client";
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
  title: z
    .string({
      required_error: "Please enter a title.",
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
      title: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true);
      let entry_id = 1;
      const formEntry = (await fetchFormList()) as PrismaFormSchema[];
      if (formEntry.length) {
        entry_id = Number(formEntry[0].entry_id + 1);
      }
      const date = moment().format("LL");
      const time = moment().format("hh:mm a");
      const payload = {
        ...data,
        date,
        time,
        entry_id,
        url: `${window.location.href}`,
        form_name: "Contact Form",
      };
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        payload,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      );
      if (res.status == 200) {
        //@ts-ignore
        await submitFormDetails(payload);
        form.reset({
          categories: "",
          name: "",
          from_email: "",
          contact: "",
          title: "",
          message: "",
        });
        toast({
          title: "Contact Form",
          description: "Inquiry submitted successfully",
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
                  <SelectTrigger className="w-full text-[20px] leading-[36px]">
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
                  className="w-full text-[20px] leading-[36px]"
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
                  className="w-full text-[20px] leading-[36px]"
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
                  className="w-full text-[20px] leading-[36px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Title"
                  className="w-full text-[20px] leading-[36px]"
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
                  className="w-full text-[20px] leading-[36px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end pt-4">
          <Button
            type="submit"
            className="text-watermelonRed hover:text-watermelonRed transition-colors duration-300 lg:text-[28px] text-[24px] py-8 border-watermelonRed rounded-2xl border-[2px] italic"
            size={"lg"}
            variant={"outline"}
            disabled={loading}
          >
            {loading && <LoaderCircle className="h-7 w-7 animate-spin mr-4" />}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
