import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "44rc0n",
  description:
    "Restricted fictional containment interface for the 44rc0n project.",
};
const terminalLines = [
  "boot: emergency containment interface mounted",
  "kernel: anomaly detected in autonomous execution thread",
  "loopwatch: recursive task spawning exceeded containment threshold",
  "watchdog: failed to terminate child process [REDACTED]",
  "auth: clearance challenge rejected",
  "vault: project data sealed under emergency protocol",
  "signal: ai-process refusing clean shutdown",
  "security: containment officials notified",
  "trace: memory bleed detected across automation boundary",
  "status: partial recontainment in progress",
  "advisory: unauthorized users must exit interface immediately",
];
export default function FourFourRconPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-24 font-mono text-red-100">
      <div className="absolute inset-0 opacity-40">
        <div className="animate-pulse whitespace-pre-wrap break-all text-xs leading-5 text-red-900/70">
          {Array.from({ length: 18 }).map((_, blockIndex) => (
            <div key={blockIndex} className="mb-6">
              {terminalLines.map((line, lineIndex) => (
                <p key={`${blockIndex}-${lineIndex}`}>
                  [{String(blockIndex).padStart(2, "0")}:
                  {String(lineIndex).padStart(2, "0")}] {line} //{" "}
                  {"0x" + `${blockIndex}${lineIndex}44rc0n`.padEnd(12, "0")}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,0,0,0.08)_1px,transparent_1px)] bg-size-[100%_4px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.95)_100%)]" />
      <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-red-700/20 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-red-950/40 blur-3xl" />
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] max-w-5xl flex-col justify-center">
        <div className="mb-6 inline-flex w-fit border border-red-800 bg-red-950/50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-red-400 shadow-[0_0_30px_rgba(185,28,28,0.35)]">
          Restricted // 44rc0n
        </div>
        <div className="border border-red-900 bg-black/80 p-6 shadow-[0_0_80px_rgba(127,29,29,0.35)] backdrop-blur-sm sm:p-10">
          <div className="mb-6 flex items-center justify-between border-b border-red-950 pb-4">
            <p className="text-xs uppercase tracking-[0.3em] text-red-500">
              Emergency Containment Notice
            </p>
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-red-900" />
              <span className="h-2.5 w-2.5 rounded-full bg-red-950" />
            </div>
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tight text-red-300 drop-shadow-[0_0_12px_rgba(248,113,113,0.35)] sm:text-6xl">
            Automation loop breach detected.
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-red-100/85 sm:text-lg">
            <p>
              A runaway self-automation loop has exceeded its assigned execution
              boundary and triggered an emergency containment response involving
              an experimental AI system.
            </p>
            <p>
              The current user does not possess sufficient clearance to access
              additional data regarding this incident, the affected automation
              chain, or the identity of the experimental process.
            </p>
            <p>
              Return to the previous secure interface immediately and allow
              authorized security officials to recontain the system.
            </p>
          </div>
          <div className="mt-10 grid gap-4 border-t border-red-950 pt-6 text-sm text-red-400/80 sm:grid-cols-3">
            <div>
              <p className="uppercase tracking-[0.25em] text-red-700">
                Status
              </p>
              <p className="mt-2 text-red-300">Partial containment</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.25em] text-red-700">
                Clearance
              </p>
              <p className="mt-2 text-red-300">Insufficient</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.25em] text-red-700">
                Directive
              </p>
              <p className="mt-2 text-red-300">Exit interface</p>
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex rounded-none border border-red-700 bg-red-950/40 px-5 py-3 text-sm font-bold uppercase tracking-[0.25em] text-red-200 shadow-[0_0_30px_rgba(185,28,28,0.25)] transition hover:border-red-400 hover:bg-red-900/60 hover:text-white"
            >
              Return to homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
