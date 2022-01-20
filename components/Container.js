import Head from "next/head";

export default function Container({ children, frontmatter }) {
  const meta = {
    title: "Gokul Suresh - Software Developer ",
    description: "All my scribbles are available here",
    type: "website",
    ...frontmatter,
  };
  return (
    <div className="sm:mx-auto">
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Gokul Suresh" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      {children}
    </div>
  );
}
