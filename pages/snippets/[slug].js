import { allSnippets } from ".contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Container, MDXComponents, PageViews } from "components";
import { convertDateToString } from "common";
import { useEffect } from "react";
import Link from "node_modules/next/link";
import { ArrowSVG } from "data/assets/assets";

const Snippets = ({ snippet, slug }) => {
  const URL = `/api/pageViews/${slug}`;
  useEffect(() => {
    if (!sessionStorage.getItem(`page:[${snippet.title}]`)) {
      fetch(URL, {
        method: "POST",
      });
      sessionStorage.setItem(`page:[${snippet.title}]`, {
        visited: true,
      });
    }
  }, [slug]);
  const Component = useMDXComponent(snippet.body.code);
  return (
    <Container frontmatter={snippet}>
      <div className="px-5 md:p-5">
        <div className="pb-5">
          <Link href="/blog">
            <div className="cursor-pointer flex items-center gap-2 pb-6 hover:underline underline-offset-8 ease-in-out duration-75">
              <div className="p-1 rounded-full border-gray-600 border-2">
                <ArrowSVG style="w-8 h-8 rotate-180 text-gray-200" />
              </div>
            </div>
          </Link>
          <h1 className="font-semibold py-2 my-2 text-3xl sm:text-4xl">
            {snippet.title}
          </h1>
          <div className="xl:flex items-center justify-between">
            <h2 className="font-medium text-gray-600 dark:text-gray-300 py-2 text-lg">
              {snippet.date}
              {" • "}
              {snippet.readingTime.text}
            </h2>
            <PageViews slug={slug}>
              <p className="font-medium text-gray-600 dark:text-gray-300">
                Views
              </p>
            </PageViews>
          </div>
        </div>
        <article className="min-w-full py-2 prose xl:prose-xl dark:prose-dark">
          <Component components={MDXComponents} />
        </article>
        <div className="flex justify-center items-center">
          <a href="#top">Back to top</a>
        </div>
      </div>
    </Container>
  );
};

export default Snippets;

export async function getStaticPaths() {
  const paths = allSnippets.map((_) => "/snippets/" + _.slug);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = allSnippets.find((_) => _.slug === params.slug);
  const snippet = { ...data, date: convertDateToString(data.date) };
  return {
    props: {
      snippet,
      slug: params.slug,
    },
  };
}
