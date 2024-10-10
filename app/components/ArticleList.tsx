import Link from "next/link";
import { Article } from "../types/types";
import { formatDate } from "../utils/date";

type ArticleListProps = {
  articles: Article[];
};

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <>
      <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
        {articles.map((article: Article) => (
          <article
            key={article._id}
            className="mod-caja-nota living w-100-mobile"
          >
            <section id="" className="cont-figure">
              <Link href="" className="figure">
                <picture id="" className="content-pic picture">
                  <img
                    src={article.promo_items?.basic.url}
                    alt={article.promo_items?.basic.subtitle}
                    className="content-img"
                  />
                </picture>
              </Link>
            </section>
            <div className="mod-caja-nota__descrip lugares">
              <h2 className="com-title-acu">
                <Link href="">{article.headlines.basic}</Link>
              </h2>
              <h4 className="com-date">{formatDate(article.display_date)}</h4>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
