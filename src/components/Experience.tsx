import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  blurb: string;
  logoPath?: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "software engineer",
    org: "illinois business consulting",
    period: "feb 2026 – present",
    blurb: "infra tech team, building real-time consultant staffing platform",
    logoPath: "/logos/ibc.png",
  },
  {
    role: "machine learning & ai intern",
    org: "university of illinois urbana-champaign",
    period: "jan 2026 – present",
    blurb: "rag chatbot for new degree program website",
    logoPath: "/logos/uiuc.png",
  },
  {
    role: "research intern",
    org: "university of illinois chicago",
    period: "may 2025 – aug 2025",
    blurb: "urban visual analytics research",
    logoPath: "/logos/uic.png",
  },
  {
    role: "research intern",
    org: "northern illinois university",
    period: "may 2024 – july 2024",
    blurb: "jupyter notebooks research",
    logoPath: "/logos/niu.png",
  },
];

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => {
  return (
    <motion.div
      className="card-surface p-6 md:p-8"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="flex items-start gap-4">
        {/* Logo - SVGs use <object>, others use <img> */}
        <div
          className={
            `shrink-0 flex items-center justify-center overflow-hidden ` +
            (item.logoPath && item.logoPath.includes('uic.png') ? 'w-16 h-16 -ml-2' : 'w-12 h-12')
          }
        >
          {item.logoPath ? (
            item.logoPath.endsWith('.svg') ? (
              <object
                data={item.logoPath}
                type="image/svg+xml"
                className={item.logoPath.includes('uic.png') ? 'w-20 h-20 object-contain p-0' : 'w-full h-full object-contain p-1'}
                aria-label={`${item.org} logo`}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-xs text-muted-foreground font-mono">logo</span>';
                }}
              />
            ) : (
              <img
                src={item.logoPath}
                alt={`${item.org} logo`}
                className={item.logoPath.includes('uic.png') ? 'w-20 h-20 object-contain p-0' : 'w-full h-full object-contain p-1'}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class=\"text-xs text-muted-foreground font-mono\">logo</span>';
                }}
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
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            experience
          </h2>
        </motion.div>

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
