import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEGHEMOUCHE ILYES - Full-Stack Developer Portfolio",
  description: "Modern portfolio showcasing web development projects with React, Next.js, Node.js, and MongoDB",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Neghemouche Ilyes" }],
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%23a3e635;stop-opacity:1' /><stop offset='100%25' style='stop-color:%2384cc16;stop-opacity:1' /></linearGradient></defs><rect width='100' height='100' rx='20' fill='url(%23grad)'/><text x='50' y='70' font-size='60' font-weight='bold' text-anchor='middle' fill='%23000000' font-family='monospace'>&lt;/&gt;</text></svg>",
        type: "image/svg+xml",
      }
    ],
    shortcut: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%23a3e635;stop-opacity:1' /><stop offset='100%25' style='stop-color:%2384cc16;stop-opacity:1' /></linearGradient></defs><rect width='100' height='100' rx='20' fill='url(%23grad)'/><text x='50' y='70' font-size='60' font-weight='bold' text-anchor='middle' fill='%23000000' font-family='monospace'>&lt;/&gt;</text></svg>",
      }
    ],
    apple: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%23a3e635;stop-opacity:1' /><stop offset='100%25' style='stop-color:%2384cc16;stop-opacity:1' /></linearGradient></defs><rect width='100' height='100' rx='20' fill='url(%23grad)'/><text x='50' y='70' font-size='60' font-weight='bold' text-anchor='middle' fill='%23000000' font-family='monospace'>&lt;/&gt;</text></svg>",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
