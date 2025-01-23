import BlogPosts from "./posts/page";

 const Home=async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  
  return (
    <div>
      <BlogPosts posts={posts}></BlogPosts>
    
    </div>
  );
}
export default Home;