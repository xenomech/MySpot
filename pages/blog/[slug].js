import { MDXRemote } from "next-mdx-remote";
import Layout from "../../components/Layout";
import MDXComponents from "../../components/MDXComponents";
import { getAllFiles, getFileBySlug } from "../../lib/lib";

const Blog = ({ mdxSource, frontmatter }) => {
  return (
    <Layout>
      <div className="py-5 md:py-12">
        <div>
          <h1 className="font-bold py-2 my-2 text-3xl lg:text-4xl">
            {frontmatter.title}
          </h1>
          <h2 className="font-medium  py-2 my-2 text-xl">
            {frontmatter.date}
            {" • "}
            {frontmatter.readingTime.text}
          </h2>
        </div>
        <article className="min-w-full prose prose-xl dark:prose-dark">
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </article>
      </div>
    </Layout>
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
