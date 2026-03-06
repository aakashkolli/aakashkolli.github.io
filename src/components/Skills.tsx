
import {
  PythonIcon,
  CPPIcon,
  JavaIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  MATLABIcon,
  SQLIcon,
  ReactIcon,
  NodeJSIcon,
  FastAPIIcon,
  FlaskIcon,
  PyTorchIcon,
  LangChainIcon,
  PydanticIcon,
  GitIcon,
  DockerIcon,
  GitHubActionsIcon,
  GCPIcon,
  TerraformIcon,
  SupabaseIcon,
  PrometheusIcon,
  RIcon,
  AWSIcon,
} from "./icons";

interface Skill {
  name: string;
  Icon: React.ComponentType;
}

const categories = [
  {
    title: "languages",
    items: [
      { name: "Python", Icon: PythonIcon },
      { name: "C++", Icon: CPPIcon },
      { name: "SQL", Icon: SQLIcon },
      { name: "R", Icon: RIcon },   
      { name: "JavaScript", Icon: JavaScriptIcon },
      { name: "TypeScript", Icon: TypeScriptIcon },
      { name: "Java", Icon: JavaIcon },
      { name: "MATLAB", Icon: MATLABIcon },
    ],
  },
  {
    title: "frameworks & libraries",
    items: [
      { name: "React", Icon: ReactIcon },
      { name: "Node.js", Icon: NodeJSIcon },
      { name: "FastAPI", Icon: FastAPIIcon },
      { name: "Flask", Icon: FlaskIcon },
      { name: "PyTorch", Icon: PyTorchIcon },
      { name: "LangChain", Icon: LangChainIcon },
      { name: "Pydantic", Icon: PydanticIcon },
    ],
  },
  {
    title: "developer & cloud tools",
    items: [
      { name: "Git", Icon: GitIcon },
      { name: "Docker", Icon: DockerIcon },
      { name: "GitHub Actions", Icon: GitHubActionsIcon },
      { name: "AWS", Icon: AWSIcon },
      { name: "GCP", Icon: GCPIcon },
      { name: "Terraform", Icon: TerraformIcon },
      { name: "Supabase", Icon: SupabaseIcon },
      { name: "Prometheus", Icon: PrometheusIcon },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="container-narrow">
        <div className="mb-12 fade-in">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <div key={cat.title} className="card-surface p-6 fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <h3 className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-4">
                {cat.title}
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2 p-2 hover:bg-muted/50 transition-colors rounded group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                      <item.Icon />
                    </div>
                    <span className="text-[10px] text-muted-foreground text-center leading-tight">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
