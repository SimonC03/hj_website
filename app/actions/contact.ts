"use server";

import nodemailer from "nodemailer";
import { contactFormContent, firm, legalTerms } from "@/app/data/site";
import { siteUrl } from "@/app/lib/seo";

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
  const honeypot = getValue(formData, contactFormContent.fieldNames.honeypot);

  if (honeypot) {
    return {
      status: "success",
      message: contactFormContent.validationMessages.success,
    };
  }

  const name = getValue(formData, contactFormContent.fieldNames.name);
  const phone = getValue(formData, contactFormContent.fieldNames.phone);
  const email = getValue(formData, contactFormContent.fieldNames.email);
  const message = getValue(formData, contactFormContent.fieldNames.message);
  const acceptedTerms =
    formData.get(contactFormContent.fieldNames.terms) === "on";

  if (!name || !phone || !email || !message || !acceptedTerms) {
    return {
      status: "error",
      message: contactFormContent.validationMessages.required,
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: contactFormContent.validationMessages.invalidEmail,
    };
  }

  if (!hasSmtpConfig()) {
    return {
      status: "error",
      message: contactFormContent.validationMessages.missingSmtp,
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

  const subject = `${contactFormContent.email.subjectPrefix} ${name}`;
  const termsUrl = new URL(legalTerms.href, siteUrl).toString();
  const text = [
    contactFormContent.email.heading,
    "",
    `${contactFormContent.fields.name}: ${name}`,
    `${contactFormContent.fields.phone}: ${phone}`,
    `${contactFormContent.fields.email}: ${email}`,
    `${legalTerms.label}: ${contactFormContent.email.acceptedTerms}`,
    `${contactFormContent.email.termsLinkPrefix} ${legalTerms.label.toLowerCase()}: ${termsUrl}`,
    "",
    `${contactFormContent.fields.message}:`,
    message,
  ].join("\n");

  const html = `
    <h2>${escapeHtml(contactFormContent.email.heading)}</h2>
    <p><strong>${escapeHtml(contactFormContent.fields.name)}:</strong> ${escapeHtml(name)}</p>
    <p><strong>${escapeHtml(contactFormContent.fields.phone)}:</strong> ${escapeHtml(phone)}</p>
    <p><strong>${escapeHtml(contactFormContent.fields.email)}:</strong> ${escapeHtml(email)}</p>
    <p><strong>${escapeHtml(legalTerms.label)}:</strong> ${escapeHtml(contactFormContent.email.acceptedTerms)}</p>
    <p><a href="${escapeHtml(termsUrl)}">${escapeHtml(legalTerms.label)}</a></p>
    <p><strong>${escapeHtml(contactFormContent.fields.message)}:</strong></p>
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
      message: contactFormContent.validationMessages.success,
    };
  } catch (error) {
    console.error("Failed to send contact form email", error);

    return {
      status: "error",
      message: contactFormContent.validationMessages.sendError,
    };
  }
}
