export default function DocsTOC() {
  const headings = [
    { id: "introduction", label: "Introduction" },
    { id: "installation", label: "Installation" },
    { id: "configuration", label: "Configuration" },
    { id: "usage", label: "Basic Usage" },
    { id: "api", label: "API Reference" },
  ];

  return (
    <aside className="hidden lg:block sticky top-14 h-[calc(100vh-3.5rem)] w-48 shrink-0 overflow-y-auto pl-6 py-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
        On this page
      </p>
      <nav aria-label="Table of contents">
        <ul className="space-y-1.5 text-xs">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                id={`toc-${h.id}`}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {h.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
