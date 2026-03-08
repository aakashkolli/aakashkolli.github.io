import { IconGithub, IconLinkedin, IconMail } from "@/components/icons/nav-icons";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container-narrow flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aakash Kolli
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/aakashkolli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            aria-label="Open GitHub profile (opens in new tab)"
          >
            <IconGithub className="w-5 h-5 transform transition-transform duration-200 group-hover:scale-110" />
          </a>
          <a
            href="https://linkedin.com/in/aakash-kolli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            aria-label="Open LinkedIn profile (opens in new tab)"
          >
            <IconLinkedin className="w-5 h-5 transform transition-transform duration-200 group-hover:scale-110" />
          </a>
          <a
            href="mailto:akolli5@illinois.edu"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            aria-label="Send an email"
          >
            <IconMail className="w-5 h-5 transform transition-transform duration-200 group-hover:scale-110" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
