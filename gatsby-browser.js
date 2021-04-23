import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import Theme from "./src/themes/theme"
import { preToCodeBlock } from "mdx-utils"
import { Table, Code } from "./src/components"
import "./language-tabs.css"
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:border-box;
    margin:0;
    padding:0;
  }
  body,html{
    height:100%;
    font-family:${props => props.theme.font.main};
    background-color:${props => props.theme.colors.sysGrayDark6};
    color:white;
  }
`
//pre to code blocks from https://www.christopherbiscardi.com/post/codeblocks-mdx-and-mdx-utils
const components = {
  table: Table,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
  wrapper: ({ children }) => <>{children}</>,
}
export const wrapPageElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  </MDXProvider>
)
