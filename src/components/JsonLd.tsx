import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AccountingService", "LocalBusiness", "ProfessionalService"],
        "@id": `${site.url}/#business`,
        name: site.brand,
        legalName: site.legal,
        url: site.url,
        email: site.email,
        telephone: site.phoneTel,
        image: `${site.url}/brand/ha-mark.svg`,
        priceRange: "$$",
        description:
          "Tax, bookkeeping, payroll, GST/HST, and WSIB support for families and incorporated businesses in Pickering, Durham Region, and the east GTA.",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postal,
          addressCountry: site.address.country,
        },
        openingHoursSpecification: site.hours.schema.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [...h.days],
          opens: h.opens,
          closes: h.closes,
        })),
        areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
        sameAs: [...site.sameAs],
        knowsAbout: ["CRA", "T1", "T2", "GST/HST", "WSIB", "bookkeeping", "payroll"],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
