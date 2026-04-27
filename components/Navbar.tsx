import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="text-sm font-bold tracking-[0.25em] text-neutral-100"
                >
                    GHSOLUTIONS
                </Link>

                <div className="hidden items-center gap-6 text-sm text-neutral-400 sm:flex">
                    <Link href="/about" className="transition hover:text-neutral-100">
                        About
                    </Link>
                    <Link href="/projects" className="transition hover:text-neutral-100">
                        Projects
                    </Link>
                    <Link href="/services" className="transition hover:text-neutral-100">
                        Services
                    </Link>
                    <Link href="/contact" className="transition hover:text-neutral-100">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}