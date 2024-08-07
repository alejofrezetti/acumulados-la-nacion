import ArticleList from "./components/ArticleList";
import TopTagsList from "./components/TopTagsList";

export default function Home() {
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
          <div className="row">
            <TopTagsList />
          </div>
          <ArticleList />
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
