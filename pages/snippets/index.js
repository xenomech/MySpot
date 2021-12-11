import { getAllFiles, getTitleFromFrontmatter } from "../../lib/lib";
import Card from "../../components/Card";
import Link from "next/link";

export default function Snippets({ snippets }) {
  return (
    <div className="py-3 sm:py-10 mx-auto h-96">
      <div className="flex items-center justify-start p-5">
        <h1 className="text-2xl px-2">Snippets </h1>
        <div className="relative w-7 h-7 dark:bg-blue-500 bg-blue-400 text-white dark:text-gray-800 rounded-full ">
          <p className="text-lg absolute top-0 left-2">{snippets.length}</p>
        </div>
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
  //   console.log(posts);
  const data = await getTitleFromFrontmatter(snippets, "snippets");
  //   console.log(data);
  return {
    props: {
      snippets: data,
    },
  };
}
