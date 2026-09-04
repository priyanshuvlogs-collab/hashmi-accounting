import { site } from "@/lib/site";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink bg-ink p-2 md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.phoneHref}
          className="bg-brass-light px-3 py-3 text-center text-sm font-semibold text-ink-deep"
        >
          Call {site.phoneDisplay}
        </a>
        <a href="/contact" className="border border-paper/40 px-3 py-3 text-center text-sm font-semibold text-paper">
          Book a consult
        </a>
      </div>
    </div>
  );
}
