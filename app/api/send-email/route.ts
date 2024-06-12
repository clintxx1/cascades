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
        to: "cascadesinternational@gmail.com",
        from: "admission@cascades.ph",
        templateId: "d-ed1fd9d3dc61436d9bc952a68162995f",
        dynamic_template_data: { ...data, ...address },
      },
      {
        to: data.from_email,
        from: "admission@cascades.ph",
        templateId: "d-5a877dbe2b1c4eeb87c175a1b77e67f3",
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
