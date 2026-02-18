import { motion } from "framer-motion";
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
  FlaskIcon,
  SocketIOIcon,
  LiveKitIcon,
  PyTorchIcon,
  StreamlitIcon,
  GitIcon,
  DockerIcon,
  GCPIcon,
  AzureIcon,
  SupabaseIcon,
  RenderIcon,
  JupyterIcon,
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
      { name: "Java", Icon: JavaIcon },
      { name: "JavaScript", Icon: JavaScriptIcon },
      { name: "TypeScript", Icon: TypeScriptIcon },
      { name: "MATLAB", Icon: MATLABIcon },
      { name: "SQL", Icon: SQLIcon },
    ],
  },
  {
    title: "frameworks & libraries",
    items: [
      { name: "React", Icon: ReactIcon },
      { name: "Node.js", Icon: NodeJSIcon },
      { name: "Flask", Icon: FlaskIcon },
      { name: "Socket.IO", Icon: SocketIOIcon },
      { name: "LiveKit", Icon: LiveKitIcon },
      { name: "PyTorch", Icon: PyTorchIcon },
      { name: "Streamlit", Icon: StreamlitIcon },
    ],
  },
  {
    title: "developer tools",
    items: [
      { name: "Git", Icon: GitIcon },
      { name: "Docker", Icon: DockerIcon },
      { name: "GCP", Icon: GCPIcon },
      { name: "Azure", Icon: AzureIcon },
      { name: "Supabase", Icon: SupabaseIcon },
      { name: "Render", Icon: RenderIcon },
      { name: "Jupyter", Icon: JupyterIcon },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="card-surface p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-4">
                {cat.title}
              </h3>
              <div className="grid grid-cols-3 gap-3">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
