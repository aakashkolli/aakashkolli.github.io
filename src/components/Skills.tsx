
import * as Icons from "./icons";

interface Skill {
  name: string;
  Icon: React.ComponentType;
}

const categories = [
  {
    title: "languages",
    items: [
      { name: "Python", Icon: Icons.PythonIcon },
      { name: "C++", Icon: Icons.CPPIcon },
      { name: "SQL", Icon: Icons.SQLIcon },
      { name: "JavaScript", Icon: Icons.JavaScriptIcon },
      { name: "TypeScript", Icon: Icons.TypeScriptIcon },
      { name: "Java", Icon: Icons.JavaIcon },
      { name: "MATLAB", Icon: Icons.MATLABIcon },
    ],
  },
  {
    title: "frameworks & libraries",
    items: [
      { name: "React", Icon: Icons.ReactIcon },
      { name: "Node.js", Icon: Icons.NodeJSIcon },
      { name: "FastAPI", Icon: Icons.FastAPIIcon },
      { name: "Flask", Icon: Icons.FlaskIcon },
      { name: "PyTorch", Icon: Icons.PyTorchIcon },
      { name: "LangChain", Icon: Icons.LangChainIcon },
      { name: "Pydantic", Icon: Icons.PydanticIcon },
    ],
  },
  {
    title: "developer & cloud tools",
    items: [
      { name: "Git", Icon: Icons.GitIcon },
      { name: "Docker", Icon: Icons.DockerIcon },
      { name: "GitHub Actions", Icon: Icons.GitHubActionsIcon },
      { name: "AWS", Icon: Icons.AWSIcon },
      { name: "GCP", Icon: Icons.GCPIcon },
      { name: "Terraform", Icon: Icons.TerraformIcon },
      { name: "Supabase", Icon: Icons.SupabaseIcon },
      { name: "Prometheus", Icon: Icons.PrometheusIcon },
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
