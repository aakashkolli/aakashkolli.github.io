 
const honors = [
  { title: "Jane Street Estimathon", detail: "Quant @ Illinois · 2nd Place, 2025" },
  { title: "MathWorks Math Modeling Challenge", detail: "Honorable Mention, 2024" },
  { title: "Akuna Capital Options 101", detail: "Certification" },
  { title: "Google Data Analytics", detail: "Professional Certificate" },
  { title: "Bloomberg Market Concepts", detail: "Certification" },
];

const Honors = () => {
  return (
    <section id="honors" className="section-padding border-t border-border">
      <div className="container-narrow">
        <div className="mb-12 fade-in">
          <p className="font-mono text-xs text-primary tracking-wider uppercase mb-3">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Honors & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {honors.map((h, i) => (
            <div key={h.title} className="card-surface p-6 fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
              <h3 className="font-semibold text-sm text-foreground mb-1">{h.title}</h3>
                <p className="text-xs text-muted-foreground">{h.detail}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honors;
