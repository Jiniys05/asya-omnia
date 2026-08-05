import Link from "next/link";
import type { ReactNode } from "react";
import { Experience } from "./experience";

export const bookingUrl = "https://t.me/anomnia";

export function MobileMenu() {
  return (
    <details className="mobile-menu">
      <summary>
        Меню <span aria-hidden="true">+</span>
      </summary>
      <nav className="mobile-menu-panel" aria-label="Мобильная навигация">
        <Link href="/">Главная</Link>
        <Link href="/services">Все услуги</Link>
        <Link href="/method">Метод</Link>
        <Link href="/session">Индивидуальная сессия</Link>
        <Link href="/mentoring">Менторство</Link>
        <Link href="/mentoring/women">Для женщин</Link>
        <Link href="/mentoring/men">Для мужчин</Link>
        <Link href="/hypnotherapy-online">Гипнотерапия онлайн</Link>
        <Link href="/money-scenarios">Деньги и масштаб</Link>
        <Link href="/relationships">Отношения</Link>
        <Link href="/burnout">Выгорание</Link>
        <Link href="/cases">Кейсы</Link>
        <Link href="/about">Обо мне</Link>
        <Link href="/blog">Материалы</Link>
      </nav>
    </details>
  );
}

export function MobileBookingBar() {
  return (
    <a
      className="mobile-booking-bar"
      href={bookingUrl}
      target="_blank"
      rel="noreferrer"
    >
      <span>
        Бесплатный разбор
        <small>Личный Telegram Аси</small>
      </span>
      <b aria-hidden="true">↗</b>
    </a>
  );
}

export function InnerHeader() {
  return (
    <header className="inner-header">
      <div className="site-header shell">
        <Link className="wordmark" href="/" aria-label="Ася Омниа — главная">
          АСЯ ОМНИА
        </Link>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <Link href="/services">Услуги</Link>
          <Link href="/method">Метод</Link>
          <Link href="/session">Сессия</Link>
          <Link href="/mentoring">Менторство</Link>
          <Link href="/cases">Кейсы</Link>
        </nav>
        <MobileMenu />
        <a
          className="header-cta"
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Начать разговор
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid shell">
        <div>
          <Link className="footer-mark" href="/">
            АСЯ ОМНИА
          </Link>
          <p>
            Регрессолог · гипнотерапевт
            <br />
            работа с повторяющимися жизненными трудностями
          </p>
        </div>
        <nav aria-label="Разделы сайта">
          <Link href="/method">Метод</Link>
          <Link href="/services">Все услуги</Link>
          <Link href="/session">Сессия</Link>
          <Link href="/mentoring">Менторство</Link>
          <Link href="/cases">Кейсы</Link>
          <Link href="/about">Обо мне</Link>
          <Link href="/blog">Материалы</Link>
        </nav>
        <nav aria-label="Темы работы">
          <Link href="/hypnotherapy-online">Гипнотерапия онлайн</Link>
          <Link href="/services/personal-audio">Персональная аудиопрактика</Link>
          <Link href="/services/executive-reset">Executive Reset</Link>
          <Link href="/money-scenarios">Деньги и масштаб</Link>
          <Link href="/relationships">Отношения</Link>
          <Link href="/burnout">Выгорание и состояние</Link>
          <Link href="/mentoring/women">Программа для женщин</Link>
          <Link href="/mentoring/men">Программа для мужчин</Link>
          <Link href="/privacy">Конфиденциальность</Link>
        </nav>
        <div className="footer-contact">
          <a href={bookingUrl} target="_blank" rel="noreferrer">
            Личный Telegram <span>↗</span>
          </a>
          <a href="https://t.me/hypnomnia" target="_blank" rel="noreferrer">
            Канал OMNIA <span>↗</span>
          </a>
          <a
            href="https://www.youtube.com/@asyaomnia"
            target="_blank"
            rel="noreferrer"
          >
            YouTube <span>↗</span>
          </a>
        </div>
      </div>
      <div className="footer-base shell">
        <span>© {new Date().getFullYear()} Ася Омниа</span>
        <p>
          Практика не заменяет медицинскую, психиатрическую или экстренную
          помощь. Результаты индивидуальны.
        </p>
        <span>Пхукет · онлайн по миру</span>
      </div>
    </footer>
  );
}

