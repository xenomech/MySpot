import React from "react"
import { TableWrapper } from "../styles"
export const Table = ({ children }) => {
  return (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  )
}
