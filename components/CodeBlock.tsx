interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({ code, language = "bash", filename }: CodeBlockProps) {
  return (
    <div className="my-5 overflow-hidden rounded-lg border border-border">
      {filename && (
        <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
            aria-hidden="true"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <span className="font-mono text-xs text-muted-foreground">{filename}</span>
        </div>
      )}
      <pre className="overflow-x-auto bg-secondary px-5 py-4 text-sm leading-relaxed text-foreground">
        <code className={`language-${language} font-mono`}>{code.trim()}</code>
      </pre>
    </div>
  );
}
