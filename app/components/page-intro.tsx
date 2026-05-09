type PageIntroProps = {
  title: string;
  children: React.ReactNode;
};

export function PageIntro({ title, children }: PageIntroProps) {
  return (
    <section className="page-intro section">
      <div className="section-inner narrow">
        <h1>{title}</h1>
        <div className="lead-copy">{children}</div>
      </div>
    </section>
  );
}
