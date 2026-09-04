import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "CRA Notice & Correspondence Support",
  description:
    "Help reading a CRA letter, gathering the supporting file, and sending a factual response before the deadline.",
};

export default function CraNoticesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="CRA correspondence"
        title="A CRA letter is a deadline and a request for facts — not a fight slogan."
        lead="If the Agency wrote, we will read the notice with you, list what they asked for, and help you send a response from the return and the books. We do not promise the CRA will agree. We do not use “fight the CRA” language, because that is not the work."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-12 lg:px-6">
        <div className="lg:col-span-7">
          <h2 className="text-3xl text-ink">What this service is</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>Reading the notice so you know the period, the form, and the due date</li>
            <li>Matching it to the T1, T2, HST, or payroll file it refers to</li>
            <li>Listing documents that actually answer the question</li>
            <li>Drafting a factual reply you can send, or filing an adjustment if the original return was incomplete</li>
          </ul>
          <h2 className="mt-10 text-3xl text-ink">What this service is not</h2>
          <p className="mt-4 text-muted">
            It is not a guarantee the assessment will change. It is not courtroom representation. It is not a promise
            that penalties will be cancelled. Relief exists in law for some situations; eligibility depends on your
            facts. We will say when you need a lawyer or a specialist we are not.
          </p>
          <h2 className="mt-10 text-3xl text-ink">If you already missed the date</h2>
          <p className="mt-4 text-muted">
            Call anyway. A late, complete response is still better than silence. Bring every page of the letter.
          </p>
        </div>
        <aside className="border border-line bg-paper-2 p-6 lg:col-span-5">
          <h2 className="text-2xl text-ink">Send today</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>PDF or photo of every page</li>
            <li>The printed deadline</li>
            <li>The return or period named in the letter</li>
            <li>Anything you already mailed or uploaded</li>
          </ul>
          <p className="mt-6 text-sm text-muted">Do not put your SIN in the web form.</p>
        </aside>
      </section>
      <CtaBand title="Photograph the letter. Book the consult. We work from the page they sent." />
    </main>
  );
}
