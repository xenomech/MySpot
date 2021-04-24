import styled from "styled-components"

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  padding: 1rem 10rem;
  background-color: ${props => props.theme.colors.sysGrayDark4};
  text-align: center;
  flex-shrink: 0;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1rem;
    justify-content: space-evenly;
    padding: 0.5rem 1rem;
    line-height: 1rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0.5rem 1rem;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 0rem;
   
  }
`
