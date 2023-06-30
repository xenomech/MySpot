import Head from "next/head";

/**
 * 
 *@description Container wrapping all the content with react head for SEO
 *@param {object} {children}
 *@param {object} {frontmatter}
 */

export default function Container({ children, frontmatter }) {
  const meta = {
    title: "Gokul Suresh - Software Developer ",
    name: "Gokul Suresh",
    description: "All my scribbles are available here",
    type: "website",
    image: "https://gokuls.dev/static/images/PreviewImage.png",
    twitterHandle: "@justgokulsuresh",
    ...frontmatter,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:author" content={meta.twitterHandle} />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      {children}
    </div>
  );
}
