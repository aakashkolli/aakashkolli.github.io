import { useState } from "react";
import { gtagEvent } from "@/lib/analytics";
import { IconGithub, IconExternalLink } from "@/components/icons/nav-icons";

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
    title: "Market Microstructure Simulator",
    description:
      "High-performance C++ platform simulating limit order-book dynamics with pluggable agent strategies, event-driven runs, and integrated benchmarks for reproducible strategy evaluation.",
    stack: ["C++17", "AWS", "Terraform", "Docker", "Google Benchmark"],
    github: "https://github.com/aakashkolli/microstructure-sim",
  },
  {
    title: "Adaptive ML Serving",
    description:
      "Adaptive ML inference server with feedback-controlled scheduling for throughput-latency optimization.",
    stack: ["Python", "FastAPI", "PyTorch", "GitHub Actions"],
    github: "https://github.com/aakashkolli/adaptive-ml-serving",
  },
  {
    title: "ML for European Options",
    description:
      "ML-powered options pricing and volatility modeling for SPX contracts - Financial Engineering Club, Fall 2025.",
    stack: ["Python", "Scikit-learn", "Black-Scholes", "Streamlit"],
    github: "https://github.com/jasonydog9/FEC-European-options-7",
    imagePath: "/projects/quant.png",
  },
  {
    title: "Arden",
    description:
      "AI copilot for psychiatric assessment, fusing emotion detection and crisis keyword analysis.",
    stack: ["Python", "React", "TypeScript", "LiveKit", "Supabase"],
    github: "https://github.com/yyardi/nexhacks",
    imagePath: "/projects/arden.png",
  },
];

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div
        key={project.title}
        className="card-surface flex flex-col fade-in group transform transition duration-200 hover:-translate-y-1 hover:shadow-lg"
        style={{ animationDelay: `${index * 0.08}s` }}
      >
        {project.imagePath && (
          <div className="w-full aspect-[16/10] bg-muted border-b border-border flex items-center justify-center overflow-hidden">
            {!imageError ? (
              <img
                src={project.imagePath}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                onError={() => setImageError(true)}
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
                  className="text-muted-foreground hover:text-foreground transition-colors transform transition-transform duration-200 group-hover:scale-110"
                  aria-label={`${project.title} source code`}
                  onClick={() => gtagEvent('project_link_click', { project: project.title, type: 'github' })}
                >
                  <IconGithub className="w-4 h-4" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors transform transition-transform duration-200 group-hover:scale-110"
                  aria-label={`${project.title} live demo`}
                  onClick={() => gtagEvent('project_link_click', { project: project.title, type: 'demo' })}
                >
                  <IconExternalLink className="w-4 h-4" />
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
      </div>
    );
  };

const Projects = () => {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="container-narrow">
        <div className="mb-12 fade-in">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
