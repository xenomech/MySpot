import styled from "styled-components"

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */
  font-size: 1.6rem;
  padding: 1.5rem 10rem;
  /* position: fixed;
  top: 0; */
  /* background-color: ${props => props.theme.colors.sysGrayDark4}; */
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.4rem;
    padding: 1.5rem 0.5rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 1.4rem;
    padding: 1.5rem 0.5rem;
  }
`
export const NavLinks = styled.div`
  & a {
    text-decoration: none;
    color: white;
    padding: 0rem 0.5rem;
    transition: color 0.3s ease;
  }

  & a:hover,
  a:focus {
    color: ${props => props.theme.colors.sysBlueDark};
  }

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1.4rem;
    padding-top: 0.2rem;
  }
`
