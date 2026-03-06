import { useState, useEffect } from "react";
import { IconGithub, IconLinkedin, IconMail, IconChevronDown } from "@/components/icons/nav-icons";
import { useTypewriter } from "@/hooks/use-typewriter";

const SUBTITLE = "Stats + CS at UIUC";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const email = "akolli5@illinois.edu";
  const { typed, cursorOn } = useTypewriter(SUBTITLE, { speed: 55, startDelay: 850 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pb-16 relative hero-noise">
      <div className="flex flex-col items-center justify-center w-full h-full relative z-10">
        <div className="fade-in" style={{ animationDelay: "0s" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-8 text-center">
            <span style={{ cursor: "pointer", display: "inline-block" }}>
              {"Aakash Kolli".split("").map((char, i) => (
                <span key={i} style={{ display: "inline-block" }}>{char === " " ? "\u00a0" : char}</span>
              ))}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-md leading-relaxed mb-12 text-center font-mono">
            {typed}
            <span className="transition-opacity duration-75" style={{ opacity: cursorOn ? 1 : 0 }}>
              |
            </span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-xl justify-center fade-in delay-200">
          <a
            href="https://github.com/aakashkolli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
          >
            <IconGithub className="w-6 h-6" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aakash-kolli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
          >
            <IconLinkedin className="w-6 h-6" />
            LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label={`Send an email to ${email}`}
          >
            <IconMail className="w-6 h-6" />
            Email
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          aria-label="Scroll down"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          className={`text-foreground hover:text-muted-foreground transition-colors ${scrolled ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}`}
          style={{ transition: "opacity .5s ease, transform .5s ease", transitionDelay: scrolled ? "0s" : "1.2s" }}
        >
          <div className="chev-bounce">
            <IconChevronDown className="w-12 h-12" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
