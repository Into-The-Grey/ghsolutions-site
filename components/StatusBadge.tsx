type StatusBadgeProps = {
    children: React.ReactNode;
};

export default function StatusBadge({ children }: StatusBadgeProps) {
    return (
        <span className="inline-flex rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
            {children}
        </span>
    );
}