import React from "react"
import { CardWrapper, LangTabs, LangTabscontainer, H2, A } from "../styles"
export const Card = ({ date, slug, excerpt, title, langtabs }) => {
  return (
    <A href={slug}>
      <CardWrapper>
        <H2>{title}</H2>
        <p>{date}</p>
        <p>{excerpt}</p>
        <LangTabscontainer>
          {langtabs.map(lang => {
            return <LangTabs lang={lang}>{lang}</LangTabs>
          })}
        </LangTabscontainer>
      </CardWrapper>{" "}
    </A>
  )
}
