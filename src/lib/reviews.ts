/**
 * Real-review policy
 * ------------------
 * Only publish reviews we can attribute to a public source. Do not invent
 * names, titles, companies, star counts, or dollar results. Do not use
 * lorem ipsum or stock “CEO testimonial” copy from the old site.
 *
 * Display name: public reviews often say “Syed.” The federal corporation
 * lists Fahad Hashmi as director. Quote reviews as written. Do not invent
 * a preferred first name or a CPA / other designation on this site.
 *
 * Negative public reviews exist. This marketing site highlights attributable
 * praise and does not pretend every client experience was identical.
 *
 * See /REVIEW_POLICY.md in the repo root.
 */

export const reviewPolicyHref = "/privacy#reviews";

export const reviews = [
  {
    quote:
      "Very fast, reliable service. Hashmi is very professional and responded very quickly to my concerns. He is knowledgeable, quite experienced and saved me from paying a lot of money to CRA. I am so grateful.",
    source: "ThreeBestRated.ca",
    sourceUrl: "https://threebestrated.ca/tax-services-in-pickering-on",
    attribution: "Public review, ThreeBestRated (Pickering tax services)",
  },
  {
    quote:
      "Syed has been very helpful and quick. Answered all my inquiries in a timely manner and is always a delight to chat with. 100% will recommend to friends and family members.",
    source: "ThreeBestRated.ca",
    sourceUrl: "https://threebestrated.ca/tax-services-in-pickering-on",
    attribution: "Public review, ThreeBestRated (Pickering tax services)",
  },
  {
    quote:
      "Syed is amazing. I looked at a number of tax accounting services and very, very glad that I chose Hashmi. He has been a pleasure to work with. Thank you Syed.",
    source: "ThreeBestRated.ca",
    sourceUrl: "https://threebestrated.ca/tax-services-in-pickering-on",
    attribution: "Public review, ThreeBestRated (Pickering tax services)",
  },
] as const;
