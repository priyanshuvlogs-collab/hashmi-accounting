import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accounting & Tax Services in Pickering",
  description:
    "Personal T1, self-employed tax, corporate T2, bookkeeping, payroll, GST/HST, WSIB, and CRA correspondence from a Pickering office.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services"
        title="The work we will take — and the work we will not pretend to do."
        lead="Hashmi Accounting is a year-round tax and books office for Durham families, self-employed trades, and incorporated small businesses. We prepare T1 and T2 returns, keep books current, remit payroll, GST/HST, and WSIB, and help you answer a CRA letter from the file."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {servicePages.map((s) => (
            <Link key={s.href} href={s.href} className="border border-line bg-paper p-7 hover:border-ink">
              <p className="text-xs uppercase tracking-[0.14em] text-brass">{s.short}</p>
              <h2 className="mt-2 text-3xl text-ink">{s.title}</h2>
              <p className="mt-3 text-muted">{s.blurb}</p>
              <p className="mt-5 font-semibold text-ink underline decoration-brass underline-offset-4">Open this service</p>
            </Link>
          ))}
        </div>
        <div className="mt-12 grid gap-6 border border-line bg-paper-2 p-7 md:grid-cols-2">
          <div>
            <h2 className="text-2xl text-ink">What we are not</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              <li>An H&amp;R Block clone with a refund-guarantee window.</li>
              <li>A Big Four pitch deck. This is a Pickering firm, not a downtown theatre.</li>
              <li>A mill that promises the CRA will leave you alone if you just sign.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl text-ink">How we price the first call</h2>
            <p className="mt-4 text-muted">
              The consult is free. After we see the file, we tell you the fee before we start. Fees depend on the year,
              the entity, and how complete the records are. We do not publish invented “from $X” numbers.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
