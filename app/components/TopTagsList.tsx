"use client";
import { useContext } from "react";
import { ArticlesContext } from "../contexts/ArticlesContext";
import Link from "next/link";

export default function TopTagsList() {
  const { topTags } = useContext(ArticlesContext);

  return (
    <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
      {topTags.map((tag) => (
        <Link href={`/tema/${tag.slug}`} key={tag.slug}>
          {tag.text}
        </Link>
      ))}
    </div>
  );
}
