import styled from "styled-components"

export const ContentWrapper = styled.main`
  padding: 3rem 7rem;
  margin: 0.5rem 7rem;
  font-size: 1.25rem;
  @media only screen and (max-width: 65rem) {
    padding: 0.5rem;
    margin: 0.5rem;
  }
  @media only screen and (max-width: 50rem) {
    padding: 0.5rem;
    margin: 0.5rem;
  }
`
export const SocialsWrapper = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: auto auto auto auto auto;
  font-size: 2rem;
  flex: wrap;
  padding: 1rem 0rem;
  align-content: center;
  justify-content: start;
  @media only screen and (max-width: 50rem) {
    grid-template-columns: auto auto auto;
  }
`
export const SocialsButton = styled.div`
  padding: 0.5rem 0.5rem;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover,
    &:focus {
      color: ${props => {
        switch (props.bg) {
          case "github":
            return "white"
          case "snapchat":
            return props.theme.colors.sysYellowDark
          case "linkedin":
            return props.theme.colors.sysIndigoDark
          case "twitter":
            return props.theme.colors.sysBlueDark
          case "mail":
            return props.theme.colors.sysRedDark
          default:
            return "white"
        }
      }};
    }
  }
`
