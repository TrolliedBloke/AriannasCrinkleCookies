import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

{
  /* Resend standard export function */
}
export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "GabrielChi@icloud.com",
    subject: `New Message From ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
