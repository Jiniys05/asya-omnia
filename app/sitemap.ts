import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://omnia.land";
  const routes = [
    ["", 1, "weekly"],
    ["/method", 0.9, "monthly"],
    ["/session", 0.9, "monthly"],
    ["/services", 0.95, "monthly"],
    ["/services/personal-audio", 0.85, "monthly"],
    ["/services/executive-reset", 0.9, "monthly"],
    ["/mentoring", 0.9, "monthly"],
    ["/mentoring/women", 0.9, "monthly"],
    ["/mentoring/men", 0.9, "monthly"],
    ["/hypnotherapy-online", 0.9, "monthly"],
    ["/money-scenarios", 0.85, "weekly"],
    ["/relationships", 0.85, "monthly"],
    ["/burnout", 0.85, "monthly"],
    ["/about", 0.7, "monthly"],
    ["/cases", 0.8, "monthly"],
    ["/blog", 0.7, "weekly"],
    ["/journal/fear-and-income", 0.8, "monthly"],
    ["/journal/money-leaks", 0.8, "monthly"],
    ["/journal/separation", 0.8, "monthly"],
    ["/journal/closeness", 0.8, "monthly"],
    ["/journal/fear-levels", 0.75, "monthly"],
    ["/journal/hypnosis-state", 0.75, "monthly"],
  ] as const;

  return routes.map(([path, priority, changeFrequency]) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-07-30"),
    changeFrequency,
    priority,
  }));
}
