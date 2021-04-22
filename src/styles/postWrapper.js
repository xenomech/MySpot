import styled from "styled-components"

export const PostWrapper = styled.main`
  margin-top: 1rem;
  padding: 1rem;
  align-items: center;

  em {
    font-style: italic;
  }
  blockquote p {
    font-style: italic;
    padding: 0.5rem;
  }
  strong{
    font-weight:700;
  }
  a{
    color: rgb(75, 160, 225);
    text-decoration:underline;
  }
  code {
    ${"" /* font-family: "Roboto", sans-serif; */}
    font-size:1rem;
    line-height: 1.75rem;
    margin: 1rem;
    padding: 0.75rem;
    color: white;
    background-color: #252526;
    border-radius: 0.5rem;
  }
  del {
    text-decoration: line-through;
  }
  hr {
    border: 0;
    height: 1px;
    background:rgb(30, 30, 30);
    opacity: 0.1;
    margin-top: 2rem;
  }
  ul,
  ol {
    margin: 1rem;
  }
  li {
    margin: 0.025rem;
  }

  table{
    width:100%;
    border-spacing:.25rem;
    border-collapse:collapse;
    font-weight:1rem;
    line-height:1.5rem;
    font-weight:400;
  }
  th{
    font-weight:700;
  }
  table,th,td{
    border:1px solid rgb(160, 160, 165);
  }
  th,td{
    text-align:left;
    padding: .5rem; 
  }
`
