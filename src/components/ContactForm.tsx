"use client";

import { useState, type FormEvent } from "react";
import { servicePages } from "@/lib/site";

const audiences = [
  { value: "family", label: "Family / employee T1" },
  { value: "self-employed", label: "Self-employed / trade" },
  { value: "corporation", label: "Incorporated business" },
  { value: "other", label: "Other / not sure" },
];

const timings = [
  { value: "this-week", label: "This week" },
  { value: "this-month", label: "This month" },
  { value: "planning", label: "Planning ahead" },
];

type Status = "idle" | "sending" | "ok" | "error";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setMessage(json.error || "We could not send that. Call or email us instead.");
        return;
      }
      setStatus("ok");
      setMessage("Received. We will reply during office hours — usually the same weekday.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("The form did not send. Call 416-797-3980 or email info@hashmiaccounting.com.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <Field label="City or town" name="city" autoComplete="address-level2" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select label="I am" name="audience" options={audiences} required />
        <Select
          label="I need help with"
          name="service"
          options={[
            { value: "not-sure", label: "Not sure — start with a consult" },
            ...servicePages.map((s) => ({ value: s.href.slice(1), label: s.title })),
          ]}
          required
        />
      </div>
      <Select label="When do you need this" name="timing" options={timings} required />
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-ink">What should we know</span>
        <textarea
          name="message"
          rows={compact ? 4 : 6}
          required
          minLength={10}
          className="w-full border border-line bg-paper px-3 py-2.5 text-base text-charcoal outline-none focus:border-ink"
          placeholder="What is due, last year filed, or what the CRA letter says. Do not include your SIN."
        />
      </label>
      <label className="flex items-start gap-2 text-sm text-muted">
        <input type="checkbox" name="consent" value="yes" required className="mt-1 h-4 w-4 accent-ink" />
        <span>
          I agree you may contact me about this request. I will not send a SIN or unused credit-card numbers through
          this form.
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-ink px-5 py-3 font-semibold text-paper hover:bg-ink-deep disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Book a free consult"}
      </button>
      {message ? (
        <p className={status === "ok" ? "text-sm text-ok" : "text-sm text-err"} role="status">
          {message}
        </p>
      ) : (
        <p className="text-sm text-muted">Same-day weekday replies during 9:00–18:30. No SIN. No refund promises.</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-brass"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full border border-line bg-paper px-3 py-2.5 text-base text-charcoal outline-none focus:border-ink"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-brass"> *</span> : null}
      </span>
      <select
        name={name}
        required={required}
        className="w-full border border-line bg-paper px-3 py-2.5 text-base text-charcoal outline-none focus:border-ink"
        defaultValue=""
      >
        <option value="" disabled>
          Choose one
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
