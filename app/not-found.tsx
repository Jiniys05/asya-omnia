import Link from "next/link";
import { Footer, InnerHeader } from "./site-components";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <InnerHeader />
      <section className="not-found-inner shell">
        <span>404</span>
        <p className="kicker">Такой страницы больше нет</p>
        <h1>
          Давайте вернёмся
          <em>на главную страницу.</em>
        </h1>
        <Link className="button button-primary" href="/">
          На главную <span aria-hidden="true">↗</span>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
