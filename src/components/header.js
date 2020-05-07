import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { useWindowScroll, useWindowSize } from "react-use"

import LogoSVG from "../images/logo-bordered.svg"
import { Button } from "antd"
import { FlexFill } from "./utils"
import { breakpoints } from "../variables/breakpoints"

const scrollBreakpoint = 30

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  transition: all 300ms;

  ${({ windowScrollY, windowWidth }) => {
    if (windowScrollY < scrollBreakpoint) {
      return `
        background: rgba(0, 0, 0, 0);
      `
    }
    return `background: rgba(0, 0, 0, 0.42);`
  }}
`

const MainTitle = styled.h1`
  transition: all 300ms;
  font-family: Lobster, serif;
  font-weight: 400;
  margin: 0;

  ${({ windowScrollY, windowWidth }) => {
    if (windowScrollY < scrollBreakpoint) {
      return `
        transform: translateX(${windowWidth / 2 - 115}px);
      `
    }
  }};
`

const LogoWrapper = styled.div`
  width: 28px;
  margin-right: 6px;
  transition: all 300ms;

  ${({ windowScrollY, windowWidth }) => {
    if (windowScrollY < scrollBreakpoint) {
      let scaleValue = 4
      if (windowWidth > breakpoints.medium) {
        scaleValue = 5
      }
      if (windowWidth > breakpoints.large) {
        scaleValue = 6
      }

      let translateYValue = 130
      if (windowWidth > breakpoints.large) {
        translateYValue = 160
      }

      return `
        transform: translateY(${translateYValue}px) translateX(${
        windowWidth / 2 - 150
      }px) scale(${scaleValue});
      `
    }
  }}

  img {
    width: 100%;
    height: auto;
  }
`

const DownloadButton = styled.a`
  transition: all 300ms;
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  transform: translateX(-10px);

  ${({ windowScrollY, windowWidth }) => {
    if (windowScrollY < scrollBreakpoint) {
      return `
        transform: translateX(-${windowWidth / 2 - 80}px) translateY(250px);
      `
    }
  }}
`

const Header = ({ siteTitle }) => {
  const { y: windowScrollY } = useWindowScroll()
  const { width: windowWidth } = useWindowSize()

  return (
    <StyledHeader windowScrollY={windowScrollY} windowWidth={windowWidth}>
      <LogoWrapper windowScrollY={windowScrollY} windowWidth={windowWidth}>
        <img src={LogoSVG} />
      </LogoWrapper>
      <MainTitle windowScrollY={windowScrollY} windowWidth={windowWidth}>
        HostParty
      </MainTitle>
      <FlexFill />
      <DownloadButton
        className="ant-btn ant-btn-primary"
        href="#downloads"
        windowScrollY={windowScrollY}
        windowWidth={windowWidth}
      >
        Get it Now
      </DownloadButton>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
