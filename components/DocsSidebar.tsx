const sidebarSections = [
  {
    title: "Getting Started",
    links: [
      { label: "Introduction", href: "#introduction" },
      { label: "Installation", href: "#installation" },
    ],
  },
  {
    title: "Configuration",
    links: [
      { label: "pomelo.toml", href: "#configuration" },
      { label: "Environment", href: "#configuration" },
    ],
  },
  {
    title: "Usage",
    links: [
      { label: "Basic Usage", href: "#usage" },
      { label: "Running Files", href: "#usage" },
      { label: "Package Manager", href: "#usage" },
    ],
  },
  {
    title: "API Reference",
    links: [
      { label: "Pomelo.version", href: "#api" },
      { label: "Pomelo.file()", href: "#api" },
      { label: "Pomelo.env", href: "#api" },
      { label: "Pomelo.serve()", href: "#api" },
    ],
  },
];

export default function DocsSidebar() {
  return (
    <aside className="hidden md:block sticky top-14 h-[calc(100vh-3.5rem)] w-56 shrink-0 overflow-y-auto border-r border-border">
      <div className="py-6 pr-4">
        {sidebarSections.map((section) => (
          <div key={section.title} className="mb-4">
            <p className="mb-1 px-3 text-xs font-semibold text-foreground">
              {section.title}
            </p>
            <ul>
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    id={`sidebar-${link.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className="block rounded-md px-3 py-1 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
