"use client";
import { useEffect, useState } from "react";
const signals = [
    {
        label: "SYSTEM",
        message: "GreyHat Solutions online.",
    },
    {
        label: "VEGA",
        message: "Memory architecture and modular intelligence layer in progress.",
    },
    {
        label: "STAR",
        message: "Private assistant foundation staged for controlled expansion.",
    },
    {
        label: "KALI2GO",
        message: "Portable field-lab workflow under active refinement.",
    },
    {
        label: "D4RK5COU7",
        message: "Classification prototype staged for structured research.",
    },
];
export default function SignalConsole() {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % signals.length);
        }, 2600);
        return () => window.clearInterval(interval);
    }, []);
    return (
        <div className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-6 shadow-[0_0_80px_rgba(255,255,255,0.04)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                        Signal Console
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-neutral-100">
                        Live project pulse
                    </h2>
                </div>
                <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-500" />
                </div>
            </div>
            <div className="mt-6 space-y-3">
                {signals.map((signal, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={signal.label}
                            className={`rounded-2xl border px-4 py-3 transition ${isActive
                                    ? "border-neutral-500 bg-neutral-900 text-neutral-100 shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                                    : "border-neutral-800 bg-neutral-950 text-neutral-500"
                                }`}
                        >
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                                <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                                    {signal.label}
                                </span>
                                <span className="text-sm">{signal.message}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-neutral-500">
                <span className="h-2 w-2 animate-pulse rounded-full bg-neutral-300" />
                Monitoring active build state
            </div>
        </div>
    );
}
