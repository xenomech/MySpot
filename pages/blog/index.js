import { getAllFiles, getTitleFromFrontmatter } from "../../lib/lib";
import Card from "../../components/Card";
import Link from "next/link";
import { categories } from "../../data/store";

export default function Blog({ posts }) {
  return (
    <div className="p-3 pt-5 pb-10 mx-auto">
      <div className="flex items-center justify-start p-5">
        <h1 className="text-xl px-2">All Posts</h1>
        <p className="text-md p-1 px-3 text-white rounded-full bg-blue-500">
          {posts.length}
        </p>
      </div>
      <div className="w-full mx-auto">
        {categories.map((category) => {
          var key = 0;
          return (
            <details
              key={key}
              open
              className="open:bg-white py-4 sm:m-4 p-5 dark:open:bg-zinc-900 open:ring-1 open:ring-black/5 open:shadow-lg sm:p-10 rounded-xl transition-all ease-in-out duration-200"
            >
              <summary className="text-xl p-2 leading-6 select-none">
                {category.id}
              </summary>
              {posts.map((item) => {
                if (item.frontmatter.category === category.id) {
                  key += 1;
                  return (
                    <Link href={`/blog/${item.slug}`} key={key + 1}>
                      <a className="my-2">
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

  const data = await getTitleFromFrontmatter(posts, "posts");
  return {
    props: {
      posts: data,
    },
  };
}
