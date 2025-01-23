
const BlogPostDetails = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);


  const post = await res.json();

  return (
    <div className="flex justify-center md:mt-20   items-center md:w-1/2 mx-auto  ">
    <div className="md:h-80 bg-gray-100 shadow-lg mx-4 md:mx-0 rounded-lg md:p-6 p-3 text-center items-center flex flex-col justify-center ">
      <h1 className="md:text-2xl font-bold mb-4 text-gray-800">{post.title}</h1>
      <p className="text-gray-700 text-xs md:text-base leading-relaxed">{post.body}</p>
    </div>
  </div>
  );
};

export default BlogPostDetails;
