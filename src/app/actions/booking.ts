"use server";
import { Resend } from 'resend';

// Use your Resend API Key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingAction(formData: FormData) {
  const userEmail = formData.get("email") as string;
  const date = formData.get("date") as string;
  const message = formData.get("message") as string;

  try {
    await resend.emails.send({
      from: 'AdamTech <onboarding@resend.dev>', // Update this after verifying domain
      to: ['Rasheed@adamtech84.com'],
      subject: `New Consultation: ${userEmail}`,
      html: `
        <div style="font-family: sans-serif; background: #000; color: #fff; padding: 30px; border: 1px solid #222;">
          <h2 style="color: #06b6d4;">New Booking Request</h2>
          <p><strong>Client Email:</strong> ${userEmail}</p>
          <p><strong>Requested Date/Time:</strong> ${date}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}