import { getAllFiles, getTitleFromFrontmatter } from "../../lib/lib";
import Card from "../../components/Card";
import Link from "next/link";
import { categories } from "../../data/store";

export default function Blog({ posts }) {
  return (
    <div className="h-4/6 py-10 mx-auto">
      <div className="w-full mx-auto">
        {categories.map((category) => {
          var key = 0;
          return (
            <details
              open
              className="open:bg-white py-4 m-2 lg:m-4 p-5 dark:open:bg-zinc-900 open:ring-1 open:ring-black/5 open:shadow-lg lg:p-10 rounded-xl transition-all ease-in-out duration-200"
            >
              <summary className="text-xl font-medium p-2 leading-6 select-none">
                {category.id}
              </summary>
              {posts.map((item) => {
                if (item.frontmatter.category === category.id) {
                  key += 1;
                  return (
                    <Link href={`/blog/${item.slug}`} key={key + 1}>
                      <a>
                        <Card frontMatter={item.frontmatter} index={key} />
                      </a>
                    </Link>
                  );
                }
              })}
            </details>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFiles("posts");
  console.log(posts);
  const data = await getTitleFromFrontmatter(posts, "posts");
  console.log(data);
  return {
    props: {
      posts: data,
    },
  };
}
