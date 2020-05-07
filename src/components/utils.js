import styled from "styled-components"
import { breakpoints } from "../variables/breakpoints"

export const FlexFill = styled.div`
  flex: 1 1 auto;
`

export const Container = styled.div`
  margin: 0 auto;

  @media (min-width: ${breakpoints.small}px) {
    max-width: ${breakpoints.small}px;
  }
  @media (min-width: ${breakpoints.medium}px) {
    max-width: ${breakpoints.medium}px;
  }
  @media (min-width: ${breakpoints.large}px) {
    max-width: ${breakpoints.large}px;
  }
  @media (min-width: ${breakpoints.xl}px) {
    max-width: ${breakpoints.xl}px;
  }
  @media (min-width: ${breakpoints.xxl}px) {
    max-width: ${breakpoints.xxl}px;
  }
`
