import { NextResponse } from "next/server";
import { getInquiryHTML } from "@/components/emails/InquiryConfirmation";
import { Resend } from "resend";
import { getContactFormHTML } from "@/components/emails/ContactForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const toRecipient = await getInquiryHTML({
      name: data.name,
      categories: data.categories,
      branch: data.branch,
      email: data.from_email,
      contact: data.contact,
      message: data.message,
    });
    const toSender = await getContactFormHTML(data);
    const payload = [
      {
        from: `"Cascades School Inc" <${process.env.EMAIL_USER}>`,
        to: [data.from_email],
        subject: "Thank you for your submission",
        html: toRecipient,
      },
      {
        from: `"Cascades School Inc" <${process.env.EMAIL_USER}>`,
        to: [process.env.EMAIL_TO],
        subject: "Contact Form - New Submission",
        html: toSender,
      },
    ];

    const { error } = await resend.batch.send(payload);

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
