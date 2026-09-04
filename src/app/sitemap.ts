import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "/",
  "/services",
  "/personal-tax",
  "/self-employed",
  "/corporate-tax",
  "/bookkeeping",
  "/payroll-hst-wsib",
  "/cra-notices",
  "/about",
  "/service-area",
  "/contact",
  "/faq",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
