import type { Metadata } from "next";
import Link from "next/link";
import { Experience } from "../experience";
import {
  bookingUrl,
  Footer,
  InnerHeader,
  MobileBookingBar,
} from "../site-components";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Услуги и форматы работы с Асей Омниа",
  description:
    "Форматы работы OMNIA: индивидуальная сессия, личная аудиопрактика, Executive Reset и программа на 9 недель.",
  keywords: [
    "услуги гипнотерапевта",
    "гипнотерапия онлайн",
    "персональная аудиопрактика",
    "работа с выгоранием руководителей",
    "менторство онлайн",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Форматы работы OMNIA",
    description:
      "От одной индивидуальной сессии до приватных форматов и программы на 9 недель.",
    url: "/services",
    images: ["/media/asya-hero.webp"],
  },
};

const services = [
  {
    number: "01",
    label: "Один понятный вопрос",
    title: "Индивидуальная сессия",
    text: "Одна конкретная трудность: понять, что вас останавливает, и уйти с ясным следующим шагом.",
    meta: "онлайн · индивидуально",
    href: "/session",
  },
  {
    number: "02",
    label: "Личная практика",
    title: "Персональная аудиопрактика",
    text: "Личная аудиозапись, чтобы быстрее возвращаться в спокойствие перед важным разговором, событием или сложным днём.",
    meta: "опрос · созвон · аудио",
    href: "/services/personal-audio",
  },
  {
    number: "03",
    label: "Для предпринимателей и руководителей",
    title: "Executive Reset",
    text: "Приватный формат на месяц для руководителей: чтобы меньше жить на нервах, не срываться и снова находить время на себя и близких.",
    meta: "30 дней · confidential",
    href: "/services/executive-reset",
  },
  {
    number: "04",
    label: "Программа на 9 недель",
    title: "Менторство на 9 недель",
    text: "Когда одна проблема мешает и в работе, и дома, и в деньгах. За 9 недель вы учитесь менять привычный ход жизни.",
    meta: "€1 600 · 160 000 ₽",
    href: "/mentoring",
  },
];

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Форматы работы OMNIA",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.text,
        url: `https://omnia.land${service.href}`,
        provider: {
          "@type": "Person",
          name: "Ася Омниа",
          url: "https://omnia.land/about",
        },
      },
    })),
  };

  return (
    <main className="services-page">
      <Experience />
      <MobileBookingBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <InnerHeader />

      <section className="services-hero shell">
        <div>
          <p className="eyebrow">OMNIA · Private practice</p>
          <h1>
            Не больше встреч.
            <span>А подходящий формат.</span>
          </h1>
        </div>
        <div className="services-hero-aside">
          <p>
            Есть одна сессия, программа на 9 недель и приватные форматы. На
            бесплатном разборе Ася поможет выбрать вариант, который действительно нужен вам, а не самый дорогой.
          </p>
          <a href={bookingUrl} target="_blank" rel="noreferrer">
            Бесплатный разбор <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="services-catalog shell" aria-label="Форматы работы">
        {services.map((service) => (
          <Link
            className="services-card reveal"
            data-reveal
            href={service.href}
            key={service.href}
          >
            <span className="services-number">{service.number}</span>
            <div>
              <p>{service.label}</p>
              <h2>{service.title}</h2>
            </div>
            <p className="services-description">{service.text}</p>
            <div className="services-card-meta">
              <span>{service.meta}</span>
              <b aria-hidden="true">↗</b>
            </div>
          </Link>
        ))}
      </section>

      <section className="services-comparison shell">
        <div>
          <p className="kicker">Как выбрать</p>
          <h2>
            По вашей ситуации,
            <span>а не по красивому названию</span>
          </h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <p>Одна понятная ситуация, которая повторяется, — индивидуальная сессия.</p>
          </li>
          <li>
            <span>02</span>
            <p>
              Нужен личный инструмент для самостоятельной практики — персональная аудиозапись.
            </p>
          </li>
          <li>
            <span>03</span>
            <p>
              Много ответственности, мало сил и сложно отключиться — Executive Reset.
            </p>
          </li>
          <li>
            <span>04</span>
            <p>
              Похожая трудность влияет сразу на несколько сфер жизни — программа на 9 недель.
            </p>
          </li>
        </ol>
      </section>

      <section className="services-final">
        <div className="shell">
          <p className="kicker">Первый шаг бесплатный</p>
          <h2>
            Не угадывать формат.
            <span>Сначала понять ситуацию.</span>
          </h2>
          <p>
            Опишите ситуацию своими словами. Ася честно скажет, можно ли с ней
            работать, и предложит формат без лишних встреч.
          </p>
          <a
            className="button button-primary"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Записаться на бесплатный разбор <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
