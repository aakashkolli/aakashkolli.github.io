import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  imagePath?: string;
}

const projects: Project[] = [
  {
    title: "ML for European Options",
    description:
      "ML-powered options pricing and volatility modeling for SPX contracts - Financial Engineering Club, Fall 2025.",
    stack: ["Python", "Scikit-learn", "Black-Scholes", "Streamlit"],
    github: "https://github.com/jasonydog9/FEC-European-options-7",
    imagePath: "/projects/quant.png", // Place image at: public/projects/quant.png
  },
  {
    title: "Arden",
    description:
      "AI copilot for psychiatric assessment, fusing emotion detection and crisis keyword analysis.",
    stack: ["Python", "React", "TypeScript", "LiveKit", "Supabase"],
    github: "https://github.com/yyardi/nexhacks",
    imagePath: "/projects/arden.png",
  },
  {
    title: "Quantitative Trading Engine",
    description:
      "Event-driven mean reversion system with modular risk management, z-score signal generation, slippage modeling, and transactional trade persistence.",
    stack: ["Python", "PostgreSQL", "Docker", "yfinance"],
    // github: "https://github.com",
    // imagePath: "/projects/trading.png",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="card-surface flex flex-col"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {/* image preview — only shown for projects with an imagePath */}
              {project.imagePath && (
                <div className="w-full aspect-[16/10] bg-muted border-b border-border flex items-center justify-center overflow-hidden">
                  {project.imagePath ? (
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<span class="text-xs text-muted-foreground font-mono">image</span>';
                      }}
                    />
                  ) : (
                    <span className="text-xs text-muted-foreground font-mono">image</span>
                  )}
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-foreground">{project.title}</h3>
                  <div className="flex gap-2 shrink-0 ml-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs px-2 py-0.5 border border-border text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
