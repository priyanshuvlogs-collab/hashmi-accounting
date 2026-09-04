import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Book a free consult. Bring the letter, the deadline, or last year’s return.",
  body = "Tell us who you are and what is due. We will say if we can take the file. No SIN on the form.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between lg:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl text-paper">{title}</h2>
          <p className="mt-3 text-paper/80">{body}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="bg-brass-light px-5 py-3 text-center font-semibold text-ink-deep">
            Book a free consult
          </Link>
          <a href={site.phoneHref} className="border border-paper/40 px-5 py-3 text-center font-semibold text-paper">
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
