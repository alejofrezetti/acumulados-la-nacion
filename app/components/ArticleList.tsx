"use client";
import { useContext, useState } from "react";
import { ArticlesContext } from "../contexts/ArticlesContext";
import { Article } from "../types/types";
import { formatDate } from "../utils/date";

export default function ArticleList() {
  const { filteredArticles } = useContext(ArticlesContext);
  const [visibleArticles, setVisibleArticles] = useState(10);

  const handleShowMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 10);
  };

  return (
    <>
      <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
        {filteredArticles.slice(0, visibleArticles).map((article: Article) => (
          <article
            key={article._id}
            className="mod-caja-nota living w-100-mobile"
          >
            <section id="" className="cont-figure">
              <a href="" className="figure">
                <picture id="" className="content-pic picture">
                  <img
                    src={article.promo_items?.basic.url}
                    alt={article.promo_items?.basic.subtitle}
                    className="content-img"
                  />
                </picture>
              </a>
            </section>
            <div className="mod-caja-nota__descrip lugares">
              <h2 className="com-title-acu">
                <a href="">{article.headlines.basic}</a>
              </h2>
              <h4 className="com-date">{formatDate(article.display_date)}</h4>
            </div>
          </article>
        ))}
      </section>
      {visibleArticles < filteredArticles.length && (
        <section className="row">
          <div className="col-12 hlp-text-center hlp-margintop-40">
            <button
              className="--btn --secondary"
              onClick={() => handleShowMore()}
            >
              MÁS NOTAS DE ACUMULADO GRILLA
            </button>
          </div>
        </section>
      )}
    </>
  );
}
