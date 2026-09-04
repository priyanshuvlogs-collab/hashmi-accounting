import Link from "next/link";

type LogoProps = {
  invert?: boolean;
  compact?: boolean;
};

export function Mark({ invert = false, className = "h-11 w-11" }: { invert?: boolean; className?: string }) {
  const ink = invert ? "#F6F1E8" : "#10233D";
  const paper = invert ? "#10233D" : "#F6F1E8";
  return (
    <svg className={className} viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <rect x="1.25" y="1.25" width="69.5" height="69.5" stroke={ink} strokeWidth="2.5" />
      <text
        x="36"
        y="47"
        textAnchor="middle"
        fill={ink}
        fontFamily="Source Serif 4, Georgia, serif"
        fontSize="28"
        fontWeight="600"
        letterSpacing="0.5"
      >
        HA
      </text>
      <rect x="0" y="0" width="0.01" height="0.01" fill={paper} />
    </svg>
  );
}

export function SplitMark({ className = "h-28 w-28" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" aria-hidden="true">
      <rect width="160" height="160" fill="#10233D" />
      <rect x="80" width="80" height="160" fill="#F6F1E8" />
      <text
        x="40"
        y="106"
        textAnchor="middle"
        fill="#F6F1E8"
        fontFamily="Source Serif 4, Georgia, serif"
        fontSize="72"
        fontWeight="600"
      >
        H
      </text>
      <text
        x="120"
        y="106"
        textAnchor="middle"
        fill="#10233D"
        fontFamily="Source Serif 4, Georgia, serif"
        fontSize="72"
        fontWeight="600"
      >
        A
      </text>
      <rect x="78.5" y="0" width="3" height="160" fill="#B08A45" />
    </svg>
  );
}

export function Logo({ invert = false, compact = false }: LogoProps) {
  const text = invert ? "text-paper" : "text-ink";
  const sub = invert ? "text-brass-light" : "text-muted";
  return (
    <Link href="/" className="group flex items-center gap-3 no-underline" aria-label="Hashmi Accounting home">
      <Mark invert={invert} className="h-11 w-11 shrink-0" />
      {compact ? null : (
        <span className="leading-tight">
          <span className={`serif block text-[1.05rem] font-semibold tracking-tight ${text}`}>Hashmi Accounting</span>
          <span className={`block text-xs tracking-[0.14em] uppercase ${sub}`}>Tax &amp; books · Pickering</span>
        </span>
      )}
    </Link>
  );
}
