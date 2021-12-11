import { MDXRemote } from "next-mdx-remote";
// import Layout from "../../components/layout";
import { getAllFiles, getFileBySlug } from "../../lib/lib";

const Snippets = ({ mdxSource, frontmatter }) => {
  return (
    <div className="py-12">
      <h1 className="font-bold py-2 my-2 text-3xl">{frontmatter.title}</h1>
      <h2 className="font-medium italic py-2 my-2 text-xl">
        {frontmatter.date}
        {" • "}
        {frontmatter.readingTime.text}
      </h2>

      <article className="min-w-full prose prose-xl dark:prose-dark">
        <MDXRemote {...mdxSource} />
      </article>
    </div>
  );
};

export default Snippets;

export async function getStaticPaths() {
  const snippets = await getAllFiles("snippets");
  // console.log(posts)
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
  //   console.log(post);
  return { props: snippets };
}
