import React from "react"
import { Container, Content, Card } from "../components"
import { P, H1, H3 } from "../styles"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Container>
      <Content>
        <div>
          <H1>Gokul Suresh</H1>
          <H3>software developer</H3>
          <socials></socials>
          <P>
            Hey!
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
            <br /> My name is Gokul! Welcome to my spot on the web. I am a
            self-taught developer from Kochi, Kerala. I like building and
            occasionally designing apps and websites. I love listening to music!FOSS
          </P>
        </div>
        <div style={{ padding: "2rem 0rem" }}>
          <h3 style={{ fontWeight: "400" }}>Latest Posts</h3>
          {posts.map(post => (
            <Card
              key={`/blog/${post.node.frontmatter.slug}`}
              date={post.node.frontmatter.date}
              title={post.node.frontmatter.title}
              exerpt={post.node.frontmatter.exerpt}
              slug={`/blog/${post.node.frontmatter.slug}`}
            />
          ))}
        </div>
      </Content>
    </Container>
  )
}
export default IndexPage

export const PageQuery = graphql`
  query read {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 2) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            exerpt
          }
          id
        }
      }
    }
  }
`
