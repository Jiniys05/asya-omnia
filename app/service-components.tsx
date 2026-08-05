import Link from "next/link";
import { Experience } from "./experience";
import {
  bookingUrl,
  Footer,
  InnerHeader,
  MobileBookingBar,
} from "./site-components";

type ServiceStep = {
  title: string;
  text: string;
};

export function ServiceOfferPage({
  canonicalPath,
  eyebrow,
  title,
  italic,
  lead,
  image,
  imageAlt,
  duration,
  format,
  access,
  quote,
  includes,
  process,
  bestFor,
  note,
  serviceType,
}: {
  canonicalPath: string;
  eyebrow: string;
  title: string;
  italic: string;
  lead: string;
  image: string;
  imageAlt: string;
  duration: string;
  format: string;
  access: string;
  quote: string;
  includes: ServiceStep[];
  process: ServiceStep[];
  bestFor: string[];
  note: string;
  serviceType: string;
}) {
  const pageUrl = `https://omnia.land${canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: "https://omnia.land",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Услуги",
            item: "https://omnia.land/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${title} ${italic}`,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        name: `${title} ${italic}`,
        description: lead,
        serviceType,
        url: pageUrl,
        areaServed: "Worldwide",
        provider: {
          "@type": "Person",
          name: "Ася Омниа",
          url: "https://omnia.land/about",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: bookingUrl,
          availableLanguage: "Russian",
        },
      },
    ],
  };

  return (
    <main className="service-page">
      <Experience />
      <MobileBookingBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <InnerHeader />

      <section className="service-hero shell">
        <div className="service-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>
            {title}
            <span>{italic}</span>
          </h1>
          <p>{lead}</p>
        </div>
        <aside className="service-pass" aria-label="Параметры формата">
          <span>Private format · OMNIA</span>
          <dl>
            <div>
              <dt>Продолжительность</dt>
              <dd>{duration}</dd>
            </div>
            <div>
              <dt>Формат</dt>
              <dd>{format}</dd>
            </div>
            <div>
              <dt>Доступ</dt>
              <dd>{access}</dd>
            </div>
          </dl>
          <a href={bookingUrl} target="_blank" rel="noreferrer">
            Обсудить участие <b aria-hidden="true">↗</b>
          </a>
        </aside>
      </section>

      <section className="service-editorial shell">
        <figure>
          <img src={image} alt={imageAlt} width="1200" height="1500" />
          <figcaption>OMNIA · индивидуальная работа</figcaption>
        </figure>
        <blockquote>{quote}</blockquote>
      </section>

      <section className="service-includes shell" aria-labelledby="includes-title">
        <div className="service-section-heading">
          <p className="kicker">Как устроен формат</p>
          <h2 id="includes-title">
            Что входит
            <span>в работу</span>
          </h2>
        </div>
        <div className="service-includes-grid">
          {includes.map((item, index) => (
            <article className="reveal" data-reveal key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-process">
        <div className="shell">
          <div className="service-process-heading">
          <p className="kicker">Как проходит работа</p>
            <h2>
            Понятный путь
            <span>от ситуации к изменениям</span>
            </h2>
          </div>
          <ol>
            {process.map((item, index) => (
              <li className="reveal" data-reveal key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="service-fit shell">
        <div>
          <p className="kicker">Кому подходит</p>
          <h2>
            Формат имеет смысл,
            <span>если вы узнаёте себя</span>
          </h2>
        </div>
        <ul>
          {bestFor.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="service-final">
        <div className="shell">
          <p className="kicker">Перед началом</p>
          <h2>
            Сначала обсудить ситуацию.
            <span>Потом выбрать формат.</span>
          </h2>
          <p>{note}</p>
          <div>
            <a
              className="button button-primary"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Записаться на разбор <span aria-hidden="true">↗</span>
            </a>
            <Link className="button button-ghost" href="/services">
              Все форматы <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
