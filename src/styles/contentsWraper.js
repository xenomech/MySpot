import styled from "styled-components"

export const ContentWrapper = styled.main`
  padding: 3rem 10rem;
  margin: 0.5rem 10rem;
  font-size: 1.25rem;
  flex: 1 0 auto;
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
            return props.theme.colors.sysTealDark
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

export const MigrationWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
  align-items: center;
  justify-content: center;
`
