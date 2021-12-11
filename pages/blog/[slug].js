import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../../components/MDXComponents";
import { getAllFiles, getFileBySlug } from "../../lib/lib";

const Blog = ({ mdxSource, frontmatter }) => {
  return (
    <div className="py-5 sm:py-12">
      <div>
        <h1 className="font-bold py-2 my-2 text-3xl sm:text-4xl">
          {frontmatter.title}
        </h1>
        <h2 className="font-medium text-gray-600 dark:text-gray-300 py-2 my-2 text-xl">
          {frontmatter.date}
          {" • "}
          {frontmatter.readingTime.text}
        </h2>
      </div>
      <article className="min-w-full prose prose-xl dark:prose-dark">
        <MDXRemote {...mdxSource} components={MDXComponents} />
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
