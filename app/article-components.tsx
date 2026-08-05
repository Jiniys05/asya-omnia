import Link from "next/link";
import { Experience } from "./experience";
import {
  bookingUrl,
  Footer,
  InnerHeader,
  MobileBookingBar,
} from "./site-components";

type ArticleSection = {
  number: string;
  title: string;
  paragraphs: string[];
};

type RelatedArticle = {
  label: string;
  title: string;
  href: string;
};

export function JournalArticle({
  canonicalPath,
  eyebrow,
  title,
  italic,
  intro,
  published,
  readingTime,
  image,
  imageAlt,
  videoId,
  videoTitle,
  quote,
  sections,
  related,
  sourceHref,
  sourceLabel = "Первоисточник в OMNIA",
}: {
  canonicalPath: string;
  eyebrow: string;
  title: string;
  italic: string;
  intro: string;
  published: string;
  readingTime: string;
  image?: string;
  imageAlt?: string;
  videoId?: string;
  videoTitle?: string;
  quote: string;
  sections: ArticleSection[];
  related: RelatedArticle[];
  sourceHref?: string;
  sourceLabel?: string;
}) {
  const pageUrl = `https://omnia.land${canonicalPath}`;
  const articleSchema = {
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
            name: "Материалы",
            item: "https://omnia.land/blog",
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
        "@type": "Article",
        headline: `${title} ${italic}`,
        description: intro,
        datePublished: published,
        dateModified: "2026-07-30",
        inLanguage: "ru-RU",
        mainEntityOfPage: pageUrl,
        image: image ? `https://omnia.land${image}` : undefined,
        author: {
          "@type": "Person",
          name: "Ася Омниа",
          url: "https://omnia.land/about",
        },
        publisher: {
          "@type": "Person",
          name: "Ася Омниа",
          url: "https://omnia.land",
        },
      },
      ...(videoId
        ? [
            {
              "@type": "VideoObject",
              name: videoTitle ?? `${title} ${italic}`,
              description: intro,
              uploadDate: published,
              thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
              embedUrl: `https://www.youtube.com/embed/${videoId}`,
              contentUrl: `https://www.youtube.com/shorts/${videoId}`,
            },
          ]
        : []),
    ],
  };

  return (
    <main className="article-page">
      <Experience />
      <MobileBookingBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <InnerHeader />

      <article>
        <header className="article-hero shell">
          <div className="article-hero-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1>
              {title}
              <span>{italic}</span>
            </h1>
            <p className="article-intro">{intro}</p>
            <div className="article-meta">
              <span>Ася Омниа</span>
              <span>{published.split("-").reverse().join(".")}</span>
              <span>{readingTime}</span>
            </div>
          </div>
          <ArticleMedia
            image={image}
            imageAlt={imageAlt}
            videoId={videoId}
            videoTitle={videoTitle}
          />
        </header>

        <div className="article-layout shell">
          <aside className="article-index">
            <span>В материале</span>
            {sections.map((section) => (
              <a href={`#article-${section.number}`} key={section.number}>
                {section.number} · {section.title}
              </a>
            ))}
          </aside>

          <div className="article-content">
            <blockquote>{quote}</blockquote>
            {sections.map((section) => (
              <section
                id={`article-${section.number}`}
                className="article-section reveal"
                data-reveal
                key={section.number}
              >
                <span>{section.number}</span>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
            {sourceHref ? (
              <a
                className="article-source"
                href={sourceHref}
                target="_blank"
                rel="noreferrer"
              >
                {sourceLabel} <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </div>
      </article>

      <section className="article-related shell" aria-labelledby="related-title">
        <div className="article-related-heading">
          <p className="kicker">Продолжить чтение</p>
          <h2 id="related-title">
            Посмотреть на ситуацию
            <span>с другой стороны</span>
          </h2>
        </div>
        <div className="article-related-grid">
          {related.map((item, index) => (
            <Link href={item.href} key={item.href}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <div>
                <i>читать на сайте</i>
                <b>{String(index + 1).padStart(2, "0")}</b>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="article-cta">
        <div className="shell">
          <p className="kicker">Если узнали себя</p>
          <h2>
            Можно понять, что мешает
            <span>вам сделать следующий шаг.</span>
          </h2>
          <p>
            На бесплатном разборе вы спокойно расскажете о своей ситуации и
            поймёте, что можно изменить: разговор, решение, отдых или важный
            шаг в работе.
          </p>
          <a
            className="button button-primary"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Записаться на разбор <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ArticleMedia({
  image,
  imageAlt,
  videoId,
  videoTitle,
}: {
  image?: string;
  imageAlt?: string;
  videoId?: string;
  videoTitle?: string;
}) {
  if (videoId) {
    return (
      <div className="article-media article-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
          title={videoTitle ?? "Видео Аси Омниа"}
          loading="eager"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <span>Видео · OMNIA</span>
      </div>
    );
  }

  return (
    <figure className="article-media article-photo">
      <img
        src={image}
        alt={imageAlt ?? "Ася Омниа"}
        width="1200"
        height="1500"
      />
      <figcaption>OMNIA · Материалы о жизни, выборе и отношениях</figcaption>
    </figure>
  );
}
