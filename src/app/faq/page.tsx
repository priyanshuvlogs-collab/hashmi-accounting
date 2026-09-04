import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { checklistItems, homeFaqs, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ & Document Checklist",
  description:
    "What to bring for a T1, T2125, T2, or CRA letter. Hours, refunds, and how Hashmi Accounting works in Pickering.",
};

const extraFaqs: FaqItem[] = [
  ...homeFaqs,
  {
    q: "Do you take new T1 clients in late March?",
    a: "Sometimes. It depends on how complete the slips are and what else is already on the calendar. Book the consult and we will say yes or no. A rushed, incomplete file is worse than filing an extension conversation early.",
  },
  {
    q: "Can you file a T2 if I only have bank statements?",
    a: "We can often reconstruct a year. That is bookkeeping plus tax, and it costs more than a year that was already coded. We will quote the cleanup before we start the T2.",
  },
  {
    q: "Do you handle GST/HST and WSIB if someone else does the T2?",
    a: "Yes, if we can see the books or the source documents. Split files create mismatches. If another accountant files the T2, we need to know that on day one.",
  },
  {
    q: "Will you keep my SIN on this website?",
    a: "No. The public form does not ask for it and will reject a message that looks like a SIN. Identification is collected later, through a channel meant for it.",
  },
];

export default function FaqPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="FAQ & checklist"
        title="What to send, what we will not promise, and when the office is open."
        lead="Read this before you scan a shoebox. The checklist is the same list we use on a first call."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <h2 className="text-3xl text-ink">Answers</h2>
        <div className="mt-6">
          <FaqList items={extraFaqs} />
        </div>
        <h2 className="mt-16 text-3xl text-ink">Document checklist</h2>
        <p className="mt-3 max-w-2xl text-muted">Bring what you have. Missing slips are normal. Invented numbers are not.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {checklistItems.map((group) => (
            <article key={group.title} className="border border-line bg-paper p-6">
              <h3 className="text-2xl text-ink">{group.title}</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
