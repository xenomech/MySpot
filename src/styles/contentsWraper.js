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
  display: flex;
  font-size: 2rem;
  flex: wrap;
  padding: 1rem 0rem;
  a {
    color: ${props => props.theme.colors.sysGrayLight3};
    padding: 0.5rem;
    transition: color 0.5s ease;
    &:hover,
    &:focus {
      color: white;
    }
  }
`
