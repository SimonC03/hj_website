"use server";

import nodemailer from "nodemailer";
import { firm } from "@/app/data/site";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const smtpPort = Number(process.env.SMTP_PORT ?? 587);

function getValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function hasSmtpConfig() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      smtpPort,
  );
}

export async function sendContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = getValue(formData, "website");

  if (honeypot) {
    return {
      status: "success",
      message: "Tack, ditt meddelande har skickats.",
    };
  }

  const name = getValue(formData, "Namn");
  const phone = getValue(formData, "Telefonnummer");
  const email = getValue(formData, "Epostadress");
  const message = getValue(formData, "Meddelande");
  const acceptedTerms = formData.get("Villkor") === "on";

  if (!name || !phone || !email || !message || !acceptedTerms) {
    return {
      status: "error",
      message: "Fyll i alla obligatoriska fält.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "Ange en giltig e-postadress.",
    };
  }

  if (!hasSmtpConfig()) {
    return {
      status: "error",
      message:
        "Formuläret är inte kopplat till en e-postserver ännu. Lägg till SMTP-inställningar i miljön.",
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === "true" || smtpPort === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const subject = `Nytt ärende från ${name}`;
  const text = [
    "Nytt ärende via hemsidan",
    "",
    `Namn: ${name}`,
    `Telefonnummer: ${phone}`,
    `E-post: ${email}`,
    "",
    "Meddelande:",
    message,
  ].join("\n");

  const html = `
    <h2>Nytt ärende via hemsidan</h2>
    <p><strong>Namn:</strong> ${escapeHtml(name)}</p>
    <p><strong>Telefonnummer:</strong> ${escapeHtml(phone)}</p>
    <p><strong>E-post:</strong> ${escapeHtml(email)}</p>
    <p><strong>Meddelande:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      replyTo: email,
      to: firm.email,
      subject,
      text,
      html,
    });

    return {
      status: "success",
      message: "Tack, ditt meddelande har skickats.",
    };
  } catch (error) {
    console.error("Failed to send contact form email", error);

    return {
      status: "error",
      message: "Meddelandet kunde inte skickas. Försök igen senare.",
    };
  }
}
