import styled from "styled-components"

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  padding: 1.5rem 10rem;
  background-color: ${props => props.theme.colors.sysGrayDark4};
  text-align: center;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1rem;
    padding: 1.5rem .5rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 1rem 0.5rem;
  }
`
