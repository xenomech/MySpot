import React from "react"
import { graphql } from "gatsby"
import { Seo, Container, Content, Pagination, Card } from "../components"
// import { H1, P } from "../styles"
export const PageQuery = graphql`
  query AllPostQuery($skip: Int!, $limit: Int!) {
    allMdx(
      skip: $skip
      limit: $limit
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            excerpt
            langtabs
            draft
          }
        }
      }
    }
  }
`

const allPost = ({ pageContext, data }) => {
  const { currentpage, numPages } = pageContext

  const isFirst = currentpage === 1
  const isLast = numPages === currentpage
  const prevPage = currentpage - 1 === 1 ? "/blog/" : `/blog/${currentpage - 1}`
  const nextPage = `/blog/${currentpage + 1}`

  const posts = data.allMdx.edges
  console.log(posts)
  return (
    <Container>
      <Seo />
      <Content>
        {posts.map(post => {
          if (post.node.frontmatter.draft === false) {
            return (
              <Card
                key={`/blog/${post.node.frontmatter.slug}`}
                date={post.node.frontmatter.date}
                title={post.node.frontmatter.title}
                excerpt={post.node.frontmatter.excerpt}
                slug={`/blog/${post.node.frontmatter.slug}`}
                langtabs={post.node.frontmatter.langtabs}
              />
            )
          } else {
            return null
          }
        })}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Container>
  )
}
export default allPost
