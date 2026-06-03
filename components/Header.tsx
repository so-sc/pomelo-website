import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 w-full border-b border-border bg-navbar-background backdrop-blur-md supports-[backdrop-filter]:bg-navbar-background/80">
      <div className="mx-auto flex h-full max-w-[90rem] items-center justify-between px-4">
        {/* Left Section: Logo & Primary Nav */}
        <div className="flex items-center gap-6">
          <Logo />

          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <a href="#installation" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
            <a href="#api" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              API Reference
            </a>
            <a href="https://github.com/so-sc/pomelo/releases" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Changelog
            </a>
            <a href="https://github.com/so-sc/pomelo" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Showcase
            </a>
          </nav>
        </div>

        {/* Right Section: Search, Actions, Socials */}
        <div className="flex items-center gap-3.5">
          {/* Search Button Mockup */}
          <button className="hidden sm:flex items-center gap-2 rounded-md border border-border bg-muted/40 px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-muted transition-colors cursor-pointer select-none">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span className="pr-4">Search documentation...</span>
            <kbd className="pointer-events-none hidden md:inline-flex h-4.5 select-none items-center gap-0.5 rounded border border-border/50 bg-background px-1.5 font-mono text-[9px] font-semibold text-muted-foreground">
              <span>⌘</span>K
            </kbd>
          </button>

          {/* Socials & Theme */}
          <div className="flex items-center gap-1.5 border-l border-border pl-3.5">
            <ThemeToggle />

            {/* GitHub */}
            <a
              href="https://github.com/so-sc/pomelo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="GitHub Repository"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
