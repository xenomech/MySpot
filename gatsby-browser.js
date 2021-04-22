import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyle = createGlobalStyle`
  /* * {
    box-sizing:border-box;
    margin:0;
    padding:0;
  } */
  body,html{
    height:100%;
    font-family:${props => props.theme.font.main};
    background-color:${props => props.theme.colors.sysGrayDark6};
    color:${props => props.theme.colors.sysGrayDark1};
  
  }
`
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
