import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Payroll, GST/HST & WSIB Remittance",
  description:
    "Payroll source deductions, GST/HST returns, and WSIB remittance for Durham businesses that want the calendar kept.",
};

export default function PayrollHstWsibPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Payroll · GST/HST · WSIB"
        title="Payroll, GST/HST, and WSIB remitted on the calendar — not after the notice arrives."
        lead="Source deductions, T4s, HST returns, and WSIB filings are how a small corporation stays off the CRA’s and the Board’s reminder list. We keep the dates and the amounts. We do not promise that a late file can be made to disappear."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-12 lg:px-6">
        <div className="lg:col-span-7">
          <h2 className="text-3xl text-ink">Payroll</h2>
          <p className="mt-4 text-muted">
            Calculate and remit source deductions on your frequency. T4 / T4A at year-end. ROEs when someone leaves. We
            need hours, pay rates, and who is actually an employee. If someone should be on payroll and is not, that is
            a conversation, not a software setting.
          </p>
          <h2 className="mt-10 text-3xl text-ink">GST/HST</h2>
          <p className="mt-4 text-muted">
            Collect, claim ITCs that have invoices, and file on the assigned frequency — monthly, quarterly, or annual.
            The HST return should match the books. If you are a Quick Method or special-case registrant, say so on the
            first call.
          </p>
          <h2 className="mt-10 text-3xl text-ink">WSIB</h2>
          <p className="mt-4 text-muted">
            Ontario workplaces in covered industries have to report and remit. We prepare the remittance from payroll
            that already exists. We are not a safety consultant and we will not guess your rate group.
          </p>
        </div>
        <aside className="border border-line bg-paper-2 p-6 lg:col-span-5">
          <h2 className="text-2xl text-ink">What you send each cycle</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>Hours and pay changes</li>
            <li>New hires and last days</li>
            <li>Sales invoices if we are also on HST</li>
            <li>WSIB account number and current rate sheet if you have it</li>
          </ul>
        </aside>
      </section>
      <CtaBand title="Tell us your remittance frequency. We will tell you what we need this month." />
    </main>
  );
}
