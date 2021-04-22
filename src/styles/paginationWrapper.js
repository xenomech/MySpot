import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  a:nth-child(1) {
    color: ${props =>
      props.isFirst ? "rgb(160, 160, 165)" : "rgb(30, 30, 30)"};
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }
  a:nth-child(2) {
    color: ${props =>
      props.isLast ? "rgb(160, 160, 165)" : "rgb(30, 30, 30)"};
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
    cursor: ${props => (props.isLast ? "default" : "pointer")};
  }
`
export const PaginationLink = styled(props => <Link {...props} />)`
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  margin: 0 2rem;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`