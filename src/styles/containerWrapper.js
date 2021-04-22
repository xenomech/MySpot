import styled from "styled-components"

export const ContainerWrapper = styled.div`
  height: 100%;
  background-color: red;

  @media ${props => props.theme.breakpoints.tablet} {
  }

  @media ${props => props.theme.breakpoints.phone} {
  }
`
