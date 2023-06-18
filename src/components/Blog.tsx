import { allPosts } from "../../.contentlayer/generated";
import PostCard from "@/components/PostCard";

const Blog = () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  console.log(allPosts);
  return (
    <div>
      {posts.map((post) => {
        return (
          <PostCard
            key={post._id}
            title={post.title}
            date={post.date}
            description={post.description}
            slug={post.slug}
            tags={post.tags}
          />
        );
      })}
    </div>
  );
};

export default Blog;
