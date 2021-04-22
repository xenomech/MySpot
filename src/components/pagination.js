import React from "react"
import { PaginationWrapper, PaginationLink } from "../styles"

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationLink to={prevPage}>PrevPage</PaginationLink>
      <PaginationLink to={nextPage}>NextPage</PaginationLink>
    </PaginationWrapper>
  )
}