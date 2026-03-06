import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const SECTIONS = ["experience", "projects", "skills", "education"] as const;
const LABELS: Record<string, string> = {
  experience: "Experience",
  projects: "Projects",
  skills: "Skills",
  education: "Education",
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  
  useEffect(() => {
    const handleScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          
          intersecting.sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActive(intersecting[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`site-nav fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm ${visible ? "visible" : ""}`}>
      <div className="container-narrow flex items-center justify-between h-14">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-sm text-foreground hover:text-muted-foreground transition-colors"
        >
          Aakash Kolli
        </button>

        {/* Nav links + dark toggle */}
        <nav className="flex items-center gap-6 nav-links">
          {SECTIONS.map((id, idx) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`link font-mono text-xs uppercase tracking-wider pb-0.5 border-b transition-colors ${
                active === id
                  ? "text-foreground border-foreground"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
              style={{ order: idx }}
            >
              {LABELS[id]}
            </button>
          ))}

          <button onClick={toggle} aria-label="Toggle theme" className="link text-muted-foreground hover:text-foreground transition-colors">
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
