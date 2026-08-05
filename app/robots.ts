import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://omnia.land/sitemap.xml",
    host: "https://omnia.land",
  };
}
