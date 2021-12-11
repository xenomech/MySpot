import Container from "../components/Container";
import Card from "../components/Card";
import Link from "next/link";
import { getAllFiles, getTitleFromFrontmatter } from "../lib/lib";
import styles from "../styles/extra.module.css";

export default function Home({ posts, snippets }) {
  return (
    <Container>
      <div className="my-5 lg:py-10">
        <h1 className="py-1 font-bold text-3xl lg:text-5xl tracking-tight mb-1 text-black dark:text-white">
          Gokul Suresh
        </h1>
        <h2 className="py-1 lg:px-1 text-gray-700 dark:text-gray-200 mb-4 text-2xl">
          Product Developer @ SurveySparrow
        </h2>
        {/* add social icons */}
        <div className="p-1 text-xl text-gray-700 dark:text-gray-200">
          <p className="text-2xl">
            Hey ! <span className={styles.wavingHand}>👋</span>
          </p>
          <p>
            Welcome to my spot on the web. I build and occasionally design
            websites and apps.
          </p>
        </div>
        <div className="my-5 lg:my-10">
          <h1 className="py-5 font-semibold text-2xl tracking-tight mb-1 text-black dark:text-white">
            Latest posts
          </h1>
          <div>
            {posts.slice(0, 4).map((item, index) => {
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
        <div className="my-10">
          <h1 className="py-5 font-semibold text-2xl tracking-tight mb-1 text-black dark:text-white">
            Snippets
          </h1>
          <div>
            {snippets.slice(0, 4).map((item, index) => {
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
  const postData = await getTitleFromFrontmatter(posts, "posts");
  const snippets = await getAllFiles("snippets");
  const snippetsData = await getTitleFromFrontmatter(snippets, "snippets");
  postData.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
  snippetsData.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
  // console.log(data);
  return {
    props: {
      posts: postData,
      snippets: snippetsData,
    },
  };
}
