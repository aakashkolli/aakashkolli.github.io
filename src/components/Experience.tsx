import { useState } from "react";

interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  blurb: string;
  logoPath?: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    org: "Illinois Business Consulting",
    period: "Feb 2026 – Present",
    blurb: "Infra tech team, building real-time consultant staffing platform",
    logoPath: "/logos/ibc.png",
  },
  {
    role: "Machine Learning & AI Intern",
    org: "University of Illinois Urbana-Champaign",
    period: "Jan 2026 – Present",
    blurb: "RAG chatbot for new degree program website",
    logoPath: "/logos/uiuc.png",
  },
  {
    role: "Research Intern",
    org: "University of Illinois Chicago",
    period: "May 2025 – Aug 2025",
    blurb: "Urban visual analytics research",
    logoPath: "/logos/uic.png",
  },
  {
    role: "Research Intern",
    org: "Northern Illinois University",
    period: "May 2024 – Jul 2024",
    blurb: "Jupyter Notebooks research",
    logoPath: "/logos/niu.png",
  },
];

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const [logoError, setLogoError] = useState(false);
  const isUICLogo = item.logoPath?.includes("uic.png");

  return (
    <div
      className="card-surface p-6 md:p-8 fade-in"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="flex items-start gap-4">
        {/* Logo - SVGs use <object>, others use <img> */}
        <div
          className={
            `shrink-0 flex items-center justify-center overflow-hidden ` +
            (isUICLogo ? "w-16 h-16 -ml-2" : "w-12 h-12")
          }
        >
          {item.logoPath && !logoError ? (
            item.logoPath.endsWith('.svg') ? (
              <object
                data={item.logoPath}
                type="image/svg+xml"
                className={isUICLogo ? "w-20 h-20 object-contain p-0" : "w-full h-full object-contain p-1"}
                aria-label={`${item.org} logo`}
                onError={() => setLogoError(true)}
              />
            ) : (
              <img
                src={item.logoPath}
                alt={`${item.org} logo`}
                className={isUICLogo ? "w-20 h-20 object-contain p-0" : "w-full h-full object-contain p-1"}
                onError={() => setLogoError(true)}
              />
            )
          ) : (
            <span className="text-xs text-muted-foreground font-mono">logo</span>
          )}
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
            <div>
              <h3 className="font-bold text-foreground">{item.role}</h3>
              <p className="text-sm text-muted-foreground">{item.org}</p>
            </div>
            <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">{item.period}</span>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">{item.blurb}</p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="container-narrow">
        <div className="mb-12 fade-in">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Experience
          </h2>
        </div>

        <div className="space-y-4">
          {experiences.map((item, i) => (
            <ExperienceCard key={item.role + item.org} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
