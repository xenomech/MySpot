import React from "react"
import { CardWrapper, H2, A } from "../styles"
export const Card = ({ date, slug, exerpt, title }) => {
  return (
    <CardWrapper>
      <A href={slug}>
        <H2>{title}</H2>
        <p>{date}</p>
        <p>{exerpt}</p>
      </A>
    </CardWrapper>
  )
}
