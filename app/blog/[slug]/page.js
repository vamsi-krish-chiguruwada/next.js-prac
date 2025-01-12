const BlogPosts = ({ params }) => {
  console.log(params.slug);
  return (
    <div>
      <h1>Blog Posts {params.slug}</h1>
    </div>
  );
};
export default BlogPosts;
