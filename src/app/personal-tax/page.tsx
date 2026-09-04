import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Personal T1 Tax Filing in Pickering",
  description:
    "Personal T1 returns for Durham families and employees. Filed from a complete slip file — not a last-minute drop-off.",
};

export default function PersonalTaxPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Personal T1"
        title="A personal T1 that is filed correctly — not rushed because April showed up."
        lead="If you have T4s, T5s, RRSP slips, childcare, or a small amount of self-employment that is not a full trade, we will assemble the return from what you actually received. We will not promise a larger refund than the law allows."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-12 lg:px-6">
        <div className="lg:col-span-7">
          <h2 className="text-3xl text-ink">Who this is for</h2>
          <p className="mt-4 text-muted">
            Employees and families in Pickering, Ajax, Whitby, and the rest of Durham who want one person to put the
            slips in the right boxes and tell them if a claim does not hold. Couples who should be compared before
            filing. Newcomers or students with a straightforward Canadian T1.
          </p>
          <h2 className="mt-10 text-3xl text-ink">What we do on a T1</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>T4, T4A, T5, T3, RRSP, tuition, medical, and donation slips you provide</li>
            <li>Work-from-home only where your employer form and the current rules support it</li>
            <li>Childcare, rent or property-tax credits that actually apply in Ontario</li>
            <li>A review of last year’s Notice of Assessment if you have it</li>
            <li>NETFILE when the file is complete and you have approved the numbers</li>
          </ul>
          <h2 className="mt-10 text-3xl text-ink">What we will not do</h2>
          <p className="mt-4 text-muted">
            We will not invent a home-office claim, a refund target, or a “same information, better result” pitch.
            Different filing positions exist; they have to be supportable. If a side gig is really a business, that
            belongs on the{" "}
            <a className="underline decoration-brass underline-offset-2" href="/self-employed">
              self-employed
            </a>{" "}
            page, not hidden on a T4 return.
          </p>
        </div>
        <aside className="border border-line bg-paper-2 p-6 lg:col-span-5">
          <h2 className="text-2xl text-ink">Bring this</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted">
            <li>Last year’s T1 and Notice of Assessment</li>
            <li>All slips for this year — even the ones that look small</li>
            <li>Receipts you want considered (childcare, medical, donations, tuition)</li>
            <li>Spouse or common-law details if you want us to compare</li>
          </ol>
          <p className="mt-6 text-sm text-muted">Do not email your SIN. We will collect identification when the file needs it.</p>
        </aside>
      </section>
      <CtaBand title="Book a T1 consult before the slips live in a kitchen drawer." />
    </main>
  );
}
