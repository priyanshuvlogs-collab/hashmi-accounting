import { site } from "@/lib/site";

export function UtilityBar() {
  return (
    <div className="hidden border-b border-ink/10 bg-ink text-[0.8125rem] text-paper/90 md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 lg:px-6">
        <p className="min-w-0 truncate">
          <span className="text-brass-light">Pickering office</span>
          <span className="mx-2 text-paper/40">·</span>
          <a className="hover:text-paper" href={site.address.mapsLink} target="_blank" rel="noreferrer">
            {site.address.line}
          </a>
        </p>
        <p className="flex shrink-0 items-center gap-4">
          <a className="hover:text-paper" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <a className="hover:text-paper" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <span className="text-paper/70">{site.hours.short}</span>
        </p>
      </div>
    </div>
  );
}
