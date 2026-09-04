import type { reviews } from "@/lib/reviews";

type Review = (typeof reviews)[number];

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col border border-line bg-paper p-6">
      <blockquote className="serif text-xl leading-relaxed text-ink">“{review.quote}”</blockquote>
      <figcaption className="mt-auto pt-6 text-sm text-muted">
        {review.attribution}
        <br />
        <a className="text-ink underline decoration-brass underline-offset-2" href={review.sourceUrl} rel="noreferrer">
          Source: {review.source}
        </a>
      </figcaption>
    </figure>
  );
}
