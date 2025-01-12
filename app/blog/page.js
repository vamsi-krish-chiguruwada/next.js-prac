import Link from "next/link";

const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
      <p>
        <Link href="/blog/post1">post 1</Link>
      </p>
      <p>
        <Link href="/blog/post2">post 2</Link>
      </p>
    </>
  );
};
export default Blog;
