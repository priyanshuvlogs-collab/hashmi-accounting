import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SplitMark } from "@/components/Logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Hashmi Accounting",
  description:
    "Bookkeeping since 2008, tax work added later, federal corporation in 2012. A Pickering firm for Durham families and small corporations.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About the firm"
        title="A Pickering books-and-tax office that started with bookkeeping, then added the returns."
        lead="The public record and the firm’s own history are simple. We will not inflate them into a downtown origin story or a designation we have not verified."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-12 lg:px-6">
        <div className="lg:col-span-7">
          <h2 className="text-3xl text-ink">Timeline we will stand behind</h2>
          <ol className="mt-8 space-y-6">
            <li className="border-l-2 border-brass pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">2008</p>
              <p className="mt-1 text-lg text-ink">Bookkeeping offered under Hashmi Accounting Services.</p>
              <p className="mt-2 text-muted">
                The firm’s own site has long said the work began because small businesses could not justify a full-time
                back office and were falling behind on records, HST, and payroll.
              </p>
            </li>
            <li className="border-l-2 border-brass pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">After 2008</p>
              <p className="mt-1 text-lg text-ink">Personal and business tax added under Hashmi Accounting &amp; Tax Services.</p>
              <p className="mt-2 text-muted">
                T1, T2, and the remittance calendar joined the books. That is why this rebuild treats tax season as one
                peak, not the whole business.
              </p>
            </li>
            <li className="border-l-2 border-brass pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">2012</p>
              <p className="mt-1 text-lg text-ink">{site.legal} — federal corporation.</p>
              <p className="mt-2 text-muted">
                Incorporated 11 June 2012, corporation number 8214590, registered office {site.address.line}. Director
                on the public record: {site.history.directorPublicRecord}.
              </p>
            </li>
          </ol>
          <h2 className="mt-12 text-3xl text-ink">Names, reviews, and designations</h2>
          <p className="mt-4 text-muted">{site.history.reviewDisplayNote}</p>
          <p className="mt-4 text-muted">
            We do not list CPA, CMA, CGA, or any other designation on this website. If a designation is later confirmed
            in writing, it can be added. Until then, the work is described as accounting and tax services — not a
            reserved title.
          </p>
          <h2 className="mt-12 text-3xl text-ink">Community</h2>
          <p className="mt-4 text-muted">
            The previous site said the firm volunteers with local charities and non-profits. We keep that as the firm’s
            own statement. We do not invent partner names or dollar amounts.
          </p>
        </div>
        <aside className="lg:col-span-5">
          <SplitMark className="h-32 w-32" />
          <div className="mt-8 border border-line bg-paper-2 p-6">
            <h2 className="text-2xl text-ink">NAP</h2>
            <address className="mt-3 not-italic text-charcoal">
              {site.legal}
              <br />
              {site.address.line}
              <br />
              {site.phoneDisplay}
              <br />
              {site.email}
            </address>
            <p className="mt-4 text-sm text-muted">{site.hours.display}</p>
          </div>
        </aside>
      </section>
      <CtaBand />
    </main>
  );
}
