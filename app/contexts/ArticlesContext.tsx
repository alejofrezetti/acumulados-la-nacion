"use client";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { Article, GroupedTags } from "../types/types";
import { getTopTags } from "../utils/tags";
import { getFilteredArticles } from "../utils/articles";

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
      const response = await fetch(
        "https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/"
      );
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    console.log("articles", articles);
  }, [articles]);

  useEffect(() => {
    console.log("topTags", topTags);
  }, [topTags]);

  useEffect(() => {
    console.log("filteredArticles", filteredArticles);
  }, [filteredArticles]);

  return (
    <ArticlesContext.Provider
      value={{ articles, setArticles, topTags, filteredArticles }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
