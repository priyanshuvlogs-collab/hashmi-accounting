import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Self-Employed Tax & T2125 in Durham",
  description:
    "Self-employed and sole-proprietor tax for trades and contractors: T2125, GST/HST, and a T1 that matches the books.",
};

export default function SelfEmployedPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Self-employed"
        title="Self-employed tax for trades who need the T2125 to match the truck, not a guess."
        lead="Sole proprietors, independent contractors, and gig operators in Durham and the east GTA. We build the T1 from the bank, the HST you collected, and the expenses you can support. We do not invent mileage."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-12 lg:px-6">
        <div className="lg:col-span-7">
          <h2 className="text-3xl text-ink">Typical files</h2>
          <p className="mt-4 text-muted">
            Electricians, renovators, drivers, consultants, and anyone who invoices in their own name. If you registered
            for GST/HST, those returns have to agree with the T2125. If you have not registered and you should have, we
            will say so — we will not hide it to make the T1 look simpler.
          </p>
          <h2 className="mt-10 text-3xl text-ink">What we prepare</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>T2125 statement of business or professional activities</li>
            <li>GST/HST returns that tie to the same sales and ITC story</li>
            <li>Vehicle, home-office, tools, subcontract, and phone claims that have a method</li>
            <li>Instalment estimates for the next year when the numbers call for them</li>
            <li>A personal T1 that includes the business, not a second set of books</li>
          </ul>
          <h2 className="mt-10 text-3xl text-ink">If the books do not exist yet</h2>
          <p className="mt-4 text-muted">
            We can start from bank and credit-card exports. That takes longer and costs more than a year that was
            already coded. If you want this to be easier next April, start{" "}
            <a className="underline decoration-brass underline-offset-2" href="/bookkeeping">
              monthly bookkeeping
            </a>{" "}
            now.
          </p>
        </div>
        <aside className="border border-line bg-paper-2 p-6 lg:col-span-5">
          <h2 className="text-2xl text-ink">What we need</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>Business name and GST/HST number if you have one</li>
            <li>Bank exports for the calendar year</li>
            <li>A mileage log or an honest description of how you tracked it</li>
            <li>Prior T1 and HST filings</li>
          </ul>
        </aside>
      </section>
      <CtaBand title="Bring last year’s T1 and this year’s bank export." />
    </main>
  );
}
