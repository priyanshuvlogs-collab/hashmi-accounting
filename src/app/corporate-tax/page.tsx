import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Corporate T2 Tax for Ontario Small Corporations",
  description:
    "T2 corporate tax for Ontario SMEs in Pickering and Durham, coordinated with payroll, GST/HST, and the shareholder T1.",
};

export default function CorporateTaxPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Corporate T2"
        title="T2 tax for Ontario small corporations — year-round, not a March scramble."
        lead="If the company paid wages, collected HST, or paid the shareholder, those pieces have to agree before the T2 is worth filing. We prepare the return from the books, not from a folder that appears six weeks after year-end."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-12 lg:px-6">
        <div className="lg:col-span-7">
          <h2 className="text-3xl text-ink">Who this is for</h2>
          <p className="mt-4 text-muted">
            Canadian-controlled private corporations with a real operating year: contractors, shops, professional
            corporations that already have a bookkeeper or want one. We are not a public-company audit shop and we do
            not pretend to be.
          </p>
          <h2 className="mt-10 text-3xl text-ink">What a T2 file includes here</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>T2 and GIFI from financial statements or a complete bookkeeping file</li>
            <li>Coordination with T4 / T4A, GST/HST, and WSIB already remitted</li>
            <li>Shareholder T1 questions that change how salary vs. dividend should be recorded</li>
            <li>Ontario corporate minimums and instalments when they apply</li>
            <li>A package you can keep — not a black box PDF</li>
          </ul>
          <h2 className="mt-10 text-3xl text-ink">Deadlines we will not blur</h2>
          <p className="mt-4 text-muted">
            A T2 is generally due six months after year-end; the balance is often due earlier. We will put the dates on
            the first call. If the books are not ready, we will say so instead of filing a return we cannot support.
          </p>
        </div>
        <aside className="border border-line bg-paper-2 p-6 lg:col-span-5">
          <h2 className="text-2xl text-ink">Send this first</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>Year-end and Ontario corporation number</li>
            <li>Prior T2 and financials</li>
            <li>Payroll and HST filings for the year</li>
            <li>QuickBooks, Excel, or bank exports</li>
          </ul>
          <p className="mt-6 text-sm text-muted">
            Hashmi Accounting &amp; Tax Services Inc. was federally incorporated in 2012. Bookkeeping work under the
            Hashmi name goes back to 2008. We do not list CPA designations on this site.
          </p>
        </aside>
      </section>
      <CtaBand title="Tell us the year-end. We will tell you if we can take the T2." />
    </main>
  );
}
