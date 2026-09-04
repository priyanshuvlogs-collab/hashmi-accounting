# Hashmi Accounting website

Conversion rebuild of [hashmiaccounting.com](https://hashmiaccounting.com) for Google Ads and local search. Next.js, TypeScript, Tailwind. No page builder.

**Hashmi Accounting & Tax Services Inc.**  
1887 Liatris Drive, Pickering, ON L1X 0A4  
416-797-3980 · info@hashmiaccounting.com  
Mon–Fri 9:00–18:30

Phone, hours, NAP, and copy tokens live in `src/lib/site.ts`.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Contact form

`POST /api/contact` validates the consult request, rejects SIN-like numbers, stores JSON in `data/inquiries.json` (gitignored), and emails via [Resend](https://resend.com) when `RESEND_API_KEY` is set.

```
RESEND_API_KEY=
CONTACT_FROM=website@hashmiaccounting.com
CONTACT_TO=info@hashmiaccounting.com
```

The public form never asks for a SIN.

## Reviews

See `REVIEW_POLICY.md`. Only attributable public quotes. No lorem.

## What this replaces

The previous WordPress / Elementor site led with “Welcome To,” city-keyword paragraphs, placeholder testimonials, a stock-style hero, and an “11+ years” line that contradicted the 2008 bookkeeping start. This rebuild uses an offer H1, year-round positioning, and a documented 2008 → tax → 2012 corporation timeline.

## Deploy

Any Node host that can run `next start` (Vercel, Hostinger Node, etc.). Point the existing domain at the new host when you are ready to cut over.
