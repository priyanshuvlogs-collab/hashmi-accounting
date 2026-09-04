"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { navigation, servicePages, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href="/services" className="text-[0.95rem] font-medium text-ink hover:text-brass">
              Services
            </Link>
            {servicesOpen ? (
              <div className="absolute left-0 top-full z-50 w-80 pt-3">
                <ul className="border border-line bg-paper p-2 shadow-lg">
                  {servicePages.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="block px-3 py-2 text-sm text-charcoal hover:bg-paper-2"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="font-medium text-ink">{s.title}</span>
                        <span className="block text-xs text-muted">{s.blurb}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          {navigation
            .filter((item) => item.href !== "/services")
            .map((item) => (
              <Link key={item.href} href={item.href} className="text-[0.95rem] font-medium text-ink hover:text-brass">
                {item.label}
              </Link>
            ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-ink underline decoration-brass decoration-2 underline-offset-4"
          >
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="bg-ink px-4 py-2.5 text-sm font-semibold text-paper hover:bg-ink-deep"
          >
            Book a free consult
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-11 items-center border border-ink px-3 text-sm font-semibold text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-paper px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="pt-2 text-xs uppercase tracking-wider text-muted">By service</p>
            {servicePages.map((s) => (
              <Link key={s.href} href={s.href} className="py-1.5 text-sm text-charcoal" onClick={() => setOpen(false)}>
                {s.title}
              </Link>
            ))}
            <a href={site.phoneHref} className="mt-3 bg-ink px-4 py-3 text-center font-semibold text-paper">
              Call {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="border border-ink px-4 py-3 text-center font-semibold text-ink"
              onClick={() => setOpen(false)}
            >
              Book a free consult
            </Link>
            <p className="pt-2 text-sm text-muted">{site.address.line}</p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
