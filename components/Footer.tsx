import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12 px-4 w-full">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-border">
          {/* Logo & Tagline column */}
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-xs text-muted-foreground max-w-[200px] mt-1 leading-relaxed">
              High-performance Javascript developer tools and runtime environment.
            </p>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              Resources
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#introduction" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#installation" className="text-muted-foreground hover:text-foreground transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="#configuration" className="text-muted-foreground hover:text-foreground transition-colors">
                  Configuration
                </a>
              </li>
              <li>
                <a href="#api" className="text-muted-foreground hover:text-foreground transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Community column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              Community
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://github.com/so-sc/pomelo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/so-sc/pomelo/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/so-sc/pomelo/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Discussions
                </a>
              </li>
            </ul>
          </div>

          {/* Project Info column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              Project
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://github.com/so-sc/pomelo/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  MIT License
                </a>
              </li>
              <li>
                <a href="https://github.com/so-sc/pomelo/releases" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="https://github.com/so-sc/pomelo/blob/main/SECURITY.md" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Security Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Pomelo. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground/60">Released under the MIT License</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
