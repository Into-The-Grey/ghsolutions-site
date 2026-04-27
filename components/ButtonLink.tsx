import Link from "next/link";

type ButtonLinkProps = {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
};

export default function ButtonLink({
    href,
    children,
    variant = "primary",
}: ButtonLinkProps) {
    const classes =
        variant === "primary"
            ? "rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            : "rounded-2xl border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100 transition hover:border-neutral-400";

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
}