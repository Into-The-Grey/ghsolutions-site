"use client";
import { operationNodes } from "@/lib/operations";
import { useMemo, useState } from "react";

export default function OperationsMap() {
    const [activeId, setActiveId] = useState("ghsolutions");
    const activeNode = useMemo(
        () =>
            operationNodes.find((node) => node.id === activeId) ??
            operationNodes[0],
        [activeId],
    );

    return (
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="relative min-h-155 overflow-hidden rounded-3xl border border-neutral-800 bg-black/70 p-6 shadow-[0_0_90px_rgba(255,255,255,0.04)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.09),transparent_32%),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[100%_100%,56px_56px,56px_56px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.96)_100%)]" />
                <svg
                    className="absolute inset-0 h-full w-full opacity-50"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <line
                        x1="50" y1="50" x2="18" y2="20"
                        stroke="currentColor" strokeWidth="0.15"
                        className="text-neutral-500"
                    />
                    <line
                        x1="50" y1="50" x2="82" y2="22"
                        stroke="currentColor" strokeWidth="0.15"
                        className="text-neutral-500"
                    />
                    <line
                        x1="50" y1="50" x2="20" y2="78"
                        stroke="currentColor" strokeWidth="0.15"
                        className="text-neutral-500"
                    />
                    <line
                        x1="50" y1="50" x2="82" y2="78"
                        stroke="currentColor" strokeWidth="0.15"
                        className="text-neutral-500"
                    />
                    <line
                        x1="18" y1="20" x2="82" y2="22"
                        stroke="currentColor" strokeWidth="0.08"
                        className="text-neutral-700"
                    />
                    <line
                        x1="18" y1="20" x2="82" y2="78"
                        stroke="currentColor" strokeWidth="0.08"
                        className="text-neutral-700"
                    />
                </svg>
                <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                                Operations Map
                            </p>
                            <h2 className="mt-2 text-2xl font-semibold text-neutral-100">
                                Project ecosystem topology
                            </h2>
                        </div>
                        <div className="hidden rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-xs uppercase tracking-[0.2em] text-neutral-500 sm:block">
                            Interactive
                        </div>
                    </div>
                </div>
                {operationNodes.map((node) => {
                    const isActive = node.id === activeId;
                    return (
                        <button
                            key={node.id}
                            type="button"
                            onClick={() => setActiveId(node.id)}
                            className={`absolute z-20 w-44 rounded-2xl border p-4 text-left backdrop-blur transition duration-300 ${node.position} ${
                                isActive
                                    ? "border-white/70 bg-white/10 shadow-[0_0_45px_rgba(255,255,255,0.16)]"
                                    : "border-neutral-800 bg-neutral-950/80 hover:-translate-y-1 hover:border-neutral-500"
                            }`}
                        >
                            <span className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                                {node.type}
                            </span>
                            <span className="mt-2 block text-lg font-bold text-neutral-100">
                                {node.label}
                            </span>
                            <span className="mt-2 block text-xs text-neutral-400">
                                {node.status}
                            </span>
                            <span className="mt-4 block h-1.5 overflow-hidden rounded-full bg-neutral-800">
                                <span
                                    className="block h-full rounded-full bg-neutral-300"
                                    style={{ width: `${node.maturity}%` }}
                                />
                            </span>
                        </button>
                    );
                })}
            </div>
            <aside className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Selected Node
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-100">
                    {activeNode.label}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                        {activeNode.type}
                    </span>
                    <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                        {activeNode.status}
                    </span>
                </div>
                <p className="mt-6 leading-7 text-neutral-300">
                    {activeNode.summary}
                </p>
                <div className="mt-8">
                    <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-neutral-500">
                        <span>Maturity</span>
                        <span>{activeNode.maturity}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-neutral-800">
                        <div
                            className="h-full rounded-full bg-neutral-200"
                            style={{ width: `${activeNode.maturity}%` }}
                        />
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                        Signals
                    </p>
                    <ul className="mt-4 space-y-3">
                        {activeNode.signals.map((signal) => (
                            <li
                                key={signal}
                                className="rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-300"
                            >
                                {signal}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
}
