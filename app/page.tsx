import ArticleList from "./components/ArticleList";
import TopTagsList from "./components/TopTagsList";
import { getArticles } from "./data";
import { GroupedTags } from "./types/types";
import { getTopTags } from "./utils/tags";

export default async function Home() {
  const articles = await getArticles();
  let topTags: GroupedTags[] = [];
  if (articles) topTags = getTopTags(articles);
  return (
    <main>
      <div className="lay-sidebar">
        <div className="sidebar__main">
          <div className="row">
            <div className="com-titleWithfollow hlp-marginBottom-15">
              <h1 className="com-title-section-xl hlp-marginBottom-40">
                Acumulado Grilla
              </h1>
            </div>
          </div>
          {articles && articles.length > 0 ? (
            <>
              <div className="row">
                <TopTagsList topTags={topTags} />
              </div>
              <ArticleList articles={articles} />
            </>
          ) : (
            <p>{"Sin resultados :("}</p>
          )}
        </div>
        <div className="sidebar__aside">
          <div className="banner --desktop --large"></div>
          <div className="com-ranking hlp-none hlp-tablet-none">
            <h2 className="com-title-section-m">Recetas más leídas</h2>
          </div>
          <div className="banner --desktop --large"></div>
        </div>
      </div>
    </main>
  );
}
