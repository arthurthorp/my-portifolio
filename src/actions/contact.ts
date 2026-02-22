"use server";

import { db } from "@/db";
import { contacts } from "@/db/schema";
import { contactSchema, ContactFormData } from "@/lib/validations/contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function submitContactForm(data: ContactFormData) {
  try {
    const validatedData = contactSchema.parse(data);


    await db.insert(contacts).values({
      name: validatedData.name,
      email: validatedData.email,
      message: validatedData.message,
    });

    const personalEmail = process.env.CONTACT_EMAIL!;

    const fromEmail = process.env.RESEND_FROM_EMAIL!;

    await resend.emails.send({
      from: fromEmail,
      to: personalEmail,
      subject: `[Portfolio Contact] New contact from ${validatedData.name}`,
      text: `You received a new message via your portfolio contact form.

Name: ${validatedData.name}
Email: ${validatedData.email}

Message:
${validatedData.message}

Date: ${new Date().toLocaleString()}
`,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return { success: false, error: "Form submission failed. Please try again later." };
  }
}
