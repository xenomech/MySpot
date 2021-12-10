import { MDXRemote } from "next-mdx-remote";
// import Layout from "../../components/layout";
import { getAllFiles, getFileBySlug } from "../../lib/lib";

const Blog = ({ mdxSource, frontmatter }) => {
  return (
    // <Layout>
    <div>
      <div>
        <h1 className="font-bold p-2 m-2 text-3xl">{frontmatter.title}</h1>
        <h2 className="font-semibold p-2 m-2 text-xl">
          {frontmatter.date}
          {" • "}
          Gokul
          {" • "}
          {frontmatter.readingTime.text}
        </h2>
      </div>
      <article className=" prose dark:prose-dark p-3 m-3">
        <MDXRemote {...mdxSource} />
      </article>
    </div>
  );
};

export default Blog;

export async function getStaticPaths() {
  const posts = await getAllFiles("posts");
  // console.log(posts)
  return {
    paths: posts.map((item) => ({
      params: {
        slug: item.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("posts", params.slug);
  //   console.log(post);
  return { props: post };
}
