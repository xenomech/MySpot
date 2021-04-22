import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import Theme from "./src/themes/theme"
import { Table } from "./src/components"

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

const components = {
  table: Table,
}
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  </MDXProvider>
)
