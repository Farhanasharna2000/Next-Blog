
const BlogPostDetails = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);


  const post = await res.json();

  return (
    <div className="flex justify-center mt-20  items-center w-1/2 mx-auto  ">
    <div className="h-80 bg-gray-100 shadow-lg rounded-lg p-6 text-center items-center flex flex-col justify-center ">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.body}</p>
    </div>
  </div>
  );
};

export default BlogPostDetails;
