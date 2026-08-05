import Link from "next/link";
import { Experience } from "./experience";
import { omniaMedia } from "./media";
import {
  Footer,
  MobileBookingBar,
  MobileMenu,
  bookingUrl,
} from "./site-components";

const faq = [
  {
    question: "Что такое гипноз в этой работе?",
    answer:
      "Это спокойное состояние, похожее на глубокую концентрацию. В нём легче понять, почему вы реагируете привычным способом. Вы всё слышите, можете говорить и остановить работу в любой момент.",
  },
  {
    question: "Я не потеряю контроль?",
    answer:
      "Нет. Вы не теряете контроль: слышите меня, понимаете, что происходит и о чем мы говорим, отвечаете на вопросы и сами решаете, про что готовы рассказать.",
  },
  {
    question: "С какими запросами можно прийти?",
    answer:
      "С тем, что повторяется и мешает жить: тревогой, усталостью, конфликтами, страхом заявить о себе, откладыванием дел, трудностями с деньгами или важным выбором.",
  },
  {
    question: "Можно работать онлайн?",
    answer:
      "Да. Я живу на Пхукете и работаю онлайн с клиентами по всему миру. Эффективность онлайн-сессий ровно такая же, как и оффлайн, а зачастую даже выше - так как вы находитесь в привычной и комфортной для себя обстановке.",
  },
  {
    question: "А если я «не поддаюсь» гипнозу?",
    answer:
      "Гипнозу невозможно не поддаваться, потому что это естественное состояние для нашего организма. Вы каждый день находитесь в естественном трансе - когда делаете что-то монотонное, ведете автомобиль на трассе, моете посуду, читаете книгу и задумались - вот это оно. Не нужно иметь особый талант или «отключаться». У всех это состояние ощущается по-разному. Важнее быть готовым замечать свои мысли, ощущения и честно отвечать на вопросы.",
  },
  {
    question: "Как понять, какой формат мне подходит?",
    answer:
      "Свяжитесь с Асей по кнопке «Обсудить запрос» на сайте, она поможет вам выбрать наиболее оптимальный формат для решения именно вашей ситуации",
  },
  {
    question: "Можно ли не выйти из гипноза?",
    answer:
      "Нет. Это обычное состояние внимания, из которого человек выходит сам. Вы также можете открыть глаза, поменять положение тела или остановить работу в любой момент.",
  },
  {
    question: "В каком подходе я работаю?",
    answer:
      "У меня очень большой багаж опыта и знаний, я исследовала разные методики: классический гипноз, регрессивный гипноз, психоинтеграцию, эриксоновский гипноз, НЛП, расстановки, буддистские практики, тета-хилинг, Вселенскую терапию и многое другое. Сейчас в своем авторском методе, который дает наиболее эффективные результаты. Я назвала его «регрессивная психоинтеграция». Метод позволяет найти первопричину проблемы и мгновенно интегрировать в психику новый опыт, за счет чего на глазах меняется состояние, а следом и сама жизнь.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Ася Омниа",
      url: "https://omnia.land",
      jobTitle: "Гипнотерапевт и регрессолог",
      sameAs: [
        "https://t.me/hypnomnia",
        "https://www.youtube.com/@asyaomnia",
      ],
      knowsAbout: [
        "гипнотерапия",
        "регрессионная терапия",
        "работа с бессознательными сценариями",
        "денежные сценарии",
        "страх масштаба",
        "эмоциональное выгорание",
        "сценарии отношений",
      ],
    },
    {
      "@type": "ProfessionalService",
      name: "Ася Омниа — работа с подсознанием",
      url: "https://omnia.land",
      areaServed: "Worldwide",
      availableLanguage: "Russian",
      serviceType: [
        "Индивидуальная гипнотерапевтическая сессия",
        "Персональная гипнотическая аудиопрактика",
        "Приватное сопровождение для предпринимателей и руководителей",
        "Индивидуальное менторство на 9 недель",
      ],
      sameAs: [
        "https://t.me/hypnomnia",
        "https://www.youtube.com/@asyaomnia",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Форматы работы",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Индивидуальная гипнотерапевтическая сессия онлайн",
              url: "https://omnia.land/session",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Персональная гипнотическая аудиопрактика",
              url: "https://omnia.land/services/personal-audio",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Executive Reset",
              url: "https://omnia.land/services/executive-reset",
            },
          },
          {
            "@type": "Offer",
            price: "1600",
            priceCurrency: "EUR",
            itemOffered: {
              "@type": "Service",
              name: "Индивидуальное менторство на 9 недель",
              url: "https://omnia.land/mentoring",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export const dynamic = "force-static";

export default function Home() {
  return (
    <main>
      <Experience />
      <MobileBookingBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header shell">
          <Link className="wordmark" href="/" aria-label="Ася Омниа — главная">
            АСЯ ОМНИА
          </Link>
          <nav className="desktop-nav" aria-label="Основная навигация">
            <a href="#method">Метод</a>
            <a href="#formats">Форматы</a>
            <a href="#cases">Кейсы</a>
            <a href="#about">Обо мне</a>
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
        </header>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow">
              Гипнотерапия онлайн <span>·</span> Индивидуальная работа
            </p>
            <h1 id="hero-title">
              Когда что-то
              <span>пошло не так</span>
            </h1>
            <p className="hero-lead">
              Помогаю понять, почему вы снова попадаете в похожие ситуации — и
              что можно сделать, чтобы стало легче говорить, выбирать, работать
              и строить отношения.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Познакомиться и обсудить запрос
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-ghost" href="#method">
                Как это работает
                <span aria-hidden="true">↓</span>
              </a>
            </div>
            <dl className="hero-metrics" aria-label="Опыт Аси Омниа">
              <div>
                <dt>1000+</dt>
                <dd>часов личной терапии</dd>
              </div>
              <div>
                <dt>12+</dt>
                <dd>стран географии клиентов</dd>
              </div>
              <div>
                <dt>600+</dt>
                <dd>часов глубокой работы</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual" aria-label="Портрет Аси Омниа">
            <div className="portal portal-outer" aria-hidden="true" />
            <div className="portal portal-inner" aria-hidden="true" />
            <div className="portrait-frame">
              <img
                src={omniaMedia.asyaHero}
                alt="Ася Омниа"
                width="900"
                height="1190"
                fetchPriority="high"
              />
            </div>
            <p className="visual-note">
              Пхукет <span>·</span> Онлайн по всему миру
            </p>
          </div>
        </div>

        <div className="hero-marquee" aria-hidden="true">
          <div>
            <span>Состояние</span>
            <i>✦</i>
            <span>Отношения</span>
            <i>✦</i>
            <span>Самоценность</span>
            <i>✦</i>
            <span>Деньги</span>
            <i>✦</i>
            <span>Внутренняя опора</span>
          </div>
        </div>
      </section>

      <section className="requests section shell" aria-labelledby="requests-title">
        <div className="section-intro reveal" data-reveal>
          <p className="kicker">Точка входа</p>
          <h2 id="requests-title">
            Вы многое понимаете,
            <span>но ничего не меняется</span>
          </h2>
          <p>
            Знаете, как надо, но в важный момент снова тревожитесь, молчите,
            откладываете или соглашаетесь на меньшее. Разбираем, почему это
            происходит и меняем реакцию, чтобы в следующий раз вам было легко
            сделать по-своему.
          </p>
        </div>

        <div className="request-grid">
          {[
            [
              "01",
              "Состояние",
              "Постоянная тревога, усталость, мысли по кругу, откладывание дел и нехватка сил. Цель — больше спокойствия и энергии на обычную жизнь.",
              "/burnout",
            ],
            [
              "02",
              "Отношения",
              "Повторяющиеся конфликты, холодность, страх остаться одному или сделать выбор. Цель — легче говорить о важном и быть ближе к людям.",
              "/relationships",
            ],
            [
              "03",
              "Деньги и масштаб",
              "Страшно назвать цену, рассказать о себе, взять больше ответственности или удержать новый доход. Цель — делать нужные шаги без постоянного внутреннего стопа.",
              "/money-scenarios",
            ],
            [
              "04",
              "Смысл",
              "Прежняя жизнь уже не подходит, а как жить по-новому — пока непонятно. Цель — понять свои желания и выбрать следующий шаг.",
              "/mentoring",
            ],
          ].map(([number, title, text, href]) => (
            <article className="request-card reveal" data-reveal key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link href={href} aria-label={`Подробнее: ${title}`}>
                исследовать тему <i aria-hidden="true">↘</i>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="method section" id="method" aria-labelledby="method-title">
        <div className="method-grid shell">
          <div className="method-visual reveal" data-reveal>
            <img
              src={omniaMedia.asyaSkyline}
              alt="Ася Омниа у окна"
              width="1166"
              height="1400"
              loading="lazy"
            />
            <div className="method-orbit orbit-one" aria-hidden="true" />
            <div className="method-orbit orbit-two" aria-hidden="true" />
            <span className="method-mark" aria-hidden="true">
              O
            </span>
          </div>

          <div className="method-copy reveal" data-reveal>
            <p className="kicker">Как проходит работа</p>
            <h2 id="method-title">
              Не бороться с собой.
              <span>Понять, откуда всё началось.</span>
            </h2>
            <p className="method-lead">
              Сначала разбираем конкретную ситуацию: например, вы не можете
              повысить чек, поговорить с близким или решиться на важный шаг.
              Потом смотрим, почему в этот момент включаются тревога, контроль
              или желание всё бросить. Далее находим первопричину, где у вас
              зародилась эта реакция и переписываем её, чтобы в похожей ситуации
              вы могли спокойно подумать и сделать новый выбор.
            </p>

            <ol className="method-steps">
              <li>
                <span>01</span>
                <div>
                  <h3>Увидеть цикличность</h3>
                  <p>
                    Смотрим разные события в жизни и осознаем момент, где всё
                    повторяется: вы молчите, откладываете, срываетесь или
                    соглашаетесь на то, чего не хотите.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Найти, с чего всё началось</h3>
                  <p>
                    Находим первопричину, где эта реакция появилась. Часто это
                    ранний детский опыт, который давно забылся, но всё ещё влияет
                    на сегодняшние решения.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Создать новую реакцию</h3>
                  <p>
                    Смотрим на ситуацию под разными углами. Пробуем отреагировать
                    иначе. Записываем в подсознание новую реакцию. В результате в
                    жизни вам становится легко сохранять спокойное состояние и
                    делать шаги, которые раньше пугали или казались сложными.
                  </p>
                </div>
              </li>
            </ol>

            <Link className="text-link" href="/method">
              Подробнее о подходе <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="intro-video section"
        aria-labelledby="intro-video-title"
      >
        <div className="shell">
          <div className="intro-video-heading reveal" data-reveal>
            <p className="kicker">Познакомимся</p>
            <h2 id="intro-video-title">
              Что на самом деле создаёт проблемы
              <span>в вашей жизни</span>
            </h2>
          </div>

          <div className="intro-video-grid">
            <div className="intro-video-copy reveal" data-reveal>
              <p>В этом видео я рассказываю:</p>
              <ol>
                <li>
                  <span>01</span>
                  <p>
                    почему одни и те же попытки изменить жизнь часто не дают
                    долгого результата
                  </p>
                </li>
                <li>
                  <span>02</span>
                  <p>почему мы снова попадаем в похожие ситуации</p>
                </li>
                <li>
                  <span>03</span>
                  <p>
                    что можно изменить внутри себя, чтобы начать жить по-другому
                  </p>
                </li>
              </ol>
            </div>

            <div className="intro-video-player reveal" data-reveal>
              <iframe
                src="https://kinescope.io/embed/mV4TByUo2PinsJZg5v9SQW"
                title="Что на самом деле создаёт проблемы в вашей жизни"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about section shell" id="about" aria-labelledby="about-title">
        <div className="about-copy reveal" data-reveal>
          <p className="kicker">Ася Омниа</p>
          <h2 id="about-title">
            Гипнотерапевт, регрессолог,
            <em>редактор внутренней реальности</em>
          </h2>
          <div className="about-text">
            <p>
              То, что я делаю, давно вышло за рамки определений «гипнотерапевт»
              или «регрессолог». Я работаю с самой архитектурой вашей жизни — с
              вашим бессознательным на глубинном уровне, перестраивая нейронные
              связи, за счет чего вы начинаете иначе реагировать на жизненные
              ситуации и получаете совсем другое качество жизни. Сегодня мое
              «поле» — это результат ежедневных практик, сильной воли и более
              1000 часов личной терапии. Когда вы входите в контакт со мной,
              трансформация запускается автоматически. И это совсем не про
              магию – это про нейрофизиологию и глубинное понимание происходящих
              с вами процессов.
            </p>
          </div>
          <dl className="about-facts">
            <div>
              <dt>600+</dt>
              <dd>часов практики с клиентами</dd>
            </div>
            <div>
              <dt>Член МАГ</dt>
              <dd>состою в Международной Ассоциации Гипнотерапевтов</dd>
            </div>
          </dl>
          <Link className="text-link" href="/about">
            Подробнее обо мне <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="about-visual reveal" data-reveal>
          <div className="about-frame">
            <img
              src={omniaMedia.asyaParis}
              alt="Ася Омниа в Париже"
              width="1000"
              height="1777"
              loading="lazy"
            />
          </div>
          <p>
            «Я не даю готовые ответы,
            <br />а возвращаю вас к собственным мыслям и желаниям»
          </p>
        </div>
      </section>

      <section className="formats section shell" id="formats" aria-labelledby="formats-title">
        <div className="formats-heading reveal" data-reveal>
          <p className="kicker">Премиальная линейка OMNIA</p>
          <h2 id="formats-title">Выберите формат под свою ситуацию</h2>
        </div>

        <div className="format-grid">
          <article className="format-card reveal" data-reveal>
            <div className="format-topline">
              <span>01</span>
              <p>Точечная работа</p>
            </div>
            <h3>Индивидуальная сессия</h3>
            <p className="format-summary">
              Решение одного конкретного запроса. Точечная проблема, о которой
              вы давно знаете и хотите решить.
            </p>
            <ul>
              <li>Длительность от 45 до 90 минут</li>
              <li>Работа до разрешения запроса</li>
              <li>
                Результат сразу: новое состояние, другой взгляд и новые действия.
              </li>
            </ul>
            <div className="format-footer">
              <Link className="button button-ghost" href="/session">
                Примеры запросов <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>

          <article className="format-card format-featured reveal" data-reveal>
            <div className="format-glow" aria-hidden="true" />
            <div className="format-topline">
              <span>02</span>
              <p>9 недель · индивидуально</p>
            </div>
            <h3>Менторская программа</h3>
            <p className="format-summary">
              Для тех, кто понимает: дело уже давно не в деньгах, отношениях или
              уверенности в себе, а в состоянии, из которого строится вся жизнь.
            </p>
            <ul>
              <li>
                9 недель ежедневного нахождения в моем поле, тотальная
                трансформация состояния
              </li>
              <li>отдельная программа для женщин и мужчин</li>
              <li>личные сессии, практики, разборы ежедневных ситуаций</li>
              <li>
                понятные и видимые изменения: спокойная нервная система и новое
                качество жизни
              </li>
            </ul>
            <div className="format-price">
              <strong>€1 600</strong>
              <span>или 160 000 ₽</span>
            </div>
            <div className="format-footer">
              <Link className="button button-primary" href="/mentoring">
                Посмотреть программу <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        </div>

        <div className="format-expansion" aria-label="Дополнительные форматы">
          {[
            [
              "03",
              "Персональная аудиопрактика",
              "Личная аудиозапись, которая помогает быстрее возвращаться в спокойствие перед важным разговором, событием или сложным днём.",
              "/services/personal-audio",
            ],
            [
              "04",
              "Executive Reset",
              "Приватный формат на месяц для предпринимателей и руководителей: чтобы не жить в постоянном напряжении, меньше срываться и снова находить время на себя и близких.",
              "/services/executive-reset",
            ],
          ].map(([number, title, text, href]) => (
            <Link className="format-mini reveal" data-reveal href={href} key={href}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <i aria-hidden="true">↗</i>
            </Link>
          ))}
        </div>
        <Link className="text-link formats-all-link" href="/services">
          Сравнить все форматы <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="statement" aria-label="Философия подхода">
        <div className="statement-inner shell reveal" data-reveal>
          <p>Вы не обязаны становиться кем-то другим.</p>
          <h2>
            Иногда важно понять,
            <span>почему вы живёте не так, как хотите.</span>
          </h2>
        </div>
      </section>

      <section className="cases section shell" id="cases" aria-labelledby="cases-title">
        <div className="cases-heading reveal" data-reveal>
          <div>
            <p className="kicker">Живые истории</p>
          <h2 id="cases-title">Что люди замечают после работы</h2>
          </div>
          <p>
            Это истории конкретных людей, а не обещание одинакового результата.
            Всё зависит от ситуации, участия и шагов после встречи.
          </p>
        </div>

        <div className="video-grid">
          <article className="video-card reveal" data-reveal>
            <div className="video-shell">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/media/review-maria-poster.webp"
                aria-label="Видео: история Марии"
              >
                <source src="/media/review-maria.mp4" type="video/mp4" />
              </video>
              <span className="video-label">Видео · клиентский опыт</span>
            </div>
            <div className="video-copy">
              <span>Мария</span>
              <h3>Из «понимаю, но не делаю» — к первому шагу</h3>
              <p>
                После работы Марии стало легче говорить о себе и делать первый
                шаг к людям, которым она может быть полезна.
              </p>
            </div>
          </article>

          <article className="video-card video-card-offset reveal" data-reveal>
            <div className="video-shell video-square">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/media/review-nadezhda-poster.webp"
                aria-label="Видео: история Надежды"
              >
                <source src="/media/review-nadezhda.mp4" type="video/mp4" />
              </video>
              <span className="video-label">Видео · клиентский опыт</span>
            </div>
            <div className="video-copy">
              <span>Надежда</span>
              <h3>Когда рассказывать о себе перестаёт быть неловко</h3>
              <p>
                После работы Надежде стало понятнее, кому написать, что снять и
                какой шаг сделать сегодня.
              </p>
            </div>
          </article>
        </div>

        <div className="mini-case-grid">
          {[
            [
              "Катерина, 31",
              "Бесконечные ссоры с мужем и год молчания со свекровью",
              "После работы конфликты утихли и теперь все решается адекватным диалогом, а со свекровью наладились отношения до теплых семейных.",
            ],
            [
              "Ангелина, 30",
              "Сильная тревога при общении без понятной причины",
              "Разобрались, откуда она идёт, - и общаться с другими стало спокойно.",
            ],
            [
              "Надежда, 33",
              "Мало сил и постоянное откладывание",
              "Появился понятный план и больше энергии, чтобы превратить идеи в реальные материалы.",
            ],
          ].map(([name, title, text]) => (
            <article className="mini-case reveal" data-reveal key={name}>
              <span>{name}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <Link className="text-link cases-link" href="/cases">
          Все кейсы и принципы работы <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="journal section" id="journal" aria-labelledby="journal-title">
        <div className="shell">
          <div className="journal-heading reveal" data-reveal>
            <div>
          <p className="kicker">OMNIA · материалы</p>
              <h2 id="journal-title">
                Мысли, подкасты
                <span>и короткие разборы</span>
              </h2>
            </div>
            <Link
              className="channel-link"
              href="/blog"
            >
              Все материалы <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="journal-grid">
            {[
              [
                "Подкаст · Деньги",
                "Почему так тяжело зарабатывать деньги",
                "Почему рост дохода может пугать: вместе с ним приходят ответственность, внимание и риск ошибиться.",
                "/journal/fear-and-income",
                "01",
              ],
              [
                "Разбор · привычные реакции",
                "Почему деньги утекают",
                "Почему после роста дохода могут появляться траты, которые возвращают вас к привычному уровню.",
                "/journal/money-leaks",
                "02",
              ],
              [
                "Подкаст · Выбор",
                "Сепарация от родителей",
                "Почему даже взрослому человеку бывает важно, одобрит ли его выбор семья.",
                "/journal/separation",
                "03",
              ],
            ].map(([tag, title, text, href, number]) => (
              <Link
                className="journal-card reveal"
                data-reveal
                href={href}
                key={href}
              >
                <span>{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <div>
                  <i>читать на сайте</i>
                  <b>{number}</b>
                </div>
              </Link>
            ))}
          </div>

          <div className="shorts-strip reveal" data-reveal>
            <div className="shorts-copy">
              <span>YouTube · короткие видео</span>
              <h3>О страхе масштаба, близости и состоянии гипноза</h3>
            </div>
            <div className="shorts-links">
              <Link href="/journal/fear-levels">
                Уровень страхов <span>▶</span>
              </Link>
              <Link href="/journal/closeness">
                Близость в паре <span>▶</span>
              </Link>
              <Link href="/journal/hypnosis-state">
                Что видят в гипнозе <span>▶</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="topic-hub section shell" aria-labelledby="topic-hub-title">
        <div className="topic-hub-heading reveal" data-reveal>
          <p className="kicker">Навигация по запросам</p>
          <h2 id="topic-hub-title">
            Найдите не диагноз,
            <span>а ситуацию, которую вы узнаёте</span>
          </h2>
          <p>
            Здесь простыми словами объясняем, что с вами может происходить и
            что в итоге может стать легче в обычной жизни.
          </p>
        </div>
        <div className="topic-hub-grid">
          {[
            [
              "01",
              "Гипнотерапия онлайн",
              "Как проходит сессия, сохраняете ли вы контроль и с какими ситуациями можно прийти онлайн.",
              "/hypnotherapy-online",
            ],
            [
              "02",
              "Деньги и привычки",
              "Почему сложно назвать цену, удержать доход или перестать тратить всё сразу — и как начать делать финансовые решения спокойнее.",
              "/money-scenarios",
            ],
            [
              "03",
              "Отношения",
              "Почему трудно сказать о своих чувствах, попросить о важном или жить по-своему — и как вернуть больше близости и спокойствия.",
              "/relationships",
            ],
            [
              "04",
              "Выгорание",
              "Почему отдых не помогает, всё раздражает и нет сил — и как снова почувствовать себя живым, а не только занятым.",
              "/burnout",
            ],
            [
              "05",
              "Программа для женщин",
              "Понять, чего хочется вам, научиться просить помощи и перестать жить только ради чужих ожиданий.",
              "/mentoring/women",
            ],
            [
              "06",
              "Программа для мужчин",
              "Меньше жить на нервах, не срываться дома и вернуть силы, близость и интерес к жизни вне работы.",
              "/mentoring/men",
            ],
          ].map(([number, title, text, href]) => (
            <Link className="topic-hub-card reveal" data-reveal href={href} key={href}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <i aria-hidden="true">↗</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="faq section shell" aria-labelledby="faq-title">
        <div className="faq-heading reveal" data-reveal>
          <p className="kicker">Перед первой встречей</p>
          <h2 id="faq-title">
            Часто задаваемые
            <span>вопросы</span>
          </h2>
        </div>
        <div className="faq-list">
          {faq.map((item, index) => (
            <details className="reveal" data-reveal key={item.question}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.question}</strong>
                <i aria-hidden="true">+</i>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <div className="final-portal" aria-hidden="true" />
        <div className="final-inner shell reveal" data-reveal>
          <p className="kicker">Начать с разговора</p>
          <h2 id="final-title">
            Начните с того,
            <span>что сейчас мешает вам жить легче.</span>
          </h2>
          <p>
            Напишите своими словами, что вас беспокоит. Ася поможет понять,
            подходит ли работа и какой формат выбрать.
          </p>
          <a
            className="button button-primary"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Познакомиться и обсудить запрос <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
