import styled from "styled-components"

export const ContainerWrapper = styled.div`
  height: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.tablet} {
  }

  @media ${props => props.theme.breakpoints.phone} {
  }
`
