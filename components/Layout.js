import Head from "next/head";

export default function Layout(props) {
  const { children, ...customMeta } = props;
  const meta = {
    title: "xenomech - Software Developer, Writter ",
    description: "All my scribbles are available here",
    type: "website",
    ...customMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="xenomech" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="md:w-6/12 sm:mx-auto min-h-screen p-4">{children}</div>
    </>
  );
}
