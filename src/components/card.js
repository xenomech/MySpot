import React from "react"
import { CardWrapper, LangTabs, LangTabscontainer, H2, A } from "../styles"
export const Card = ({ date, slug, excerpt, title, langtabs }) => {
  return (
    <CardWrapper>
      <A href={slug}>
        <H2>{title}</H2>
      </A>
      <p>{date}</p>
      <p>{excerpt}</p>
      <LangTabscontainer>
        {langtabs.map(lang => {
          return <LangTabs lang={lang}>{lang}</LangTabs>
        })}
      </LangTabscontainer>
    </CardWrapper>
  )
}
