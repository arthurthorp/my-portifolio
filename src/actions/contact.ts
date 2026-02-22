"use server";

import { db } from "@/db";
import { contacts } from "@/db/schema";
import { contactSchema, ContactFormData } from "@/lib/validations/contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_test_key");

export async function submitContactForm(data: ContactFormData) {
  try {
    // 1. Server-side validation
    const validatedData = contactSchema.parse(data);

    // 2. Persist in PostgreSQL via Drizzle ORM
    await db.insert(contacts).values({
      name: validatedData.name,
      email: validatedData.email,
      message: validatedData.message,
    });

    // 3. Send Email via Resend
    const personalEmail = process.env.CONTACT_EMAIL || "hello@arthur.dev";

    // Assuming the verified domain in Resend is used, or a generic onboarding email for dev mode
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    await resend.emails.send({
      from: fromEmail,
      to: personalEmail,
      subject: `New contact from ${validatedData.name}`,
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
