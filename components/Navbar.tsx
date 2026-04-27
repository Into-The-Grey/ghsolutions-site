"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-bold tracking-[0.25em] text-neutral-100"
          onClick={() => setIsOpen(false)}
        >
          GHSOLUTIONS
        </Link>
        <div className="hidden items-center gap-6 text-sm text-neutral-400 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-neutral-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="rounded-xl border border-neutral-700 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300 transition hover:border-neutral-400 hover:text-neutral-100 sm:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </nav>
      {isOpen ? (
        <div className="border-t border-neutral-800 bg-neutral-950 px-6 py-4 sm:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm font-medium text-neutral-300 transition hover:border-neutral-600 hover:text-neutral-100"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}