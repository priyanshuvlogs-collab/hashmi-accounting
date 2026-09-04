export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="border-b border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-6 lg:py-20">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight text-ink md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{lead}</p>
      </div>
    </header>
  );
}
