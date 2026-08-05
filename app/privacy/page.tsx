import type { Metadata } from "next";
import { Footer, InnerHeader } from "../site-components";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Информация об обработке данных на сайте Аси Омниа и при обращении через Telegram.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <InnerHeader />
      <article className="legal-content shell">
        <p className="kicker">Юридическая информация</p>
        <h1>Политика конфиденциальности</h1>
        <p>
          Сайт не содержит формы регистрации и не запрашивает платёжные данные.
          Переход к записи происходит через внешний сервис Telegram.
        </p>
        <h2>Какие данные могут обрабатываться</h2>
        <p>
          При обращении вы самостоятельно передаёте имя, контакт и информацию о
          запросе. Не отправляйте медицинские документы, платёжные реквизиты или
          иные чувствительные данные без предварительной договорённости.
        </p>
        <h2>Для чего используются данные</h2>
        <p>
          Только для ответа на обращение, определения подходящего формата,
          организации встреч и сопровождения уже согласованной работы.
        </p>
        <h2>Сторонние сервисы</h2>
        <p>
          Telegram и YouTube обрабатывают данные по собственным правилам.
          Переходя по внешней ссылке, пользователь взаимодействует с выбранной
          платформой напрямую.
        </p>
        <h2>Связь</h2>
        <p>
          По вопросам обработки данных напишите Асе Омниа в личный Telegram:{" "}
          <a href="https://t.me/anomnia" target="_blank" rel="noreferrer">
            @anomnia
          </a>
          .
        </p>
        <p className="legal-updated">Актуально с 30 июля 2026 года.</p>
      </article>
      <Footer />
    </main>
  );
}
