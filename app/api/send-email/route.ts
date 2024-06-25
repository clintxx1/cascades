import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Footer address
    const address = {
      Sender_Name: "Cascades PH",
      Sender_Address: "6 Silangan St. Barangka Drive",
      Sender_City: "Mandaluyong City",
      Sender_State: "Philippines",
      Sender_Zip: 1550,
    };

    // Payload for sendgrid
    const msg = [
      {
        to: process.env.SENDGRID_EMAIL_TO as string,
        from: process.env.SENDGRID_EMAIL_FROM as string,
        templateId: process.env.SENDGRID_SUBMISSION_TEMPLATE_ID as string,
        dynamic_template_data: { ...data, ...address },
      },
      {
        to: data.from_email,
        from: process.env.SENDGRID_EMAIL_FROM as string,
        templateId: process.env.SENDGRID_REPLY_TEMPLATE_ID as string,
        dynamic_template_data: { ...data, ...address },
      },
    ];
    await sendgrid.send(msg);
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
