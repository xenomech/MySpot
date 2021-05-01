import React from "react"
import { NavWrapper, NavLinks } from "../styles"
import { Link } from "gatsby"

export const Nav = () => {
  return (
    <NavWrapper>
      <NavLinks>
        <Link to="/">xenomech</Link>
      </NavLinks>
      <NavLinks>
        <Link to="/blog">
          <strong>
            <span role="img" aria-label="Memo">
              📝{" "}
            </span>
          </strong>
          Blog
        </Link>
        <Link to="/projects">
          <strong>
            <span role="img" aria-label="Rocket">
              🚀{" "}
            </span>
          </strong>
          Projects
        </Link>
      </NavLinks>
    </NavWrapper>
  )
}
