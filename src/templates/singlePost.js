import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Seo, Container, Content, Post } from "../components"
import { H1, P, LangTabscontainer, LangTabs } from "../styles"

const singlePost = ({ data }) => {
  return (
    <Container>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.excerpt}
      />
      <Content>
        <Post>
          <H1>{data.mdx.frontmatter.title}</H1>
          <P color="sysGreenDark">{data.mdx.frontmatter.date}</P>
          <LangTabscontainer>
            {data.mdx.frontmatter.langtabs.map((lang,i) => {
              return (
                <LangTabs key={i} lang={lang}>
                  {lang}
                </LangTabs>
              )
            })}
          </LangTabscontainer>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Post>
      </Content>
    </Container>
  )
}
export default singlePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        excerpt
        slug
        title
        langtabs
      }
    }
  }
`
