import Link from "next/link";
import { Logo } from "@/components/Logo";
import { servicePages, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 lg:px-6">
        <div className="md:col-span-1">
          <Logo invert />
          <p className="mt-4 text-sm leading-relaxed text-paper/80">{site.tagline}</p>
        </div>
        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brass-light">Visit</h2>
          <address className="mt-3 not-italic text-sm leading-relaxed text-paper/90">
            {site.legal}
            <br />
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.postal}
            <br />
            {site.address.intersection}
          </address>
          <p className="mt-3 text-sm">
            <a className="text-paper underline decoration-brass/70 underline-offset-2" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <br />
            <a className="text-paper underline decoration-brass/70 underline-offset-2" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-3 text-sm text-paper/80">
            {site.hours.weekday}
            <br />
            {site.hours.weekend}
          </p>
        </div>
        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brass-light">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {servicePages.map((s) => (
              <li key={s.href}>
                <Link className="hover:text-brass-light" href={s.href}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brass-light">This site</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="hover:text-brass-light" href="/about">
                About the firm
              </Link>
            </li>
            <li>
              <Link className="hover:text-brass-light" href="/service-area">
                Pickering, Durham &amp; east GTA
              </Link>
            </li>
            <li>
              <Link className="hover:text-brass-light" href="/faq">
                FAQ &amp; document checklist
              </Link>
            </li>
            <li>
              <Link className="hover:text-brass-light" href="/contact">
                Book a consult
              </Link>
            </li>
            <li>
              <Link className="hover:text-brass-light" href="/privacy">
                Privacy &amp; disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs leading-relaxed text-paper/70 lg:px-6">
          <p>{site.disclaimer}</p>
          <p className="mt-2">
            © {new Date().getFullYear()} {site.legal}. Bookkeeping offered since {site.history.bookkeepingSince}.
            Federal corporation {site.history.federalCorporation}. We do not list CPA or other designations on this
            site.
          </p>
        </div>
      </div>
    </footer>
  );
}
