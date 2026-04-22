"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "HJ kombinerade juridisk precision med en ovanligt tydlig förståelse för vår affär. Rådgivningen var konkret, snabb och lätt att agera på.",
    author: "Anna Lind",
    role: "VD, teknikbolag",
    initials: "AL",
  },
  {
    text: "Vi fick ett tryggt bollplank genom hela processen. Teamet var strukturerat, kommersiellt och väldigt bra på att göra komplexa frågor begripliga.",
    author: "Johan Berg",
    role: "Grundare, tillväxtbolag",
    initials: "JB",
  },
  {
    text: "Det som stack ut var noggrannheten och tempot. HJ hjälpte oss att landa rätt beslut utan att fastna i onödig juridisk friktion.",
    author: "Mira Ek",
    role: "COO, fastighetsbolag",
    initials: "ME",
  },
  {
    text: "Samarbetet kändes nära från första mötet. Vi fick raka rekommendationer, tydliga prioriteringar och dokument som fungerade i praktiken.",
    author: "Oskar Holm",
    role: "Styrelseordförande, investeringsbolag",
    initials: "OH",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((previous) =>
      previous === testimonials.length - 1 ? 0 : previous + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? testimonials.length - 1 : previous - 1,
    );
  };

  return (
    <section className="section testimonials-section">
      <div className="section-inner testimonials-container">
        <div className="testimonials-header">
          <div className="testimonials-title">
            <h2>Lyssna på våra klienter</h2>
          </div>

          <div className="testimonial-controls">
            <button
              aria-label="Föregående omdöme"
              className="testimonial-arrow"
              onClick={prevSlide}
              type="button"
            >
              <ArrowLeft aria-hidden="true" size={22} strokeWidth={2} />
            </button>
            <button
              aria-label="Nästa omdöme"
              className="testimonial-arrow"
              onClick={nextSlide}
              type="button"
            >
              <ArrowRight aria-hidden="true" size={22} strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="testimonial-viewport" aria-live="polite">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item, index) => (
              <article
                aria-hidden={currentIndex !== index}
                className="testimonial-slide"
                key={item.author}
              >
                <div className="testimonial-card">
                  <p className="testimonial-text">{item.text}</p>

                  <footer className="testimonial-person">
                    <span className="testimonial-avatar" aria-hidden="true">
                      {item.initials}
                    </span>
                    <div>
                      <cite>{item.author}</cite>
                      <span>{item.role}</span>
                    </div>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonial-dots" aria-label="Välj omdöme">
          {testimonials.map((_, index) => (
            <button
              aria-label={`Gå till omdöme ${index + 1}`}
              aria-current={currentIndex === index}
              className={currentIndex === index ? "active" : ""}
              key={index}
              onClick={() => setCurrentIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
