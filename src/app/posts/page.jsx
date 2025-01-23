import Link from "next/link";

const BlogPosts = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul className="list-disc pl-5">
        {posts?.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;