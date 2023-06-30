import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";

const computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  headings: {
    type: "json",
    resolve: (doc) => {
      const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
      const slugger = new GithubSlugger();

      const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
        ({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            level:
              flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          };
        }
      );
      return headings;
    },
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    date: { type: "date", required: true },
    excerpt: { type: "string", required: true },
    category: { type: "string", required: true },
    draft: { type: "boolean", required: true },
  },
  computedFields,
}));
export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `snippets/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    date: { type: "date", required: true },
    excerpt: { type: "string", required: true },
    category: { type: "string", required: true },
    draft: { type: "boolean", required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Post, Snippet],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
