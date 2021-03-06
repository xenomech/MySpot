import Container from "../components/Container";
import Card from "../components/Card";
import Link from "next/link";
import { getAllFiles, getTitleFromFrontmatter } from "../lib/lib";
import styles from "../styles/extra.module.css";
import { publications } from "../data/store";

export default function Home({ posts, snippets }) {
  return (
    <Container>
      <div className="my-5 sm:py-10 p-2">
        <div className="w-full">
          <div>
            <h1 className="py-1 font-bold text-4xl tracking-tight mb-1 text-black dark:text-white">
              Gokul Suresh
            </h1>
            <h2 className="py-1 sm:px-1 text-gray-700 dark:text-gray-200 mb-4 text-2xl">
              Product Developer @
              <a
                className="text-green-600 mx-2"
                href="https://surveysparrow.com/"
                target="_blank"
              >
                SurveySparrow
              </a>
            </h2>
            <div className="md:p-1 text-xl text-gray-700 dark:text-gray-200">
              <p className="text-xl">
                Hey ! <span className={styles.wavingHand}>👋</span>
              </p>
              <p>
                Welcome to my spot on the web. I am an aspiring developer. I
                build and occasionally design websites and apps. I started this
                blog to keep track of the things I do! Glad you are here!
              </p>
            </div>
          </div>
        </div>
        <div className="my-3 sm:my-6">
          <h1 className="py-5 text-xl tracking-tight mb-1 text-black dark:text-white">
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
        <div className="my-3 sm:my-6">
          <h1 className="py-5  text-xl tracking-tight mb-1 text-black dark:text-white">
            Snippets
          </h1>
          <div>
            {snippets.slice(0, 4).map((item, index) => {
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
        <div className="my-3 sm:my-6">
          <h1 className="py-5 text-xl tracking-tight mb-1 text-black dark:text-white">
            Publications
          </h1>
          <div className="">
            {publications.map((item, index) => {
              return (
                <div key={index + 1}>
                  <div className="flex transition-all ease-in-out duration-400 hover:translate-x-3 justify-start items-center w-full py-2">
                    <div className="px-5">
                      <Link href={item.url}>
                        <a
                          className="break-words font-normal text-lg"
                          target="_blank"
                        >
                          {item.title}
                        </a>
                      </Link>
                      <br />
                      <Link href={item.publishedIn.publisherBaseUrl}>
                        <a
                          className="break-words font-medium text-gray-400"
                          target="_blank"
                        >
                          {item.publishedIn.publisherLabel}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
  return {
    props: {
      posts: postData,
      snippets: snippetsData,
    },
  };
}
