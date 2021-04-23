import styled from "styled-components"

export const PostWrapper = styled.main`
  margin-top: 1rem;
  padding: 1rem;
  align-items: center;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: white;
  }
  h1:not(:first-child),
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 2rem;
  }
  /* h1 {
    font-size: 2.25rem;
    line-height: 2.25rem;
    font-weight: 700;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 700;
  }
  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    font-weight: 700;
  }
  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 700;
  }
  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 400;
    margin-top: 2rem;
  } */

  a {
    color: ${props => props.theme.colors.sysBlueLight};
    word-wrap: break-word;
  }
  em {
    font-style: italic;
  }
  blockquote p {
    font-style: italic;
    padding: 1rem;
    border-left: ${props => props.theme.colors.sysPinkDark} solid 3px;
    background-color: ${props => props.theme.colors.sysGrayDark4};
    margin: 3rem auto;
  }
  strong {
    font-weight: 700;
  }

  code {
    ${"" /* font-family: "Roboto", sans-serif; */}
    margin: 2rem;
    padding: 2rem 0.3rem;
  }
  del {
    text-decoration: line-through;
  }
  hr {
    border: 0;
    height: 1px;
    background: ${props => props.theme.colors.sysGrayDark4};
    opacity: 0.1;
    margin-top: 2rem;
  }
  ul,
  ol {
    margin: 0.5rem;
    padding: 1rem;
  }
  li {
    margin: 0.5rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    /* font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400; */
  }
  th {
    font-weight: 700;
  }
  table,
  th,
  td {
    border: 1px solid ${props => props.theme.colors.sysGrayDark1};
  }
  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }
`
