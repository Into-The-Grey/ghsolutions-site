import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://greyhat-solutions.com"),
  title: {
    default: "GreyHat Solutions",
    template: "%s | GreyHat Solutions",
  },
  description:
    "Security-minded systems, technical tools, automation, AI-assisted workflows, and digital infrastructure built around control, privacy, and reliability.",
  keywords: [
    "GreyHat Solutions",
    "cybersecurity",
    "automation",
    "homelab",
    "OSINT",
    "AI tools",
    "technical infrastructure",
    "self-hosting",
  ],
  authors: [{ name: "GreyHat Solutions" }],
  creator: "GreyHat Solutions",
  openGraph: {
    title: "GreyHat Solutions",
    description:
      "Security-minded systems, technical tools, automation, AI-assisted workflows, and digital infrastructure.",
    url: "https://greyhat-solutions.com",
    siteName: "GreyHat Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreyHat Solutions",
    description:
      "Security-minded systems, technical tools, automation, AI-assisted workflows, and digital infrastructure.",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

const themeScript = `
(function () {
  try {
    var theme = localStorage.getItem("ghs-theme") || "dark";
    var reducedMotion = localStorage.getItem("ghs-reduced-motion") === "true";
    var highContrast = localStorage.getItem("ghs-high-contrast") === "true";
    document.documentElement.classList.remove("theme-dark", "theme-light");
    document.documentElement.classList.add("theme-" + theme);
    if (reducedMotion) document.documentElement.classList.add("reduced-motion");
    if (highContrast) document.documentElement.classList.add("high-contrast");
  } catch (e) {
    document.documentElement.classList.add("theme-dark");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}