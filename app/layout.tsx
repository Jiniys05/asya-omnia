import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omnia.land"),
  title: {
    default: "Ася Омниа — гипнотерапевт и регрессолог",
    template: "%s — Ася Омниа",
  },
  description:
    "Индивидуальная работа с тревогой, повторяющимися трудностями, отношениями, деньгами и важными решениями. Онлайн-сессии и программа на 9 недель.",
  applicationName: "OMNIA",
  category: "lifestyle",
  publisher: "Ася Омниа",
  manifest: "/manifest.webmanifest",
  keywords: [
    "гипнотерапевт онлайн",
    "регрессолог",
    "работа с подсознанием",
    "гипнотерапия",
    "бессознательные сценарии",
    "денежные сценарии",
    "страх масштаба",
    "эмоциональное выгорание",
    "сценарии в отношениях",
    "менторство для женщин",
    "менторство для мужчин",
    "персональная гипнотическая аудиозапись",
    "выгорание предпринимателя",
    "психологический интенсив онлайн",
    "гипнотерапия Пхукет",
    "Ася Омниа",
    "менторство",
  ],
  authors: [{ name: "Ася Омниа", url: "https://omnia.land" }],
  creator: "Ася Омниа",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://omnia.land",
    siteName: "Ася Омниа",
    title: "Понять себя и жить по-своему",
    description:
      "Помогаю разобраться с привычными реакциями, которые мешают жить так, как хочется вам.",
    images: [
      {
        url: "/media/asya-portrait.webp",
        width: 900,
        height: 1081,
        alt: "Ася Омниа — гипнотерапевт и регрессолог",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ася Омниа — гипнотерапия онлайн",
    description:
      "Индивидуальная работа с тревогой, отношениями, деньгами и повторяющимися трудностями.",
    images: ["/media/asya-portrait.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "codex-preview": "development",
    "theme-color": "#090a0b",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090a0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
