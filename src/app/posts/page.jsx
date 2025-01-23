import Link from "next/link";

const BlogPosts = ({ posts }) => {
  return (
    <div>
      <h1 className="md:text-4xl font-bold mb-5">My Blog Posts</h1>
      <ul className="list-disc pl-5">
        {posts?.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <p className="hover:underline">{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;