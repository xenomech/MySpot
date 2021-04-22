import React from "react"
import { Container, Content, Card } from "../components"
import { P, H1, H3, SocialsWrapper } from "../styles"
import { graphql } from "gatsby"
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaSnapchatGhost,
} from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Container>
      <Content>
        <div>
          <H1>Gokul Suresh</H1>
          <H3>software developer</H3>
          <SocialsWrapper>
            <a href="https://github.com/xenomech/" alt="github">
              <FaGithub />
            </a>
            <a href="www.linkedin.com/in/gokulsmenon227" alt="linkedin">
              <FaLinkedin />
            </a>
            <a href="www.twitter.com">
              <FaTwitter />
            </a>
            <a href="www.snapchat.com">
              <FaSnapchatGhost />
            </a>
            <a href="mailto:gokulsmenon227@gmail.com">
              <FiMail />
            </a>
          </SocialsWrapper>
          <P>
            Hey!
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
            <br /> My name is Gokul! Welcome to my spot on the web. I am a
            self-taught developer from Kochi, Kerala. I like building and
            occasionally designing apps and websites. I love listening to music,
            rising Linux distros, and trying out different setups! I started
            this blog to keep track of the things I do!
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
