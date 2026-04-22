type PageIntroProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <section className="page-intro section">
      <div className="section-inner narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="lead-copy">{children}</div>
      </div>
    </section>
  );
}
