"use client";
import { useForm, ValidationError } from "@formspree/react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";
import type React from "react";

const FORM_ID = "xvzdnbwg";
const TURNSTILE_SITE_KEY = "0x4AAAAAABrwtKRJWlOJxunY";

const inputClass =
    "w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition placeholder:text-neutral-700 focus:border-neutral-500";
const errorClass = "mt-2 text-sm text-red-400";

function Field({
    label,
    htmlFor,
    children,
}: {
    label: string;
    htmlFor: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label
                htmlFor={htmlFor}
                className="text-xs uppercase tracking-[0.25em] text-neutral-500"
            >
                {label}
            </label>
            <div className="mt-3">{children}</div>
        </div>
    );
}

export default function ContactForm() {
    const [state, handleSubmit] = useForm(FORM_ID);
    const searchParams = useSearchParams();
    const selectedService = searchParams.get("service") ?? "";

    useEffect(() => {
        if (state.succeeded) {
            const prefersReducedMotion =
                document.documentElement.classList.contains("reduced-motion");
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "instant" : "smooth" });
        }
    }, [state.succeeded]);

    if (state.succeeded) {
        return (
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-8 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                    Inquiry Sent
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-100">
                    Message received.
                </h2>
                <p className="mt-5 max-w-2xl leading-7 text-neutral-400">
                    Your GreyHat Solutions intake request has been submitted. If the
                    details are clear enough to evaluate scope, the next step will be a
                    follow-up response.
                </p>
            </div>
        );
    }

    return (
        <>
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                async
                defer
            />
            <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur sm:p-8"
            >
                <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Your name"
                            className={inputClass}
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                            className={errorClass}
                        />
                    </Field>
                    <Field label="Email" htmlFor="email">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                            className={inputClass}
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            className={errorClass}
                        />
                    </Field>
                    <Field label="Phone / Text Optional" htmlFor="phone">
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="Optional"
                            className={inputClass}
                        />
                        <ValidationError
                            prefix="Phone"
                            field="phone"
                            errors={state.errors}
                            className={errorClass}
                        />
                    </Field>
                    <Field label="Service Interest" htmlFor="service">
                        <select
                            id="service"
                            name="service"
                            required
                            defaultValue={selectedService}
                            className={inputClass}
                        >
                            <option value="" disabled>
                                Select a service track
                            </option>
                            <option value="Technical Advisory">Technical Advisory</option>
                            <option value="Web Presence Buildout">Web Presence Buildout</option>
                            <option value="Private Infrastructure Setup">
                                Private Infrastructure Setup
                            </option>
                            <option value="Automation & Tooling">Automation &amp; Tooling</option>
                            <option value="Security Workflow Review">
                                Security Workflow Review
                            </option>
                            <option value="General Inquiry">General Inquiry</option>
                        </select>
                        <ValidationError
                            prefix="Service"
                            field="service"
                            errors={state.errors}
                            className={errorClass}
                        />
                    </Field>
                    <Field label="Budget Range" htmlFor="budget">
                        <select
                            id="budget"
                            name="budget"
                            defaultValue=""
                            className={inputClass}
                        >
                            <option value="" disabled>
                                Select a rough range
                            </option>
                            <option value="Under $500">Under $500</option>
                            <option value="$500–$1,500">$500–$1,500</option>
                            <option value="$1,500–$3,500">$1,500–$3,500</option>
                            <option value="$3,500–$5,000">$3,500–$5,000</option>
                            <option value="$5,000+">$5,000+</option>
                            <option value="Not sure yet">Not sure yet</option>
                        </select>
                        <ValidationError
                            prefix="Budget"
                            field="budget"
                            errors={state.errors}
                            className={errorClass}
                        />
                    </Field>
                    <Field label="Timeline" htmlFor="timeline">
                        <select
                            id="timeline"
                            name="timeline"
                            defaultValue=""
                            className={inputClass}
                        >
                            <option value="" disabled>
                                Select a timeline
                            </option>
                            <option value="ASAP">ASAP</option>
                            <option value="Within 2 weeks">Within 2 weeks</option>
                            <option value="Within 1 month">Within 1 month</option>
                            <option value="Flexible">Flexible</option>
                            <option value="Planning ahead">Planning ahead</option>
                        </select>
                        <ValidationError
                            prefix="Timeline"
                            field="timeline"
                            errors={state.errors}
                            className={errorClass}
                        />
                    </Field>
                    <Field label="Current Website / Domain" htmlFor="currentWebsite">
                        <input
                            id="currentWebsite"
                            name="currentWebsite"
                            type="text"
                            placeholder="Optional"
                            className={inputClass}
                        />
                        <ValidationError
                            prefix="Current Website"
                            field="currentWebsite"
                            errors={state.errors}
                            className={errorClass}
                        />
                    </Field>
                    <Field label="Preferred Contact" htmlFor="contactPreference">
                        <select
                            id="contactPreference"
                            name="contactPreference"
                            defaultValue=""
                            className={inputClass}
                        >
                            <option value="" disabled>
                                Select preference
                            </option>
                            <option value="Email">Email</option>
                            <option value="Phone">Phone</option>
                            <option value="Text">Text</option>
                            <option value="No preference">No preference</option>
                        </select>
                        <ValidationError
                            prefix="Preferred Contact"
                            field="contactPreference"
                            errors={state.errors}
                            className={errorClass}
                        />
                    </Field>
                </div>
                <div className="mt-6">
                    <label
                        htmlFor="message"
                        className="text-xs uppercase tracking-[0.25em] text-neutral-500"
                    >
                        Project Details
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={8}
                        placeholder="Describe what you need help with, what problem you're trying to solve, current tools/platforms, deadlines, and any important constraints."
                        className={`${inputClass} mt-3 resize-y`}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className={errorClass}
                    />
                </div>
                <div className="mt-6">
                    <label
                        htmlFor="sensitiveNotice"
                        className="flex items-start gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-sm leading-6 text-neutral-400"
                    >
                        <input
                            id="sensitiveNotice"
                            name="sensitiveNoticeAcknowledged"
                            type="checkbox"
                            required
                            value="yes"
                            className="mt-1 h-4 w-4 accent-neutral-200"
                        />
                        <span>
                            I understand I should not include passwords, private keys, API keys,
                            live credentials, confidential client data, or sensitive system
                            access details in this first message.
                        </span>
                    </label>
                    <ValidationError
                        prefix="Sensitive Notice"
                        field="sensitiveNoticeAcknowledged"
                        errors={state.errors}
                        className={errorClass}
                    />
                </div>
                <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">
                        Verification
                    </p>
                    <div
                        className="cf-turnstile"
                        data-sitekey={TURNSTILE_SITE_KEY}
                        data-theme="dark"
                    />
                    <ValidationError
                        prefix="Turnstile"
                        field="cf-turnstile-response"
                        errors={state.errors}
                        className={errorClass}
                    />
                </div>
                <input
                    type="hidden"
                    name="_subject"
                    value="New GreyHat Solutions Intake"
                />
                <input
                    type="hidden"
                    name="source"
                    value="ghsolutions-site contact page"
                />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} />
                <ValidationError errors={state.errors} className={errorClass} />
                <div className="mt-8 flex flex-col gap-4 border-t border-neutral-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xl text-sm leading-6 text-neutral-500">
                        This sends a structured intake request through Formspree. Follow-up
                        details can be handled later through an appropriate secure channel.
                    </p>
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {state.submitting ? "Sending..." : "Send Inquiry"}
                    </button>
                </div>
            </form>
        </>
    );
}
