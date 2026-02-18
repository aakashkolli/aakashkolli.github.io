import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-primary tracking-wider uppercase mb-3">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Honors & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {honors.map((h, i) => (
            <motion.div
              key={h.title}
              className="card-surface p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="font-semibold text-sm text-foreground mb-1">{h.title}</h3>
              <p className="text-xs text-muted-foreground">{h.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honors;
