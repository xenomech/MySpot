import styled from "styled-components"

export const CardWrapper = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  align-items: center;
  border-radius: 1rem;

  transition: box-shadow ease 0.5s;

  &:hover,
  &:focus {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`
