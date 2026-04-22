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

// Create an extended array to allow infinite looping.
// We clone the testimonials array so we have enough items before and after.
const extendedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export function Testimonials() {
  // Start the index in the middle block to have clones on both sides
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    
    // Snap back to the center block without animation if we entered a cloned block
    if (currentIndex < testimonials.length) {
      setCurrentIndex(currentIndex + testimonials.length);
    } else if (currentIndex >= testimonials.length * 2) {
      setCurrentIndex(currentIndex - testimonials.length);
    }
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning) return;
    const targetIndex = index + testimonials.length;
    if (targetIndex !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(targetIndex);
    }
  };

  const activeDotIndex = currentIndex % testimonials.length;

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
            onTransitionEnd={handleTransitionEnd}
            style={{ 
              transform: `translateX(calc(${currentIndex} * -1 * var(--slide-advance)))`,
              transition: isTransitioning ? "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)" : "none"
            }}
          >
            {extendedTestimonials.map((item, index) => {
              const isActive = index === currentIndex;
              
              return (
                <article
                  aria-hidden={!isActive}
                  className="testimonial-slide"
                  data-active={isActive}
                  key={`${index}-${item.initials}`}
                >
                  <div className="testimonial-card">
                    <p className="testimonial-text">{item.text}</p>

                    <footer className="testimonial-person">
                      <cite>{item.author}</cite>
                      <span>{item.role}</span>
                    </footer>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="testimonial-dots" aria-label="Välj omdöme">
          {testimonials.map((_, index) => (
            <button
              aria-label={`Gå till vy ${index + 1}`}
              aria-current={activeDotIndex === index}
              className={activeDotIndex === index ? "active" : ""}
              key={index}
              onClick={() => handleDotClick(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
