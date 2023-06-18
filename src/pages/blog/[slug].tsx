import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "../../../.contentlayer/generated";
import Layout from "./layout";
import { useCallback } from "react";
import Tag from "@/components/Tag";
import Link from "next/link";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  const renderTag = useCallback(
    (tag: string) => <Tag key={`${post.slug}_${tag}`}>{tag}</Tag>,
    [post.slug]
  );
  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };
  return (
    <Layout Meta={customMeta}>
      <div className="mx-auto mb-12 px-6 container">
        <Link href="/">Click</Link>
        <div className="mx-auto w-full max-w-screen-sm">
          <h1 className="mb-2 md:mb-4 text-2xl md:text-4xl leading-normal font-extrabold">
            {post.title}
          </h1>
          <p className="mb-1 md:mb-2 text-xl md:text-2xl leading-normal text-gray-600">
            {post.description}
          </p>
          <small className="text-sm md:text-base text-gray-500">
            {post.date}
          </small>
          {post.tags && (
            <div className="mt-4 mb-6 flex flex-row space-x-2">
              {post.tags.map(renderTag)}
            </div>
          )}
        </div>
      </div>
      <div className="mx-auto mb-12 px-6 container">
        <div className="mx-auto w-full max-w-screen-sm prose md:prose-lg">
          <MDXComponent />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post: any = allPosts.find((p) => p.slug === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;
