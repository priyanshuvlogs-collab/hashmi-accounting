import type { FaqItem } from "@/lib/faq";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-4">
          <summary className="cursor-pointer list-none text-lg font-medium text-ink marker:content-none">
            <span className="flex items-start justify-between gap-4">
              {item.q}
              <span className="mt-1 text-brass group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
