import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pickering, Durham & East GTA Service Area",
  description:
    "Hashmi Accounting is based in Pickering and works with families and businesses across Durham Region and the east GTA.",
};

const places = [
  {
    name: "Pickering",
    body: "The office is here — 1887 Liatris Drive, near Brock and Rossland. In-person drop-off is easiest for Pickering households and shops that want a file handed over, not emailed.",
  },
  {
    name: "Ajax",
    body: "A short drive west. Same books, T1, T2, and remittance work. Many Ajax files never need a second visit after the first consult.",
  },
  {
    name: "Whitby",
    body: "Trades and small corporations along the 401 and Highway 12. If you already have QuickBooks or a bank export, we can start without you sitting in the office.",
  },
  {
    name: "Oshawa",
    body: "Employees, sole props, and Ontario corporations who want a Durham accountant rather than a downtown commute. Year-end and HST still run on the same calendar.",
  },
  {
    name: "Scarborough",
    body: "East-Toronto files that are closer to Pickering than to a core-Toronto tower. Remote document exchange after we know who you are.",
  },
  {
    name: "Markham",
    body: "Families and corporations who prefer a Durham-side office. We will not keyword-stuff “income tax in Markham” into a paragraph. The work is the same work.",
  },
  {
    name: "Uxbridge",
    body: "North Durham clients, often with a home office or a trade vehicle. Mileage and HST come up more than downtown parking receipts.",
  },
];

export default function ServiceAreaPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Service area"
        title="Based in Pickering. Working across Durham and the east GTA — without a city-name paragraph."
        lead="You do not need a different accountant for every municipal sign. You need someone who will take the file, keep the remittances, and be reachable after April. The office is in Pickering. The work travels."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl text-ink">How we work from Liatris Drive</h2>
            <p className="mt-4 text-muted">
              First contact is a call or the consult form. If the file is a fit, we collect documents by upload or a
              scheduled drop-off. We do not require you to live in Pickering. We do need a Canadian return, books, or a
              CRA letter we can actually work.
            </p>
            <address className="mt-6 not-italic text-charcoal">
              {site.address.line}
              <br />
              {site.address.intersection}
              <br />
              {site.phoneDisplay} · {site.email}
              <br />
              {site.hours.display}
            </address>
            <div className="mt-6 min-h-64 border border-line">
              <iframe
                title="Map of 1887 Liatris Drive, Pickering"
                src={site.address.mapsEmbed}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="grid gap-4 lg:col-span-7">
            {places.map((place) => (
              <article key={place.name} className="border border-line bg-paper p-5">
                <h3 className="text-2xl text-ink">{place.name}</h3>
                <p className="mt-2 text-muted">{place.body}</p>
              </article>
            ))}
            <article className="border border-line bg-paper-2 p-5">
              <h3 className="text-2xl text-ink">Durham Region and the east GTA</h3>
              <p className="mt-2 text-muted">
                If you are in Clarington, Brock, or elsewhere in Durham, or in the east GTA and the drive or a video
                call is easier than a Toronto office, ask. Area served on this site: {site.areaServed.join(", ")}.
              </p>
            </article>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
