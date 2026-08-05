import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ася Омниа — внутренняя реальность",
    short_name: "OMNIA",
    description:
      "Гипнотерапия, регрессионная работа и индивидуальное менторство онлайн.",
    start_url: "/",
    display: "standalone",
    background_color: "#090a0b",
    theme_color: "#090a0b",
    lang: "ru",
    categories: ["lifestyle", "education"],
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
