 
const About = () => {
  const focuses = [
    { label: "Systems Architecture", description: "Real-time platforms, event-driven systems, concurrency control" },
    { label: "Quantitative Modeling", description: "Options pricing, volatility surfaces, statistical frameworks" },
    { label: "Applied ML & AI", description: "RAG pipelines, multimodal fusion, production inference" },
    { label: "Production Engineering", description: "Containerized deployments, cloud infrastructure, CI/CD" },
  ];

  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="container-narrow">
        <div className="fade-in">
          <p className="font-mono text-xs text-primary tracking-wider uppercase mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Engineering with precision
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-12">
            I approach software as systems design — optimizing for clarity, performance, 
            and architectural rigor. My work spans quantitative finance, real-time infrastructure, 
            and machine learning, always with a focus on production-grade outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {focuses.map((focus, i) => (
            <div key={focus.label} className="card-surface p-6 fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <h3 className="font-semibold text-foreground mb-2">{focus.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{focus.description}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
