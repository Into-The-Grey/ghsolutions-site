export default function HeroVisual() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(115,115,115,0.22),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.06),transparent_30%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
            <div className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-700/40 bg-neutral-900/10 shadow-[0_0_120px_rgba(255,255,255,0.08)]" />
            <div className="absolute left-1/2 top-1/2 h-85 w-85 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-700/50" />
            <div className="absolute left-1/2 top-1/2 h-45 w-45 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-600/60 bg-neutral-950/40" />
            <div className="absolute left-1/2 top-1/2 h-0.5 w-65 origin-left -translate-y-1/2 bg-linear-to-r from-neutral-200/60 to-transparent animate-[spin_9s_linear_infinite]" />
            <div className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-neutral-300 shadow-[0_0_24px_rgba(255,255,255,0.8)]" />
            <div className="absolute right-[22%] top-[34%] h-1.5 w-1.5 rounded-full bg-neutral-400 shadow-[0_0_20px_rgba(255,255,255,0.7)]" />
            <div className="absolute bottom-[24%] left-[30%] h-1.5 w-1.5 rounded-full bg-neutral-500 shadow-[0_0_18px_rgba(255,255,255,0.6)]" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-neutral-950 to-transparent" />
        </div>
    );
}
