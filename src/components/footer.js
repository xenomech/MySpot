import React from "react"
import { FooterWrapper, P } from "../styles"
export const Footer = () => {
  return (
    <FooterWrapper>
      <P color="sysGrayLight2" size="xSmall">
        © copyright 2021
      </P>
      <P color="sysGrayLight2" size="xSmall">
        Designed with{" "}
        <span role="img" aria-label="Beating Heart">
          💓
        </span>
        {" "}using Gatsby
      </P>
    </FooterWrapper>
  )
}
