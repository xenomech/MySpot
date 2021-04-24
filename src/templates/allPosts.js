import React from "react"
import { graphql } from "gatsby"
import { Container, Content, Pagination,Card } from "../components"
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
      {/* <div style={{ minWidth: "70%" }}> */}
        <Content>
          {posts.map(post => (
            <Card
              key={`/blog/${post.node.frontmatter.slug}`}
              date={post.node.frontmatter.date}
              title={post.node.frontmatter.title}
              excerpt={post.node.frontmatter.excerpt}
              slug={`/blog/${post.node.frontmatter.slug}`}
            />
          ))}
        </Content>
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      {/* </div> */}
    </Container>
  )
}
export default allPost