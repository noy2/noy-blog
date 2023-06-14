import React, { useCallback } from "react";
import Tag from "./Tag";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  description: string | null;
  date: string;
  tags: string[];
  link: string;
  // thumbnail:
}

const PostCard = ({ title, description, date, link, tags }: Props) => {
  const renderTag = useCallback(
    (tag: string) => <Tag key={`${link}_${tag}`}>{tag}</Tag>,
    [link]
  );

  return (
    <Link href={link ?? "/"}>
      <h3 className="mb-2 text-xl md:text-2xl font-bold">{title}</h3>
      <p className="mb-2">{description}</p>
      {tags && (
        <div className="mt-4 mb-2 flex flex-row space-x-2">
          {tags.map(renderTag)}
        </div>
      )}
      <small className="text-sm text-gray-500">{date}</small>
    </Link>
  );
};

export default PostCard;
