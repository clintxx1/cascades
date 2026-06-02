import { NextResponse } from "next/server";
import { getInquiryHTML } from "@/components/emails/InquiryConfirmation";
import { Resend } from "resend";
import { getContactFormHTML } from "@/components/emails/ContactForm";

const resend = new Resend(process.env.RESEND_API_KEY);

// Maps each branch (matching the values in the contact form's branch dropdown)
// to the inbox that should receive its inquiries. Falls back to EMAIL_TO for
// any unrecognized branch so submissions are never dropped.
const BRANCH_EMAIL_MAP: Record<string, string> = {
  "Preschool: Mandaluyong": "cascadesinternational@gmail.com",
  "Elementary: Mandaluyong": "cascadeshiraya.admission@gmail.com",
  "Preschool: Silang Cavite": "admissionsilang@cascades.ph",
  "Preschool: Tomas Morato, Quezon City": "cascadeshiraya.admission@gmail.com",
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const branchRecipient =
      BRANCH_EMAIL_MAP[data.branch] ?? process.env.EMAIL_TO;
    const toRecipient = await getInquiryHTML({
      name: data.name,
      categories: data.categories,
      branch: data.branch,
      email: data.from_email,
      contact: data.contact,
      message: data.message,
    });
    const toSender = await getContactFormHTML({
      ...data,
      email: data.from_email,
    });
    const payload = [
      {
        from: `"Cascades School Inc" <${process.env.EMAIL_USER}>`,
        to: [data.from_email],
        subject: "Thank you for your submission",
        html: toRecipient,
      },
      {
        from: `"Cascades School Inc" <${process.env.EMAIL_USER}>`,
        to: [branchRecipient],
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
