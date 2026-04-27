import Link from "next/link";

const footerLinks = [
  {
    heading: "Site",
    links: [
      { href: "/about", label: "About" },
      { href: "/now", label: "Now" },
      { href: "/stack", label: "Stack" },
      { href: "/process", label: "Process" },
    ],
  },
  {
    heading: "Work",
    links: [
      { href: "/projects", label: "Projects" },
      { href: "/operations", label: "Operations" },
      { href: "/writeups", label: "Writeups" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/services", label: "Service Tracks" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 px-6 py-12 text-sm text-neutral-500">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-[1fr_auto] md:grid-cols-[1fr_repeat(3,auto)]">
          {/* Brand */}
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-neutral-300">
              GHSOLUTIONS
            </p>
            <p className="mt-2 max-w-xs leading-6">
              Security-minded systems, tools, and digital infrastructure.
            </p>
            <p className="mt-4 text-xs">
              Built with Next.js, Vercel, and Cloudflare.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                {group.heading}
              </p>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition hover:text-neutral-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-6 text-xs">
          © 2026 GreyHat Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
