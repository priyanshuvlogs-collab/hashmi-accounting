import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FaqList } from "@/components/FaqList";
import { ReviewCard } from "@/components/ReviewCard";
import { SplitMark } from "@/components/Logo";
import { YearRoundVisual } from "@/components/YearRoundVisual";
import { homeFaqs } from "@/lib/faq";
import { reviews } from "@/lib/reviews";
import { processSteps, servicePages, site } from "@/lib/site";

export default function HomePage() {
  return (
    <main id="main">
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 lg:grid-cols-12 lg:px-6 lg:py-20">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
              Pickering · Durham · east GTA
            </p>
            <h1 className="mt-4 text-4xl leading-[1.15] text-ink md:text-5xl lg:text-[3.15rem]">
              {site.hero.h1}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{site.hero.sub}</p>
            <p className="mt-4 max-w-xl text-base text-charcoal">{site.tagline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="bg-ink px-5 py-3 text-center font-semibold text-paper hover:bg-ink-deep">
                Book a free consult
              </Link>
              <a
                href={site.phoneHref}
                className="border border-ink px-5 py-3 text-center font-semibold text-ink hover:bg-paper-2"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">
              {site.address.line} · {site.hours.short}
            </p>
          </div>
          <div className="lg:col-span-5">
            <YearRoundVisual />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Who this is for</p>
          <h2 className="mt-3 max-w-2xl text-3xl text-ink md:text-4xl">
            Three kinds of files. One office that stays on them after April.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <AudienceCard
              href="/personal-tax"
              title="Durham families"
              body="T4 households who want a T1 filed from the slips they actually have — RRSP, childcare, work-from-home only when the rules fit."
            />
            <AudienceCard
              href="/self-employed"
              title="Self-employed trades"
              body="Sole props and contractors who need a T2125 that matches the truck, the tools, and the HST they already collected."
            />
            <AudienceCard
              href="/corporate-tax"
              title="Incorporated SMEs"
              body="Ontario corporations that need T2, payroll, and HST to tell the same story — not three different versions of the year."
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Work we take</p>
              <h2 className="mt-3 text-3xl text-ink md:text-4xl">T1, T2, books, remittances, CRA letters.</h2>
            </div>
            <Link href="/services" className="font-semibold text-ink underline decoration-brass decoration-2 underline-offset-4">
              All services
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group border border-line bg-paper p-6 hover:border-ink"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-brass">{s.short}</p>
                <h3 className="mt-2 text-2xl text-ink group-hover:underline">{s.title}</h3>
                <p className="mt-3 text-muted">{s.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-light">How it works</p>
          <h2 className="mt-3 text-3xl text-paper md:text-4xl">Four steps. You see the numbers before we file.</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.n}>
                <p className="serif text-3xl text-brass-light">{step.n}</p>
                <h3 className="mt-3 text-xl text-paper">{step.title}</h3>
                <p className="mt-2 text-sm text-paper/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Public reviews only</p>
          <h2 className="mt-3 max-w-2xl text-3xl text-ink md:text-4xl">
            What people already wrote in public. No lorem. No invented CEOs.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            These quotes appear on ThreeBestRated’s Pickering tax-services listing. Reviewers often say “Syed.” The
            corporation’s director on the public record is Fahad Hashmi. We quote the reviews as written.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.quote} review={review} />
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            <Link className="underline decoration-brass underline-offset-2" href="/privacy#reviews">
              How we choose reviews
            </Link>
            . We do not invent star ratings or dollar results.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">The office</p>
            <h2 className="mt-3 text-3xl text-ink">1887 Liatris Drive, Pickering</h2>
            <address className="mt-4 not-italic text-charcoal">
              {site.legal}
              <br />
              {site.address.line}
              <br />
              {site.address.intersection}
            </address>
            <p className="mt-4">
              <a className="font-semibold text-ink underline decoration-brass decoration-2 underline-offset-4" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
              <br />
              <a className="text-ink underline decoration-brass underline-offset-2" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="mt-4 text-muted">
              {site.hours.weekday}. {site.hours.weekend}. We work with clients in {site.areaServed.slice(0, 7).join(", ")},
              and across Durham and the east GTA.
            </p>
            <p className="mt-4">
              <Link className="font-semibold text-ink underline decoration-brass underline-offset-2" href="/service-area">
                Service area details
              </Link>
            </p>
          </div>
          <div className="min-h-80 border border-line bg-paper">
            <iframe
              title="Map of Hashmi Accounting at 1887 Liatris Drive, Pickering"
              src={site.address.mapsEmbed}
              className="h-full min-h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Questions before you call</p>
          <h2 className="mt-3 text-3xl text-ink">Straight answers. No refund theatre.</h2>
          <div className="mt-8">
            <FaqList items={homeFaqs} />
          </div>
          <p className="mt-6">
            <Link className="font-semibold text-ink underline decoration-brass underline-offset-2" href="/faq">
              Full FAQ and document checklist
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-16 lg:grid-cols-12 lg:px-6">
          <div className="lg:col-span-5">
            <SplitMark className="h-24 w-24" />
            <h2 className="mt-6 text-3xl text-ink">Book a free consult</h2>
            <p className="mt-3 text-muted">
              Name, phone, and what is due. We reply on weekdays during {site.hours.short}. Do not put a SIN in this
              form.
            </p>
            <p className="mt-6 text-sm text-charcoal">
              Prefer the phone?{" "}
              <a className="font-semibold underline decoration-brass underline-offset-2" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="border border-line bg-paper-2 p-6 lg:col-span-7">
            <ContactForm compact />
          </div>
        </div>
      </section>
    </main>
  );
}

function AudienceCard({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <Link href={href} className="border border-line bg-paper p-6 hover:border-ink">
      <h3 className="text-2xl text-ink">{title}</h3>
      <p className="mt-3 text-muted">{body}</p>
    </Link>
  );
}
