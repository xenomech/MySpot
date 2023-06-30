import { Container, Card } from "components";
import { allPosts, allSnippets } from ".contentlayer/generated";
import { publications } from "data/assets";
import { returnSelectedFields } from "common";
import Link from "next/link";
import styles from "../styles/extra.module.css";

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
              Software Engineer
            </h2>
            <div className="md:p-1 text-xl text-gray-700 dark:text-gray-200">
              <p className="text-xl">
                Hey ! <span className={styles.wavingHand}>👋</span>
              </p>
              <p>
                Welcome to my spot on the web. I am a software engineer who
                builds and occasionally design websites and apps. I started this
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
                  <Card frontMatter={item} index={index + 1} />
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
                  <Card frontMatter={item} index={index + 1} />
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
                        <p className="break-words font-normal text-lg">
                          {item.title}
                        </p>
                      </Link>
                      <br />
                      <Link href={item.publishedIn.publisherBaseUrl}>
                        <p
                          className="break-words font-medium text-gray-400"
                          target="_blank"
                        >
                          {item.publishedIn.publisherLabel}
                        </p>
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
  const postData = returnSelectedFields(allPosts);
  const snippetsData = returnSelectedFields(allSnippets);
  postData.sort((a, b) => new Date(b.date) - new Date(a.date));
  snippetsData.sort((a, b) => new Date(b.date) - new Date(a.date));
  return {
    props: {
      posts: postData.filter((item) => !item.draft),
      snippets: snippetsData.filter((item) => !item.draft),
    },
  };
}
