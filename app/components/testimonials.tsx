"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "HJ kombinerade juridisk precision med en ovanligt tydlig förståelse för vår affär. Rådgivningen var konkret, snabb och lätt att agera på.",
    author: "Anna Lind",
    role: "VD, teknikbolag",
  },
  {
    text: "Vi fick ett tryggt bollplank genom hela processen. Teamet var strukturerat, kommersiellt och väldigt bra på att göra komplexa frågor begripliga.",
    author: "Johan Berg",
    role: "Grundare, tillväxtbolag",
  },
  {
    text: "Det som stack ut var noggrannheten och tempot. HJ hjälpte oss att landa rätt beslut utan att fastna i onödig juridisk friktion.",
    author: "Mira Ek",
    role: "COO, fastighetsbolag",
  },
  {
    text: "Samarbetet kändes nära från första mötet. Vi fick raka rekommendationer, tydliga prioriteringar och dokument som fungerade i praktiken.",
    author: "Oskar Holm",
    role: "Styrelseordförande, investeringsbolag",
  },
];

const formatIndex = (value: number) => String(value + 1).padStart(2, "0");
const formatTotal = (value: number) => String(value).padStart(2, "0");

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((previous) =>
      previous === 0 ? testimonials.length - 1 : previous - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((previous) => (previous + 1) % testimonials.length);
  };

  return (
    <section className="section testimonials-section">
      <div className="section-inner testimonials-container">
        <div className="testimonials-header">
          <div className="testimonials-title">
            <p className="eyebrow">Klientomdömen</p>
            <h2>Förtroende byggs i hur rådgivning fungerar i praktiken.</h2>
          </div>

          <p className="testimonials-lead">
            Diskret, precis och affärsnära rådgivning märks ofta tydligast i
            hur samarbetet upplevs av klienten.
          </p>
        </div>

        <div className="testimonial-frame">
          <article className="testimonial-card" aria-live="polite">
            <span className="testimonial-mark" aria-hidden="true">
              ”
            </span>

            <p className="testimonial-text">{activeTestimonial.text}</p>

            <footer className="testimonial-person">
              <div className="testimonial-person-copy">
                <cite>{activeTestimonial.author}</cite>
                <span>{activeTestimonial.role}</span>
              </div>

              <div className="testimonial-pagination" aria-hidden="true">
                <span>{formatIndex(activeIndex)}</span>
                <span>/</span>
                <span>{formatTotal(testimonials.length)}</span>
              </div>
            </footer>
          </article>

          <div className="testimonial-controls">
            <button
              aria-label="Föregående omdöme"
              className="testimonial-arrow"
              onClick={showPrevious}
              type="button"
            >
              <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.8} />
            </button>
            <button
              aria-label="Nästa omdöme"
              className="testimonial-arrow"
              onClick={showNext}
              type="button"
            >
              <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div className="testimonial-dots" aria-label="Välj omdöme">
          {testimonials.map((item, index) => (
            <button
              aria-current={activeIndex === index}
              aria-label={`Visa omdöme från ${item.author}`}
              className={activeIndex === index ? "active" : ""}
              key={item.author}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <span>{item.author}</span>
              <small>{item.role}</small>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
