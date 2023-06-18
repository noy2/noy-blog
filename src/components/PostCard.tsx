import React, { useCallback } from "react";
import Tag from "./Tag";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  description: string | null;
  date: string;
  slug: string;
  tags?: string[];
  image?: string;
}

const PostCard = ({ title, description, date, slug, tags, image }: Props) => {
  const renderTag = useCallback(
    (tag: string) => <Tag key={`${slug}_${tag}`}>{tag}</Tag>,
    [slug]
  );

  return (
    <Link href={`/blog/${slug}`}>
      <div className="mb-8 flex flex-row place-content-between">
        <div>
          <h3 className="mb-1 text-xl md:text-2xl font-bold">{title}</h3>
          <p className="mb-1">{description}</p>
          <small className="text-sm text-gray-500">{date}</small>
          {tags && (
            <div className="mt-2 flex flex-row space-x-2">
              {tags.map(renderTag)}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
