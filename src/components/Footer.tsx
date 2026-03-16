const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display font-semibold text-sm text-foreground">RH Reengenharia</span>
      <span className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} · Todos os direitos reservados</span>
    </div>
  </footer>
);

export default Footer;
