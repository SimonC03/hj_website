"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import {
  sendContactForm,
  type ContactFormState,
} from "@/app/actions/contact";

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
        <span>Webbplats</span>
        <input autoComplete="off" name="website" tabIndex={-1} type="text" />
      </label>

      <div className="contact-form-grid">
        <label className="contact-field contact-field-full">
          <span>Namn</span>
          <input id="contact-name" name="Namn" required type="text" />
        </label>

        <label className="contact-field">
          <span>Telefonnummer</span>
          <input id="contact-phone" name="Telefonnummer" required type="tel" />
        </label>

        <label className="contact-field">
          <span>E-post</span>
          <input id="contact-email" name="Epostadress" required type="email" />
        </label>

        <label className="contact-field contact-field-full">
          <span>Meddelande</span>
          <textarea
            id="contact-message"
            maxLength={5000}
            name="Meddelande"
            placeholder="Skriv ditt meddelande här..."
            required
            rows={7}
          />
        </label>
      </div>

      <label className="contact-consent">
        <input name="Villkor" required type="checkbox" />
        <span>
          Jag accepterar{" "}
          <Link href="/integritetspolicy">villkoren</Link>
        </span>
      </label>

      <div className="contact-form-footer">
        <button
          className="button button-primary contact-submit"
          disabled={pending}
          type="submit"
        >
          {pending ? "Skickar..." : "Skicka meddelande"}
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
