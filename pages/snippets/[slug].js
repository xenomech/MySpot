import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../../components/MDXComponents";
import { getAllFiles, getFileBySlug } from "../../lib/lib";
import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/components/prism-javascript";

const Snippets = ({ mdxSource, frontmatter }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
  return (
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
      <article className="min-w-full py-2 prose xl:prose-xl dark:prose-dark">
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </article>
    </div>
  );
};

export default Snippets;

export async function getStaticPaths() {
  const snippets = await getAllFiles("snippets");
  return {
    paths: snippets.map((item) => ({
      params: {
        slug: item.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const snippets = await getFileBySlug("snippets", params.slug);
  return { props: snippets };
}
