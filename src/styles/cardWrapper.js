import styled from "styled-components"

export const CardWrapper = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  align-items: center;
  border-radius: 1rem;

  transition: background-color 1s ease;

  &:hover,
  &:focus {
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
