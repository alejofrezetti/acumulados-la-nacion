import { Article, GroupedTags } from "../types/types";

export function getTopTags(articles: Article[]): GroupedTags[] {
    // Group tags by slug
    const groupedTags: GroupedTags[] = [];
    articles.forEach((article: Article) => {
      article.taxonomy.tags.forEach((tag) => {
        const existingTag = groupedTags.find(
          (groupedTag) => groupedTag.slug === tag.slug
        );
        if (existingTag) {
          existingTag.count++;
        } else {
          groupedTags.push({
            slug: tag.slug,
            text: tag.text,
            count: 1,
          });
        }
      });
    });
    // Sort tags by count
    const sortedTags = groupedTags.sort((a, b) => b.count - a.count);
    // Get top 10 tags
    return sortedTags.slice(0, 10);
  }