"use client";

import { useEffect, useState } from "react";

export default function Logo() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    checkTheme();

    return () => observer.disconnect();
  }, []);

  return (
    <a href="/" id="logo-home" className="flex items-center select-none" aria-label="Pomelo home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={theme === "dark" ? "/pomelo_white.svg" : "/poemlo_black.svg"}
        alt="Pomelo"
        className="h-9 w-auto"
      />
    </a>
  );
}
