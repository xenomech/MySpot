import { Card, Container } from "components";
import Link from "next/link";
import { allSnippets } from ".contentlayer/generated";
import { ArrowSVG } from "data/assets/assets";

export default function Snippets({ snippets }) {
  const meta = {
    title: "Snippets by Gokul Suresh",
  };
  return (
    <Container frontmatter={meta}>
      <div className="xl:py-36 h-[75vh]">
        <div className="p-1 xl:p-3 pt-5 pb-10">
          <Link href="/">
            <div className="flex items-center justify-start py-5 cursor-pointer">
              <ArrowSVG style="w-6 h-6 rotate-180 mx-2 text-gray-200" />
              <h1 className="text-xl px-2">Snippets</h1>
              <p className="text-md p-1 px-3 text-white rounded-full bg-red-500">
                {snippets.length}
              </p>
            </div>
          </Link>
          <div className="w-full">
            {snippets.map((item, index) => {
              return (
                <Link href={`/snippets/${item.slug}`} key={index + 1}>
                  <Card frontMatter={item} index={index + 1} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const data = allSnippets.sort((a, b) => new Date(b.date) - new Date(a.date));
  return {
    props: {
      snippets: data.filter((item) => !item.draft),
    },
  };
}
