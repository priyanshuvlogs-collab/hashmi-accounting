import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy & Disclaimer",
  description:
    "How Hashmi Accounting handles website inquiries, why we do not collect SINs on public forms, and the limits of website information.",
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Legal"
        title="Privacy, reviews, and the limits of this website."
        lead="This page is written for a Canadian accounting firm’s public site. It is not a substitute for a client engagement letter."
      />
      <section className="mx-auto max-w-3xl space-y-10 px-4 py-14 lg:px-6">
        <article>
          <h2 className="text-2xl text-ink">Who we are</h2>
          <p className="mt-3 text-muted">
            {site.legal}, {site.address.line}. Email {site.email}. Phone {site.phoneDisplay}.
          </p>
        </article>
        <article>
          <h2 className="text-2xl text-ink">What the website collects</h2>
          <p className="mt-3 text-muted">
            The consult form asks for name, email, phone, city, the kind of file, timing, and a message. We use that
            only to reply to the request and to keep a record of inquiries. We do not ask for a Social Insurance Number
            on any public form. Messages that look like they contain a SIN are rejected.
          </p>
          <p className="mt-3 text-muted">
            Server logs may include IP address and browser data needed to operate the site. We do not sell inquiry lists.
          </p>
        </article>
        <article>
          <h2 className="text-2xl text-ink">Email and storage</h2>
          <p className="mt-3 text-muted">
            Inquiries are stored on the server that hosts this site. If a mail provider is configured, a copy is sent to{" "}
            {site.email}. Do not send unused credit-card numbers, passport images, or SINs through the form or an
            ordinary email thread.
          </p>
        </article>
        <article id="reviews">
          <h2 className="text-2xl text-ink">Review policy</h2>
          <p className="mt-3 text-muted">
            Testimonials on this site are copied from attributable public sources and quoted as written. We do not
            invent reviewer names, job titles, companies, star ratings, or dollar results. We do not use lorem ipsum.
            Public reviews that name “Syed” are left as “Syed.” The federal corporation lists Fahad Hashmi as director.
            Negative public reviews exist; this marketing site does not claim every client experience was the same.
          </p>
        </article>
        <article>
          <h2 className="text-2xl text-ink">Disclaimer</h2>
          <p className="mt-3 text-muted">{site.disclaimer}</p>
          <p className="mt-3 text-muted">
            CRA, T1, T2, GST/HST, and WSIB rules change. A page on this site is general information for people in
            Ontario considering a consult. It is not an engagement until we accept the file and you agree to the fee.
          </p>
        </article>
        <article>
          <h2 className="text-2xl text-ink">Credentials</h2>
          <p className="mt-3 text-muted">
            This website does not claim CPA or other protected designations. Headcount and “years of experience” lines
            that contradict the 2008 bookkeeping start date are not used.
          </p>
        </article>
      </section>
    </main>
  );
}
