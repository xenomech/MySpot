import Link from "next/link";
import { Card, FilterPills, Container } from "components";
import { allPosts } from ".contentlayer/generated";
import { returnSelectedFields } from "common";
import { categories } from "data/assets";
import { useState } from "react";
import { ArrowSVG } from "data/assets/assets";
export default function Blog({ posts }) {
  const [filter, setFilter] = useState("All");
  const meta = {
    title: "Blogs by Gokul Suresh",
  };
  return (
    <Container frontmatter={meta}>
      <div className="xl:py-36 h-[75vh]">
        <div className="p-1 xl:p-3 pt-5 pb-10 w-full">
          <div className=" md:flex flex-row justify-between items-center">
            <Link href="/">
              <div className="flex items-center justify-start py-5 cursor-pointer">
                <div className="p-1 rounded-full border-gray-600 border-2 mx-2">
                  <ArrowSVG style="w-6 h-6 rotate-180 text-600 dark:text-gray-200" />
                </div>
                <h1 className="text-xl pl-2 pr-4">Posts</h1>
                <p className="text-md p-1 px-3 text-white rounded-full bg-blue-500">
                  {posts.length}
                </p>
              </div>
            </Link>
            <div className="flex lg:justify-center items-center justify-start">
              {categories.map((item, index) => (
                <FilterPills
                  key={index + 1}
                  item={item}
                  filter={filter}
                  setFilter={setFilter}
                />
              ))}
            </div>
          </div>

          <div className="w-full">
            {posts
              .filter((item) => {
                if (item.category === filter) {
                  return item;
                } else if (filter === "All") {
                  return item;
                }
              })
              .map((item, index) => {
                return (
                  <Link href={`/blog/${item.slug}`} key={index + 1}>
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
  const postData = returnSelectedFields(allPosts);
  const posts = postData.sort((a, b) => new Date(b.date) - new Date(a.date));
  return {
    props: {
      posts: posts.filter((item) => !item.draft),
    },
  };
}
