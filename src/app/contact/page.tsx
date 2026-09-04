import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Consult in Pickering",
  description:
    "Book a free consult with Hashmi Accounting. 1887 Liatris Drive, Pickering. Call 416-797-3980. No SIN on the form.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Book a free consult. Tell us what is due — not your SIN."
        lead="Weekday replies during 9:00–18:30. If you have a CRA deadline this week, call. The form is for a first conversation, not a document dump of identification numbers."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-12 lg:px-6">
        <div className="lg:col-span-5">
          <h2 className="text-2xl text-ink">Office</h2>
          <address className="mt-3 not-italic text-charcoal">
            {site.legal}
            <br />
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.postal}
            <br />
            {site.address.intersection}
          </address>
          <p className="mt-5">
            <a className="text-xl font-semibold text-ink underline decoration-brass decoration-2 underline-offset-4" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <br />
            <a className="text-ink underline decoration-brass underline-offset-2" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-5 text-muted">
            {site.hours.weekday}. {site.hours.weekend}.
          </p>
          <div className="mt-8 min-h-72 border border-line">
            <iframe
              title="Directions to Hashmi Accounting"
              src={site.address.mapsEmbed}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="border border-line bg-paper-2 p-6 lg:col-span-7">
          <h2 className="text-2xl text-ink">Consult request</h2>
          <p className="mt-2 text-sm text-muted">Required fields are marked. We store the request and reply by email or phone.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
