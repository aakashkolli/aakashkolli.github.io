import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";
// ...existing imports...

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [uiucHovered, setUiucHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleUiucEnter = () => setUiucHovered(true);
  const handleUiucLeave = () => setUiucHovered(false);

  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const email = "akolli5@illinois.edu";
  const handleProviderClick = (provider: "default" | "gmail" | "outlook") => {
    let url = "";
    if (provider === "gmail") {
      url = `https://mail.google.com/mail/?view=cm&to=${email}`;
      window.open(url, "_blank");
    } else if (provider === "outlook") {
      url = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`;
      window.open(url, "_blank");
    } else {
      url = `mailto:${email}`;
      window.location.href = url;
    }
    setEmailDialogOpen(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pb-24 relative">
      <div className="container-narrow w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-8 italic">
            hey, it's{' '}
            <span
              className={hovered ? 'gradient-clip' : 'gradient-solid'}
              style={{ cursor: 'pointer', display: 'inline-block' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {'Aakash'.split('').map((char, i) => (
                <span key={i} style={{ display: 'inline-block' }}>{char}</span>
              ))}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-md leading-relaxed mb-12">
            stats + cs @{' '}
            <span
              className={uiucHovered ? 'uiuc-gradient-clip' : 'uiuc-gradient-solid'}
              style={{ cursor: 'pointer', display: 'inline-block' }}
              onMouseEnter={handleUiucEnter}
              onMouseLeave={handleUiucLeave}
            >
              {'uiuc'.split('').map((char, i) => (
                <span key={i} style={{ display: 'inline-block' }}>{char}</span>
              ))}
            </span>
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="https://github.com/aakashkolli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            github
          </a>
          <a
            href="https://linkedin.com/in/aakash-kolli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            linkedin
          </a>
          <Dialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen}>
            <DialogTrigger asChild>
              <button
                className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors focus:outline-none"
                aria-label="Contact via email"
              >
                <Mail className="w-4 h-4" />
                email
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact via Email</DialogTitle>
                <DialogDescription>
                  Choose your preferred email provider to compose a message to <b>{email}</b>.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 mt-4">
                <button
                  className="flex items-center gap-3 px-4 py-2 rounded hover:bg-accent transition-colors"
                  onClick={() => handleProviderClick("default")}
                  aria-label="Default Email App"
                >
                  <img src="/logos/apple-mail.png" alt="Mail logo" width={28} height={28} className="w-7 h-7 object-contain" />
                  <span className="text-base">Default Email App</span>
                </button>
                <button
                  className="flex items-center gap-3 px-4 py-2 rounded hover:bg-accent transition-colors"
                  onClick={() => handleProviderClick("gmail")}
                  aria-label="Gmail"
                >
                  <img src="/logos/gmail.png" alt="Gmail logo" width={28} height={28} className="w-7 h-7 object-contain" />
                  <span className="text-base">Gmail</span>
                </button>
                <button
                  className="flex items-center gap-3 px-4 py-2 rounded hover:bg-accent transition-colors"
                  onClick={() => handleProviderClick("outlook")}
                  aria-label="Outlook"
                >
                  <img src="/logos/outlook.png" alt="Outlook logo" width={28} height={28} className="w-7 h-7 object-contain" />
                  <span className="text-base">Outlook</span>
                </button>
              </div>
              <DialogClose asChild>
                <button className="mt-6 w-full py-2 rounded bg-muted-foreground text-background hover:bg-foreground transition-colors">Cancel</button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>

      <motion.button
        aria-label="Scroll down"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground hover:text-muted-foreground transition-colors"
        initial={{ opacity: 0, y: -8 }}
        animate={scrolled ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: scrolled ? 0 : 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-10 h-10" strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
