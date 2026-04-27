export default function PageAtmosphere() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            <div className="absolute left-1/2 top-0 h-105 w-180 -translate-x-1/2 rounded-full bg-neutral-800/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[64px_64px] mask-[linear-gradient(to_bottom,black,transparent_70%)]" />
            <div className="-right-40 absolute top-40 h-80 w-80 rounded-full border border-neutral-800/70" />
            <div className="-right-22.5 absolute top-52 h-44 w-44 rounded-full border border-neutral-700/50" />
            <div className="absolute bottom-0 left-0 h-64 w-full bg-linear-to-t from-neutral-950 to-transparent" />
        </div>
    );
}
