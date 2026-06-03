import CodeBlock from "./CodeBlock";
import CopyButton from "./CopyButton";

const INSTALL_CMD = "curl -fsSL https://bun.sh/install | bash";

export default function DocsContent() {
  return (
    <main className="min-w-0 flex-1 py-4 pl-0 md:pl-6">
      <div className="max-w-[75ch]">
        <section id="introduction" className="mb-8 scroll-mt-20">
          <div className="mb-2 text-lg font-bold text-primary">
            Pomelo
          </div>
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-foreground">
            Introduction
          </h1>
          <p className="mb-4 text-base leading-7 text-muted-foreground">
            Pomelo is a fast, drop-in JavaScript runtime. It is designed to work immediately on macOS and Linux with no configuration required.
          </p>

          <div className="mb-4 flex w-full max-w-lg items-center justify-between gap-3 rounded-lg border border-border bg-input px-3 py-2 font-mono text-sm text-foreground">
            <div className="flex items-center gap-2 min-w-0">
              <span className="shrink-0 text-primary select-none">$</span>
              <span className="truncate">{INSTALL_CMD}</span>
            </div>
            <CopyButton text={INSTALL_CMD} />
          </div>

          <p className="text-xs text-muted-foreground">
            macOS and Linux only. No native Windows support.
          </p>
        </section>

        <section id="installation" className="mb-8 scroll-mt-20">
          <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Getting Started
          </h2>
          <h3 className="mb-3 text-2xl font-bold text-foreground">
            Installation
          </h3>
          <p className="mb-3 text-base leading-7 text-muted-foreground">
            Pomelo ships as a single self-contained binary. The installer script detects your shell, writes the binary to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">~/.pomelo/bin</code>, and appends the PATH export to your shell profile automatically.
          </p>

          <h4 className="mb-1.5 text-sm font-semibold text-foreground">Prerequisites</h4>
          <ul className="mb-3 list-inside list-disc space-y-0.5 text-sm text-muted-foreground">
            <li>macOS 12+ or Linux</li>
            <li>
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">curl</code> installed in <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">$PATH</code>
            </li>
            <li>bash, zsh, or fish shell</li>
          </ul>

          <h4 className="mb-1 text-sm font-semibold text-foreground">Expected output</h4>
          <p className="mb-2 text-sm leading-6 text-muted-foreground">
            After running the command above, you will see output similar to:
          </p>
          <CodeBlock
            language="text"
            code={`
Downloading pomelo v1.0.0 for linux-x64...
Downloaded in 1.2s

Installing to ~/.pomelo/bin/pomelo
Installed successfully

Adding to PATH in ~/.bashrc
Shell profile updated

Run 'pomelo --version' to verify the installation.
            `}
          />

          <div className="rounded-lg border border-border bg-accent/30 px-4 py-3 text-sm text-accent-foreground">
            <strong className="font-semibold">Note:</strong> Restart your terminal or run{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">source ~/.bashrc</code> (or your equivalent profile file) for the PATH changes to take effect.
          </div>
        </section>

        <section id="configuration" className="mb-8 scroll-mt-20">
          <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Configuration
          </h2>
          <h3 className="mb-3 text-2xl font-bold text-foreground">
            pomelo.toml
          </h3>
          <p className="mb-3 text-base leading-7 text-muted-foreground">
            Pomelo is zero-config by default, but supports an optional{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">pomelo.toml</code> file at your project root for fine-grained control.
          </p>

          <CodeBlock
            filename="pomelo.toml"
            language="toml"
            code={`
[runtime]
version = "1.0.0"
smol = true

[server]
port = 3000
host = "0.0.0.0"

[build]
target = "bun"
minify = true
sourcemap = "external"

[env]
NODE_ENV = "production"
            `}
          />

          <h4 className="mb-2 mt-4 text-sm font-semibold text-foreground">Configuration options</h4>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="px-3 py-2 text-left font-semibold text-foreground">Key</th>
                  <th className="px-3 py-2 text-left font-semibold text-foreground">Type</th>
                  <th className="px-3 py-2 text-left font-semibold text-foreground">Default</th>
                  <th className="px-3 py-2 text-left font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["server.port", "number", "3000", "HTTP port to listen on"],
                  ["server.host", "string", "localhost", "Bind address"],
                  ["build.minify", "boolean", "false", "Minify output bundle"],
                  ["build.sourcemap", "string", "none", "Sourcemap generation mode"],
                ].map(([key, type, def, desc]) => (
                  <tr key={key} className="bg-card">
                    <td className="px-3 py-2 font-mono text-xs text-primary">{key}</td>
                    <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{type}</td>
                    <td className="px-3 py-2 font-mono text-xs text-muted-foreground">{def}</td>
                    <td className="px-3 py-2 text-muted-foreground">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="usage" className="mb-8 scroll-mt-20">
          <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Usage
          </h2>
          <h3 className="mb-3 text-2xl font-bold text-foreground">
            Basic Usage
          </h3>
          <p className="mb-3 text-base leading-7 text-muted-foreground">
            Pomelo runs TypeScript and JavaScript files directly. No build step required. It also ships with a built-in package manager compatible with npm, yarn, and pnpm lockfiles.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`
# Run a TypeScript file directly
pomelo run index.ts

# Install dependencies (reads package.json)
pomelo install

# Start a dev server with hot-reload
pomelo dev

# Build for production
pomelo build --target node
            `}
          />

          <p className="mb-3 text-base leading-7 text-muted-foreground">
            Here is a minimal HTTP server running entirely inside Pomelo with zero external dependencies:
          </p>

          <CodeBlock
            filename="server.ts"
            language="typescript"
            code={`
import { serve } from "pomelo";

serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response("Hello from Pomelo!", {
        headers: { "Content-Type": "text/plain" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log("Listening on http://localhost:3000");
            `}
          />
        </section>

        <section id="api" className="mb-8 scroll-mt-20">
          <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
            API Reference
          </h2>
          <h3 className="mb-3 text-2xl font-bold text-foreground">
            Built-in runtime API
          </h3>
          <p className="mb-3 text-base leading-7 text-muted-foreground">
            Pomelo exposes a set of global APIs modelled after the WinterCG standard, making your code portable across runtimes.
          </p>

          {[
            {
              method: "GET",
              path: "Pomelo.version",
              desc: "Returns the current Pomelo runtime version string.",
            },
            {
              method: "fn",
              path: "Pomelo.file(path)",
              desc: "Returns a Blob-compatible file handle for reading or streaming.",
            },
            {
              method: "fn",
              path: "Pomelo.env",
              desc: "Read/write access to process environment variables.",
            },
            {
              method: "fn",
              path: "Pomelo.serve(options)",
              desc: "Start an HTTP server. Compatible with the Fetch API handler signature.",
            },
          ].map((item) => (
            <div
              key={item.path}
              className="mb-2 flex flex-col gap-1 rounded-lg border border-border bg-card px-4 py-3 sm:flex-row sm:items-start sm:gap-4"
            >
              <span className="shrink-0 rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
                {item.method}
              </span>
              <div>
                <code className="font-mono text-sm font-medium text-foreground">
                  {item.path}
                </code>
                <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}

          <CodeBlock
            filename="example.ts"
            language="typescript"
            code={`
console.log(Pomelo.version);
// "1.0.0"

const file = Pomelo.file("./data.json");
const json = await file.json();

Pomelo.env.set("API_KEY", "secret");
console.log(Pomelo.env.get("API_KEY"));
// "secret"
            `}
          />
        </section>
      </div>
    </main>
  );
}
