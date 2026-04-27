import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ghsolutions.example"),
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
    url: "https://ghsolutions.example",
    siteName: "GreyHat Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreyHat Solutions",
    description:
      "Security-minded systems, technical tools, automation, AI-assisted workflows, and digital infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}