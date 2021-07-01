module.exports = {
  siteMetadata: {
    title: "xenomech",
    description: "All my scribbles are available here",
    // url: "",
    twitterUsername: "xen40k",
    author: "Gokul Suresh",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "xenomech's blog",
        description: "All my scribbles are available here",
        lang: `en`,
        display: `standalone`,
        icon: "src/images/gatsby-icon.svg",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extentions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `Open Sans`,`JetBrains Mono`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      fallback: { "path": false },
      options: {
        color: "linear-gradient(to right, #00c6ff, #0072ff)",
        height: "2px",
        paths: ["/", "/blog/**"],
        zIndex: `9999`,
      },
    },
  ],
}
