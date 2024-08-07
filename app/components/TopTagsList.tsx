"use client";
import { useContext } from "react";
import { ArticlesContext } from "../contexts/ArticlesContext";

export default function TopTagsList() {
  const { topTags } = useContext(ArticlesContext);

  return (
    <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
      {topTags.map((tag) => (
        <a href={`/tags/${tag.slug}`} key={tag.slug}>
          {tag.text}
        </a>
      ))}
    </div>
  );
}
