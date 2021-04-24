import styled from "styled-components"

export const CardWrapper = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  align-items: center;
  border-radius: 1rem;

  transition: background-color 1s ease;

  &:hover{
    background-color: ${props => props.theme.colors.sysGrayDark4};
    /* box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); */
  }
  @media ${props => props.theme.breakpoints.tablet} {
    padding: 0.5rem;
    margin: 0rem;
  }

  @media ${props => props.theme.breakpoints.phone} {
  }
`
export const LangTabscontainer = styled.div`
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  padding: 0.25rem 0rem;
`
export const LangTabs = styled.div`
  background-color: ${props => {
    switch (props.lang) {
      // case "React":
      //   return props.theme.colors.sysIndigoDark
      // case "Flutter":
      //   return props.theme.colors.sysBlueDark
      // case "Gatsby":
      //   return props.theme.colors.sysPurpleDark
      // case "Python":
      //   return props.theme.colors.sysTealDark
      // case "JS":
      //   return props.theme.colors.sysYellowDark
      // case "HTML":
      //   return props.theme.colors.sysRedDark
      // case "CSS":
      //   return props.theme.colors.sysBlueDark
      // case "Dart":
      //   return props.theme.colors.sysIndigoDark
      // case "MDX":
      //   return "black"
      default:
        return props.theme.colors.sysGrayDark5
    }
  }};
  padding: 5px 20px;
  margin-right: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
`
