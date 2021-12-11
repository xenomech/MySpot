import Container from "../components/Container";
import Card from "../components/Card";
import Link from "next/link";
import { getAllFiles, getTitleFromFrontmatter } from "../lib/lib";

export default function Home({ posts }) {
  return (
    <Container>
      <div className="py-10 px-2">
        <h1 className="py-1 font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          Gokul Suresh
        </h1>
        <h2 className="py-1 text-gray-700 dark:text-gray-200 mb-4 text-2xl">
          Product Developer @ SurveySparrow
        </h2>
        {/* add social icons */}
        <p className="py-1 text-xl text-gray-700 dark:text-gray-200">
          Hey! 👋
          <br />
          Welcome to my spot on the web. I build and occasionally design
          websites and apps.
        </p>
        <div>
          <h1 className="py-5 font-bold text-2xl md:text-3xl tracking-tight mb-1 text-black dark:text-white">
            Latest posts
          </h1>
          <div>
            {posts.map((item, index) => {
              return (
                <Link href={`/blog/${item.slug}`} key={index + 1}>
                  <a>
                    <Card frontMatter={item.frontmatter} index={index + 1} />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFiles("posts");
  // console.log(posts);
  const data = await getTitleFromFrontmatter(posts, "posts");
  data.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
  // console.log(data);
  return {
    props: {
      posts: data,
    },
  };
}
