import Link from "next/link";
import { GroupedTags } from "../types/types";

type TopTagsListProps = {
  topTags: GroupedTags[];
};

export default function TopTagsList({ topTags }: TopTagsListProps) {
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
