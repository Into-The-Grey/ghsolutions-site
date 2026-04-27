export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur sm:p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-[0.25em] text-neutral-500"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-3 w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition placeholder:text-neutral-700 focus:border-neutral-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-xs uppercase tracking-[0.25em] text-neutral-500"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-3 w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition placeholder:text-neutral-700 focus:border-neutral-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="text-xs uppercase tracking-[0.25em] text-neutral-500"
          >
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            required
            className="mt-3 w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition focus:border-neutral-500"
            defaultValue=""
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
        </div>
        <div>
          <label
            htmlFor="budget"
            className="text-xs uppercase tracking-[0.25em] text-neutral-500"
          >
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            className="mt-3 w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition focus:border-neutral-500"
            defaultValue=""
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
        </div>
        <div>
          <label
            htmlFor="timeline"
            className="text-xs uppercase tracking-[0.25em] text-neutral-500"
          >
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            className="mt-3 w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition focus:border-neutral-500"
            defaultValue=""
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
        </div>
        <div>
          <label
            htmlFor="contactPreference"
            className="text-xs uppercase tracking-[0.25em] text-neutral-500"
          >
            Preferred Contact
          </label>
          <select
            id="contactPreference"
            name="contactPreference"
            className="mt-3 w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition focus:border-neutral-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select preference
            </option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="Text">Text</option>
            <option value="No preference">No preference</option>
          </select>
        </div>
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
          className="mt-3 w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition placeholder:text-neutral-700 focus:border-neutral-500"
          placeholder="Describe what you need help with, what problem you're trying to solve, and any important technical details."
        />
      </div>
      <input
        type="hidden"
        name="_subject"
        value="New GreyHat Solutions Inquiry"
      />
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} />
      <div className="mt-8 flex flex-col gap-4 border-t border-neutral-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-neutral-500">
          Submitting this form sends your inquiry for review. Do not include
          passwords, private keys, sensitive credentials, or confidential
          systems data.
        </p>
        <button
          type="submit"
          className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
        >
          Send Inquiry
        </button>
      </div>
    </form>
  );
}
