import React from "react"
import { Container, Content, Card, Seo } from "../components"
import { P, H1, H3, SocialsWrapper, SocialsButton } from "../styles"
import { graphql } from "gatsby"
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaSnapchatGhost,
} from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const OldIndex = ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Container>
      <Seo />
      <Content>
        <div>
          <H1>Gokul Suresh</H1>
          <H3>Software Developer</H3>
          <SocialsWrapper>
            <SocialsButton bg="github">
              <a href="https://github.com/xenomech/" alt="github">
                <FaGithub />
              </a>
            </SocialsButton>
            <SocialsButton bg="linkedin">
              <a
                href="https://www.linkedin.com/in/gokulsmenon227"
                alt="linkedin"
              >
                <FaLinkedin />
              </a>
            </SocialsButton>

            <SocialsButton bg="twitter">
              <a href="www.twitter.com">
                <FaTwitter />
              </a>
            </SocialsButton>

            <SocialsButton bg="snapchat">
              <a href="www.snapchat.com">
                <FaSnapchatGhost />
              </a>
            </SocialsButton>

            <SocialsButton bg="mail">
              <a href="mailto:gokulsmenon227@gmail.com">
                <FiMail />
              </a>
            </SocialsButton>
          </SocialsWrapper>
          <P>
            Hey!
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
            <br /> My name is Gokul! Welcome to my spot on the web. I am a
            self-taught developer from Kochi, Kerala. I like building and
            occasionally designing apps and websites. I love listening to music,
            ricing Linux distros, and trying out different setups! I started
            this blog to keep track of the things I do!
          </P>
        </div>
        <div style={{ padding: "2rem 0rem" }}>
          <h3 style={{ fontWeight: "400" }}>Latest Posts</h3>
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
        </div>
      </Content>
    </Container>
  )
}
export default OldIndex

export const PageQuery = graphql`
  query read {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 2) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
            langtabs
            draft
          }
          id
        }
      }
    }
  }
`
