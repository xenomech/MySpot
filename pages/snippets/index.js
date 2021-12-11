import { getAllFiles, getTitleFromFrontmatter } from "../../lib/lib";
import Card from "../../components/Card";
import Link from "next/link";

export default function Snippets({ snippets }) {
  return (
    <div className="py-3 lg:py-10 mx-auto">
      <h1 className="text-3xl p-5">Snippets</h1>
      <div className="w-full mx-auto">
        {snippets.map((item, index) => {
          return (
            <Link href={`/snippets/${item.slug}`} key={index + 1}>
              <a>
                <Card frontMatter={item.frontmatter} index={index + 1} />
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFiles("snippets");
  //   console.log(posts);
  const data = await getTitleFromFrontmatter(snippets, "snippets");
  //   console.log(data);
  return {
    props: {
      snippets: data,
    },
  };
}
