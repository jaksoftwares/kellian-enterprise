import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  from_name: z.string().min(1, "Name is required"),
  from_email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { from_name, from_email, message } = contactSchema.parse(body);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"Kellian Enterprise Website" ${process.env.NEXT_PUBLIC_SITE_URL}`,
      to: process.env.EMAIL_USER,
      subject: `Kellian Enterprise Website Email from ${from_name}, ${from_email}`,
      text: `
        Name: ${from_name}
        Email: ${from_email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #333; font-size: 24px; margin-bottom: 16px;">New Message from Contact Form</h2>
          <p style="margin: 8px 0;"><strong style="color: #555;">Name:</strong> ${from_name}</p>
          <p style="margin: 8px 0;"><strong style="color: #555;">Email:</strong> ${from_email}</p>
          <p style="margin: 8px 0;"><strong style="color: #555;">Message:</strong> ${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send contact email:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Kindly confirm the information in the form and try again.",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message:
          "An error occurred while trying to send your message. Kindly try again.",
      },
      { status: 500 }
    );
  }
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
