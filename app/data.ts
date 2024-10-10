import { Article } from "./types/types";
import { getFilteredArticles } from "./utils/articles";

export async function getArticles(): Promise<Article[] | null> {
  try {
    const response = await fetch(
        "https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws"
      );
    const data = await response.json();
    const filteredArticles = getFilteredArticles(data.articles);
    return filteredArticles;
  } catch (error) {
    //enviar error a un servicio de monitoreo
    console.error('Error fetching articles: ', error);
    return null;
  }
}