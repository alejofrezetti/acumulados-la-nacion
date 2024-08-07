"use client";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { Article, GroupedTags } from "../types/types";
import { getTopTags } from "../utils/tags";
import { getFilteredArticles } from "../utils/articles";
import { getArticles } from "../actions";

type ArticlesContextType = {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
  topTags: GroupedTags[];
  filteredArticles: Article[];
};

export const ArticlesContext = createContext<ArticlesContextType>({
  articles: [],
  setArticles: () => undefined,
  topTags: [],
  filteredArticles: [],
});

const ArticlesProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const topTags: GroupedTags[] = useMemo(
    () => getTopTags(articles),
    [articles]
  );
  const filteredArticles: Article[] = useMemo(
    () => getFilteredArticles(articles),
    [articles]
  );

  const fetchArticles = async () => {
    try {
      const articles = await getArticles();
      setArticles(articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <ArticlesContext.Provider
      value={{ articles, setArticles, topTags, filteredArticles }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
