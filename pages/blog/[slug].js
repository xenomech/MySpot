import { MDXRemote } from "next-mdx-remote";
import Container from "../../components/Container";
import MDXComponents from "../../components/MDXComponents";
import { getAllFiles, getFileBySlug } from "../../lib/lib";

const Blog = ({ mdxSource, frontmatter }) => {
  return (
    <Container frontmatter={frontmatter}>
      <div className="px-5 md:p-5">
        <div className="pb-5">
          <h1 className="font-semibold py-2 my-2 text-2xl sm:text-4xl">
            {frontmatter.title}
          </h1>
          <h2 className="font-medium text-gray-600 dark:text-gray-300 py-2 text-lg">
            {frontmatter.date}
            {" • "}
            {frontmatter.readingTime.text}
          </h2>
        </div>
        <article className="min-w-full py-2 prose prose-xl dark:prose-dark">
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </article>
      </div>
    </Container>
  );
};

export default Blog;

export async function getStaticPaths() {
  const posts = await getAllFiles("posts");
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
  return { props: post };
}
