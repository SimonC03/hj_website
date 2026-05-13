"use client";

import { ArrowRight } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import {
  sendContactForm,
  type ContactFormState,
} from "@/app/actions/contact";
import { contactFormContent, legalTerms } from "@/app/data/site";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    sendContactForm,
    initialState,
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      action={formAction}
      className="contact-form"
      ref={formRef}
    >
      <label className="contact-honeypot">
        <span>{contactFormContent.honeypotLabel}</span>
        <input
          autoComplete="off"
          name={contactFormContent.fieldNames.honeypot}
          tabIndex={-1}
          type="text"
        />
      </label>

      <div className="contact-form-grid">
        <label className="contact-field contact-field-full">
          <span>{contactFormContent.fields.name}</span>
          <input id="contact-name" name={contactFormContent.fieldNames.name} required type="text" />
        </label>

        <label className="contact-field">
          <span>{contactFormContent.fields.phone}</span>
          <input id="contact-phone" name={contactFormContent.fieldNames.phone} required type="tel" />
        </label>

        <label className="contact-field">
          <span>{contactFormContent.fields.email}</span>
          <input id="contact-email" name={contactFormContent.fieldNames.email} required type="email" />
        </label>

        <label className="contact-field contact-field-full">
          <span>{contactFormContent.fields.message}</span>
          <textarea
            id="contact-message"
            maxLength={5000}
            name={contactFormContent.fieldNames.message}
            placeholder={contactFormContent.messagePlaceholder}
            required
            rows={7}
          />
        </label>
      </div>

      <label className="contact-consent">
        <input name={contactFormContent.fieldNames.terms} required type="checkbox" />
        <span>
          {contactFormContent.consentBeforeLink}{" "}
          <a href={legalTerms.href} target="_blank" rel="noopener noreferrer">
            {legalTerms.label.toLowerCase()}
          </a>{" "}
          {contactFormContent.consentAfterLink}
        </span>
      </label>

      <div className="contact-form-footer">
        <button
          className="button button-primary contact-submit"
          disabled={pending}
          type="submit"
        >
          {pending ? contactFormContent.pendingLabel : contactFormContent.submitLabel}
          <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
        </button>
      </div>

      {state.message ? (
        <p
          aria-live="polite"
          className={`contact-form-status ${state.status}`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
