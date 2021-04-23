import React from "react"
import { CardWrapper, H2, A } from "../styles"
export const Card = ({ date, slug, excerpt, title }) => {
  return (
    <CardWrapper>
      <A href={slug}>
        <H2>{title}</H2>
      </A>
      <p>{date}</p>
      <p>{excerpt}</p>
    </CardWrapper>
  )
}
