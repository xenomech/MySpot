import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const Seo = ({ description, keywords, title, author }) => {
  return (
    <StaticQuery
      query={querydetails}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaAuthor = author || data.site.siteMetadata.author
        const metaKeywords = keywords || [
          "developer blog",
          "mdx blog",
          "gatsby blog",
        ]
        return (
          <>
            <Helmet
              title={title}
              meta={[
                { name: `description`, content: metaDescription },
                { property: `og:title`, content: metaTitle },
                { property: `og:description`, content: metaDescription },
                { property: `og:type`, content: "website" },
                { property: `og:author`, content: metaAuthor },
              ].concat(
                metaKeywords && metaKeywords.leght > 0
                  ? {
                      name: `keywords`,
                      content: metaKeywords.join(`, `),
                    }
                  : []
              )}
            >
              <html lang="en" />
              <title>{metaTitle}</title>
              <meta name={metaDescription} />
            </Helmet>
          </>
        )
      }}
    />
  )
}
const querydetails = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
