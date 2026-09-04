export const site = {
  brand: "Hashmi Accounting & Tax Services",
  shortBrand: "Hashmi Accounting",
  legal: "Hashmi Accounting & Tax Services Inc.",
  tagline: "Your books stay current. Your filings go in on time. You stay off CRA’s radar.",
  url: "https://hashmiaccounting.com",
  locale: "en-CA",
  email: "info@hashmiaccounting.com",
  phoneDisplay: "416-797-3980",
  phoneTel: "+14167973980",
  phoneHref: "tel:+14167973980",
  address: {
    street: "1887 Liatris Drive",
    city: "Pickering",
    region: "ON",
    postal: "L1X 0A4",
    country: "CA",
    countryName: "Canada",
    intersection: "Near Brock Road and Rossland Road",
    line: "1887 Liatris Drive, Pickering, ON L1X 0A4",
    mapsQuery: "1887 Liatris Drive, Pickering, ON L1X 0A4",
    mapsEmbed:
      "https://maps.google.com/maps?q=1887%20Liatris%20Drive%2C%20Pickering%2C%20ON%20L1X%200A4&z=15&output=embed",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=1887+Liatris+Drive%2C+Pickering%2C+ON+L1X+0A4",
  },
  hours: {
    display: "Mon–Fri 9:00–18:30; Sat–Sun closed",
    short: "Mon–Fri 9:00–18:30",
    weekday: "Monday to Friday, 9:00 a.m. to 6:30 p.m.",
    weekend: "Saturday and Sunday closed",
    schema: [{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:30" }],
  },
  history: {
    bookkeepingSince: 2008,
    federalCorporation: 2012,
    directorPublicRecord: "Fahad Hashmi",
    reviewDisplayNote:
      "Public reviews often name the principal as Syed. The federal corporation lists Fahad Hashmi as director. This site uses the firm name until a preferred personal display name is confirmed.",
  },
  audiences: ["Durham families", "self-employed trades", "incorporated SMEs"],
  areaServed: [
    "Pickering",
    "Ajax",
    "Whitby",
    "Oshawa",
    "Scarborough",
    "Markham",
    "Uxbridge",
    "Durham Region",
    "east GTA",
  ],
  sameAs: [
    "https://www.linkedin.com/company/hashmi-accounting",
    "https://federalcorporation.ca/corporation/8214590",
  ],
  hero: {
    h1: "Tax, bookkeeping, and payroll for Pickering and Durham — handled year-round.",
    sub: "Families and incorporated businesses who want clean books, on-time HST, and a return filed correctly — not rushed in April.",
  },
  disclaimer:
    "Outcomes depend on your facts and current law. We do not guarantee a refund, a result, or that the CRA will accept any position. Nothing on this website is legal, audit, or tax advice for your specific situation.",
} as const;

export const navigation = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service area" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const servicePages = [
  {
    href: "/personal-tax",
    title: "Personal T1 tax",
    short: "T1",
    blurb: "Employee and family returns filed from a complete file — not a last-minute drop-off.",
  },
  {
    href: "/self-employed",
    title: "Self-employed tax",
    short: "Sole prop",
    blurb: "T2125, GST/HST, and a T1 that matches the books for trades and independent contractors.",
  },
  {
    href: "/corporate-tax",
    title: "Corporate T2 tax",
    short: "T2",
    blurb: "Ontario small-corporation T2s coordinated with payroll, HST, and the shareholder T1.",
  },
  {
    href: "/bookkeeping",
    title: "Bookkeeping",
    short: "Books",
    blurb: "Monthly books you can file from: bank recs, coding, and a year-end package that holds up.",
  },
  {
    href: "/payroll-hst-wsib",
    title: "Payroll, GST/HST & WSIB",
    short: "Remit",
    blurb: "Source deductions, HST returns, and WSIB remittances on the calendar — not after a notice.",
  },
  {
    href: "/cra-notices",
    title: "CRA correspondence",
    short: "CRA",
    blurb: "Help reading the letter, gathering the file, and sending a factual response before the deadline.",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Book a consult",
    body: "Tell us who you are — family, trade, or corporation — and what is due. No SIN on the form. We will say if we can take the work.",
  },
  {
    n: "02",
    title: "Send the file",
    body: "T-slips, prior returns, bank exports, payroll, or the CRA letter. We tell you exactly what is missing before we start.",
  },
  {
    n: "03",
    title: "We prepare and you review",
    body: "You see the numbers before anything is filed. We explain the positions we took. You decide. We do not file surprises.",
  },
  {
    n: "04",
    title: "File, remit, stay current",
    body: "Returns go in. HST, payroll, and WSIB stay on the calendar. Next year starts from a file that already exists.",
  },
] as const;

export function pageTitle(title: string) {
  return `${title} | Hashmi Accounting`;
}
