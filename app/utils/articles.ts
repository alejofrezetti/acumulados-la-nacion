import { Article } from "../types/types";

export const getFilteredArticles = (articles: Article[]): Article[] => {
  //Get "subtype":"7" articles
    return articles.filter((article) => article.subtype === "7");
}