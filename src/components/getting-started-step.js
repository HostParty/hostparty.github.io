import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { useWindowScroll, useWindowSize } from "react-use"
import { RobotFilled } from "@ant-design/icons"
import { useIntersection } from "react-use"
import { breakpoints } from "../variables/breakpoints"

const StepRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 32px;
  transition: all 300ms;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.medium}px) {
    justify-content: center;
  }

  p {
    max-width: 400px;
  }

  @media (min-width: ${breakpoints.medium}px) {
    flex-direction: row;
    text-align: left;

    &:nth-child(2) {
      flex-direction: row-reverse;

      h3,
      p {
        text-align: right;
      }
    }
  }

  ${({ hasIntersected }) => {
    if (!hasIntersected) {
      return `
        @media (min-width: ${breakpoints.medium}px) {
          transform: translateX(-42px);
          opacity: 0.7;

          &:nth-child(2) {
            transform: translateX(42px);
          }
        }
      `
    }
  }}
`

const ImageWrapper = styled.div`
  padding: 16px;
  font-size: 121px;
  path {
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  }
`

const GettingStartedStep = ({
  rightAligned,
  imageUrl,
  title,
  details,
  Icon,
}) => {
  const [hasIntersected, setHasIntersected] = useState(false)
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  })

  if (intersection && intersection.isIntersecting && !hasIntersected) {
    setHasIntersected(true)
  }

  return (
    <StepRow ref={intersectionRef} hasIntersected={hasIntersected}>
      <ImageWrapper>
        <Icon />
      </ImageWrapper>
      <div>
        <h3>{title}</h3>
        <p>{details}</p>
      </div>
    </StepRow>
  )
}

GettingStartedStep.propTypes = {
  rightAligned: PropTypes.bool,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  details: PropTypes.string,
  Icon: PropTypes.element,
}

GettingStartedStep.defaultProps = {
  rightAligned: false,
  imageUrl: "http://www.fillmurray.com/200/200",
  title: "Getting Started Step",
  details: "Its easy peasy lemon squeezy. Not stressy zesty lemon depressy.",
  Icon: RobotFilled,
}

export default GettingStartedStep
