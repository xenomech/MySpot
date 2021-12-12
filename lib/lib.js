import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";

const dataDirectory = path.join(process.cwd(), "data");

const getAllFiles = async (type) => {
  return fs.readdirSync(path.join(dataDirectory, type));
};

const getTitleFromFrontmatter = async (filesArray, type) => {
  //   const filesArray = await getAllFiles(type);
  const slug = filesArray.map((item) => item.replace(/\.mdx/, ""));
  const data = [];
  for (const i in slug) {
    const source = await getFileBySlug(type, slug[i]);
    data.push({ slug: slug[i], frontmatter: source.frontmatter });
  }
  return data;
};
async function getFileBySlug(type, slug) {
  const source = fs.readFileSync(
    path.join(dataDirectory, type, `${slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    scope: { ...data, date: data.date.toDateString() },
  });
  // The object passed along with the context is for mdx components
  return {
    mdxSource,
    frontmatter: {
      ...data,
      date: data.date.toDateString(),
      readingTime: readingTime(content),
      slug: slug || null,
    },
  };
}

module.exports = {
  getAllFiles,
  getFileBySlug,
  getTitleFromFrontmatter,
};
