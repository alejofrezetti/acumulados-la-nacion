import Link from "next/link";
import { Article } from "../types/types";
import { formatDate } from "../utils/date";
import ImageNotAvailable from "@/public/not_available.webp";
import Image from "next/image";

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
                  <Image
                    width={384}
                    height={256}
                    src={article.promo_items?.basic.url ?? ImageNotAvailable}
                    alt={
                      article.promo_items?.basic.subtitle ??
                      "Image not available"
                    }
                    className="content-img"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
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
