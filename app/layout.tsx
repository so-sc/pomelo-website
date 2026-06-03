import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pomelo: Fast, lightweight runtime for developers",
  description:
    "Pomelo is a blazing-fast, all-in-one JavaScript runtime. Install in seconds, ship faster. Built for macOS and Linux.",
  keywords: ["pomelo", "runtime", "javascript", "developer tools", "fast"],
  openGraph: {
    title: "Pomelo: Fast, lightweight runtime for developers",
    description:
      "Pomelo is a blazing-fast, all-in-one JavaScript runtime. Install in seconds, ship faster.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
