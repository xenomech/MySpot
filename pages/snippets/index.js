import { getAllFiles, getTitleFromFrontmatter } from "../../lib/lib";
import Card from "../../components/Card";
import Link from "next/link";

export default function Snippets({ snippets }) {
  return (
    <div className="p-3 pt-5 pb-10 mx-auto h-96">
      <div className="flex items-center justify-start p-5">
        <h1 className="text-xl px-2">Snippets</h1>
        <p className="text-md p-1 px-3 rounded-full bg-red-500">
          {snippets.length}
        </p>
      </div>

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
  const data = await getTitleFromFrontmatter(snippets, "snippets");
  return {
    props: {
      snippets: data,
    },
  };
}
