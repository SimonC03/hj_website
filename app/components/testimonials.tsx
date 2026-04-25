const testimonials = [
  {
    text: "HJ kombinerade juridisk precision med en ovanligt tydlig förståelse för vår affär. Rådgivningen var konkret, snabb och lätt att agera på.",
    author: "Anna Lind",
    role: "VD, teknikbolag",
    company: "Teknikbolag",
    label: "Klient 01",
  },
  {
    text: "Vi fick ett tryggt bollplank genom hela processen. Teamet var strukturerat, kommersiellt och väldigt bra på att göra komplexa frågor begripliga.",
    author: "Johan Berg",
    role: "Grundare, tillväxtbolag",
    company: "Tillväxtbolag",
    label: "Klient 02",
  },
  {
    text: "Det som stack ut var noggrannheten och tempot. HJ hjälpte oss att landa rätt beslut utan att fastna i onödig juridisk friktion.",
    author: "Mira Ek",
    role: "COO, fastighetsbolag",
    company: "Fastighetsbolag",
    label: "Klient 03",
  },
];

export function Testimonials() {
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

        <div className="testimonial-grid" aria-label="Klientomdömen">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.author}>
              <div className="testimonial-card-copy">
                <div className="testimonial-meta">
                  <span>{testimonial.label}</span>
                  <span>{testimonial.company}</span>
                </div>
                <blockquote className="testimonial-text">
                  {testimonial.text}
                </blockquote>
              </div>

              <footer className="testimonial-person">
                <cite>{testimonial.author}</cite>
                <span>{testimonial.role}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
