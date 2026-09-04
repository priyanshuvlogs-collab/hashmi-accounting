import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyCallBar } from "@/components/StickyCallBar";
import { UtilityBar } from "@/components/UtilityBar";
import { site } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pickering Accountant | Tax, Bookkeeping & Payroll | Hashmi Accounting",
    template: "%s | Hashmi Accounting",
  },
  description:
    "Tax, bookkeeping, payroll, GST/HST, and WSIB for families and incorporated businesses in Pickering, Durham, and the east GTA. Year-round — not rushed in April.",
  alternates: { canonical: "/" },
  openGraph: {
    locale: site.locale,
    siteName: site.brand,
    type: "website",
    url: site.url,
    title: "Pickering Accountant | Tax, Bookkeeping & Payroll | Hashmi Accounting",
    description: site.hero.sub,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={site.locale} className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper font-sans text-charcoal">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd />
        <UtilityBar />
        <Header />
        <div className="flex min-h-full flex-col pb-20 md:pb-0">
          {children}
          <Footer />
        </div>
        <StickyCallBar />
      </body>
    </html>
  );
}
