"use client";
import { useEffect, useState } from "react";

type ThemeMode = "dark" | "light";

export default function SettingsPanel() {
    const [theme, setTheme] = useState<ThemeMode>("dark");
    const [reducedMotion, setReducedMotion] = useState(false);
    const [highContrast, setHighContrast] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("ghs-theme") as ThemeMode | null;
        const storedMotion = localStorage.getItem("ghs-reduced-motion");
        const storedContrast = localStorage.getItem("ghs-high-contrast");
        if (storedTheme === "light" || storedTheme === "dark") {
            setTheme(storedTheme);
            applyTheme(storedTheme);
        }
        if (storedMotion === "true") {
            setReducedMotion(true);
            document.documentElement.classList.add("reduced-motion");
        }
        if (storedContrast === "true") {
            setHighContrast(true);
            document.documentElement.classList.add("high-contrast");
        }
    }, []);

    function applyTheme(nextTheme: ThemeMode) {
        document.documentElement.classList.remove("theme-dark", "theme-light");
        document.documentElement.classList.add(`theme-${nextTheme}`);
        localStorage.setItem("ghs-theme", nextTheme);
    }

    function handleThemeChange(nextTheme: ThemeMode) {
        setTheme(nextTheme);
        applyTheme(nextTheme);
    }

    function handleReducedMotionChange(value: boolean) {
        setReducedMotion(value);
        localStorage.setItem("ghs-reduced-motion", String(value));
        if (value) {
            document.documentElement.classList.add("reduced-motion");
        } else {
            document.documentElement.classList.remove("reduced-motion");
        }
    }

    function handleHighContrastChange(value: boolean) {
        setHighContrast(value);
        localStorage.setItem("ghs-high-contrast", String(value));
        if (value) {
            document.documentElement.classList.add("high-contrast");
        } else {
            document.documentElement.classList.remove("high-contrast");
        }
    }

    return (
        <div className="grid gap-6">
            {/* Display Preferences */}
            <section className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur sm:p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                    Interface
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-100">
                    Display Preferences
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
                    These settings are stored locally in your browser. User accounts and
                    cloud-synced preferences can be added later.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <button
                        type="button"
                        onClick={() => handleThemeChange("dark")}
                        className={`rounded-3xl border p-5 text-left transition ${theme === "dark"
                                ? "border-white bg-neutral-950 text-white shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                                : "border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-600"
                            }`}
                    >
                        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                            Theme
                        </p>
                        <h3 className="mt-2 text-xl font-semibold">Dark Mode</h3>
                        <p className="mt-3 text-sm leading-6 text-neutral-400">
                            Default command-center interface with dark surfaces and muted
                            contrast.
                        </p>
                    </button>
                    <button
                        type="button"
                        onClick={() => handleThemeChange("light")}
                        className={`rounded-3xl border p-5 text-left transition ${theme === "light"
                                ? "border-neutral-950 bg-white text-neutral-950 shadow-[0_0_40px_rgba(255,255,255,0.12)]"
                                : "border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-600"
                            }`}
                    >
                        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                            Theme
                        </p>
                        <h3 className="mt-2 text-xl font-semibold">Light Mode</h3>
                        <p className="mt-3 text-sm leading-6 text-neutral-500">
                            Brighter interface for readability, daylight use, or lower visual
                            intensity.
                        </p>
                    </button>
                </div>
            </section>

            {/* Accessibility toggles */}
            <section className="grid gap-6 md:grid-cols-2">
                <SettingToggle
                    title="Reduced Motion"
                    description="Minimizes non-essential animations and motion effects across the interface."
                    enabled={reducedMotion}
                    onChange={handleReducedMotionChange}
                />
                <SettingToggle
                    title="High Contrast"
                    description="Increases border and text contrast for stronger visual separation."
                    enabled={highContrast}
                    onChange={handleHighContrastChange}
                />
            </section>

            {/* Future layer */}
            <section className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur sm:p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                    Future Layer
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-100">
                    Account controls are planned, not active.
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <FutureItem title="User Accounts" />
                    <FutureItem title="Saved Preferences" />
                    <FutureItem title="Private Dashboard" />
                </div>
            </section>
        </div>
    );
}

function SettingToggle({
    title,
    description,
    enabled,
    onChange,
}: {
    title: string;
    description: string;
    enabled: boolean;
    onChange: (value: boolean) => void;
}) {
    return (
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-[0_0_60px_rgba(255,255,255,0.03)] backdrop-blur">
            <div className="flex items-start justify-between gap-6">
                <div>
                    <h3 className="text-2xl font-semibold text-neutral-100">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-neutral-400">
                        {description}
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => onChange(!enabled)}
                    className={`relative h-8 w-14 shrink-0 rounded-full border transition ${enabled
                            ? "border-white bg-white"
                            : "border-neutral-700 bg-neutral-950"
                        }`}
                    aria-pressed={enabled}
                    aria-label={`${title}: ${enabled ? "enabled" : "disabled"}`}
                >
                    <span
                        className={`absolute top-1 h-6 w-6 rounded-full transition-all ${enabled ? "left-7 bg-neutral-950" : "left-1 bg-neutral-500"
                            }`}
                    />
                </button>
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.25em] text-neutral-600">
                {enabled ? "Enabled" : "Disabled"}
            </p>
        </div>
    );
}

function FutureItem({ title }: { title: string }) {
    return (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
            <p className="text-sm font-semibold text-neutral-200">{title}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-600">
                Planned
            </p>
        </div>
    );
}
