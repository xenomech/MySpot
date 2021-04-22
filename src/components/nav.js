import React from "react"
import { NavWrapper, NavLinks } from "../styles"
import { Link } from "gatsby"

export const Nav = () => {
  return (
    <NavWrapper>
      <NavLinks>
        <Link to="/">
          xenomech
        </Link>
      </NavLinks>
      <NavLinks>
        <Link to="/blog">
          <strong>01 </strong>Blog
        </Link>
        <Link to="/projects">
          <strong>02 </strong>Projects
        </Link>
        <Link to="/contact">
          <strong>03 </strong>Contact
        </Link>
      </NavLinks>
    </NavWrapper>
  )
}
