import Link from "next/link";

const BlogPosts = ({ posts }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
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