export function DetailPage({
  eyebrow,
  title,
  italic,
  lead,
  leadNote,
  image,
  imageAlt,
  sections,
  note,
  feature,
  footerFeature,
  canonicalPath,
  serviceType,
  price,
  priceCurrency,
}: {
  eyebrow: string;
  title: string;
  italic: string;
  lead: string;
  leadNote?: string;
  image: string;
  imageAlt: string;
  sections: Array<{
    number: string;
    title: string;
    body: string;
    href?: string;
    linkLabel?: string;
    audioReview?: {
      label: string;
      links: Array<{
        href: string;
        label?: string;
      }>;
    };
    imageReview?: {
      label: string;
      src: string;
      alt: string;
    };
  }>;
  note?: string;
  feature?: ReactNode;
  footerFeature?: ReactNode;
  canonicalPath?: string;
  serviceType?: string;
  price?: string;
  priceCurrency?: string;
}) {
  const pageSchema = canonicalPath
    ? {
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
                name: `${title} ${italic}`,
                item: `https://omnia.land${canonicalPath}`,
              },
            ],
          },
          {
            "@type": "WebPage",
            name: `${title} ${italic}`,
            description: lead,
            url: `https://omnia.land${canonicalPath}`,
            inLanguage: "ru-RU",
            isPartOf: {
              "@type": "WebSite",
              name: "Ася Омниа",
              url: "https://omnia.land",
            },
            about: {
              "@type": "Person",
              name: "Ася Омниа",
              url: "https://omnia.land/about",
            },
          },
          ...(serviceType
            ? [
                {
                  "@type": "Service",
                  name: `${title} ${italic}`,
                  serviceType,
                  description: lead,
                  url: `https://omnia.land${canonicalPath}`,
                  areaServed: "Worldwide",
                  availableChannel: {
                    "@type": "ServiceChannel",
                    serviceUrl: bookingUrl,
                    availableLanguage: "Russian",
                  },
                  provider: {
                    "@type": "Person",
                    name: "Ася Омниа",
                    url: "https://omnia.land/about",
                  },
                  ...(price && priceCurrency
                    ? {
                        offers: {
                          "@type": "Offer",
                          price,
                          priceCurrency,
                          availability: "https://schema.org/InStock",
                          url: bookingUrl,
                        },
                      }
                    : {}),
                },
              ]
            : []),
        ],
      }
    : null;

  return (
    <main className="detail-page">
      <Experience />
      <MobileBookingBar />
      {pageSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
      ) : null}
      <InnerHeader />
      <section className="detail-hero shell">
        <div className="detail-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>
            {title}
            <span>{italic}</span>
          </h1>
          <p className="detail-hero-lead">{lead}</p>
          {leadNote ? (
            <p className="detail-hero-confidentiality">{leadNote}</p>
          ) : null}
        </div>
        <div className="detail-hero-image">
          <img src={image} alt={imageAlt} width="1200" height="1500" />
        </div>
      </section>
      {feature}
      <section className="detail-body shell">
        <div className="detail-index">
          <span>Содержание</span>
          {sections.map((section) => (
            <a href={`#detail-${section.number}`} key={section.number}>
              {section.number} · {section.title}
            </a>
          ))}
        </div>
        <div className="detail-sections">
          {sections.map((section) => (
            <article
              id={`detail-${section.number}`}
              className="reveal"
              data-reveal
              key={section.number}
            >
              <span>{section.number}</span>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.audioReview ? (
                <div
                  className="detail-audio-review"
                  aria-label={section.audioReview.label}
                >
                  <span className="detail-audio-label">
                    {section.audioReview.label}
                  </span>
                  <div className="detail-audio-links">
                    {section.audioReview.links.map((review, index) => (
                      <a
                        href={review.href}
                        target="_blank"
                        rel="noreferrer"
                        key={review.href}
                      >
                        <i aria-hidden="true">▶</i>
                        <b>
                          {review.label ??
                            (section.audioReview!.links.length > 1
                              ? `Часть ${index + 1}`
                              : "Слушать аудио")}
                        </b>
                        <small>Telegram ↗</small>
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
              {section.imageReview ? (
                <details className="detail-image-review">
                  <summary>
                    <span>{section.imageReview.label}</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <div>
                    <img
                      src={section.imageReview.src}
                      alt={section.imageReview.alt}
                      width="1280"
                      height="1097"
                      loading="lazy"
                    />
                  </div>
                </details>
              ) : null}
              {section.href ? (
                <a
                  className="detail-source-link"
                  href={section.href}
                  target={section.href.startsWith("http") ? "_blank" : undefined}
                  rel={section.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {section.linkLabel ?? "Открыть материал"}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </article>
          ))}
          {note ? <p className="detail-note">{note}</p> : null}
        </div>
      </section>
      <section className="detail-cta">
        <div className="shell">
          <p className="kicker">Следующий шаг</p>
          <h2>
            Рассказать, что сейчас
            <span>мешает жить так, как хочется</span>
          </h2>
          <a
            className="button button-primary"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Написать Асе <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      {footerFeature}
      <Footer />
    </main>
  );
}

export function EditorialLinks({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: Array<{
    label: string;
    title: string;
    text: string;
    href: string;
    number: string;
  }>;
}) {
  return (
    <section className="editorial-links shell">
      <div className="editorial-links-heading">
        <p className="kicker">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="editorial-links-grid">
        {items.map((item) => (
          <a
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            key={item.href}
          >
            <span>{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div>
              <i>открыть материал</i>
              <b>{item.number}</b>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
