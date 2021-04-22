import React from "react"
import { ContainerWrapper } from "../styles"
import { Nav } from "./nav"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
    </ContainerWrapper>
  )
}
