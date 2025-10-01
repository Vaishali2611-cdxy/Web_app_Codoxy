import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 👇 log before sending
    console.log("🚀 Sending email to:", process.env.EMAIL_USER);

    try {
      const info = await transporter.sendMail({
        from: `"Website Contact" <${process.env.EMAIL_USER}>`,
        to: "vaishali.lalwani@codoxysolutions.com",
        replyTo: email,
        subject: `New Contact Request from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `,
      });
     

      // 👇 log after sending
      console.log("✅ Email sent! Message ID:", info.messageId);
      return NextResponse.json({ success: true });
    } catch (err) {
      // 👇 log the error if sending fails
      console.error("❌ Email failed:", err);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
  } catch (err) {
    console.error("❌ Server error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
