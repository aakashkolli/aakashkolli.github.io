const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container-narrow flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aakash Kolli
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/aakashkolli" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            github
          </a>
          <a href="https://linkedin.com/in/aakash-kolli" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            linkedin
          </a>
          <a href="mailto:akolli5@illinois.edu" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
