import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Bookkeeping in Pickering & Durham",
  description:
    "Monthly bookkeeping for self-employed trades and small corporations: bank recs, coding, and a file you can actually file from.",
};

export default function BookkeepingPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Bookkeeping"
        title="Monthly books you can file from — the service this office started with in 2008."
        lead="Hashmi Accounting began as bookkeeping for businesses that could not staff a full back office. Tax work came later. The point of the books is still the same: HST, payroll, and the T1 or T2 should be able to read from one file."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-12 lg:px-6">
        <div className="lg:col-span-7">
          <h2 className="text-3xl text-ink">What “current” means here</h2>
          <p className="mt-4 text-muted">
            Bank and credit cards reconciled. Sales and expenses coded the same way each month. GST/HST payable that you
            can believe. A year-end package that does not start from a shoebox. If you only want a cleanup in March, say
            so — that is a project, not monthly books.
          </p>
          <h2 className="mt-10 text-3xl text-ink">On the monthly cadence</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>Bank and credit-card reconciliations</li>
            <li>Bills, invoices, and owner drawings coded consistently</li>
            <li>HST-ready totals for the next remittance</li>
            <li>A short monthly note: what is missing, what looks off</li>
            <li>Year-end close that feeds the T1 or T2</li>
          </ul>
          <h2 className="mt-10 text-3xl text-ink">Software</h2>
          <p className="mt-4 text-muted">
            We work from QuickBooks, Simply / Sage, and well-kept spreadsheets. The old site said the firm could set
            those up at a client office. If you need software standing up, say that on the consult. We will not claim
            certifications we have not confirmed for this rebuild.
          </p>
        </div>
        <aside className="border border-line bg-paper-2 p-6 lg:col-span-5">
          <h2 className="text-2xl text-ink">Mid-year takeovers</h2>
          <p className="mt-4 text-muted">
            Yes, if bank exports exist. We will tell you how many months are salvageable and whether the first cleanup
            is a separate fee.
          </p>
          <p className="mt-6 text-sm text-muted">
            Bookkeeping since 2008. Personal and corporate tax added later. Federal corporation in 2012. That timeline
            is the one we use — not a rotating “11+ years” line.
          </p>
        </aside>
      </section>
      <CtaBand title="Send last month’s bank export. We will say if monthly books make sense." />
    </main>
  );
}
