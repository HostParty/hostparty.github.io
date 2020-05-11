import PropTypes from "prop-types"
import React, { useState, useEffect, useLayoutEffect } from "react"
import styled from "styled-components"
import { useWindowScroll, useWindowSize, useGetSetState } from "react-use"

import LogoSVG from "../images/logo-bordered.svg"
import { Button } from "antd"
import { FlexFill } from "./utils"
import { breakpoints } from "../variables/breakpoints"

const scrollBreakpoint = 30

const StyledHeader = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  transition: background 300ms;
  background: rgba(0, 0, 0, 0.42);

  ${({ iAmAHack }) => {
    if (iAmAHack) {
      return `background: rgba(0, 0, 0, 0.42);`
    }
    return `background: rgba(0, 0, 0, 0);`
  }}
`

const MainTitle = styled.h1`
  transition: all 300ms;
  font-family: Lobster, serif;
  font-weight: 400;
  margin: 0;
  transform: translateX(0);

  ${({ iAmAHack, windowWidth }) => {
    if (iAmAHack) {
      return `
  transform: translateX(0);
      `
    }
    return `
        transform: translateX(calc(100vw / 2 - 115px));`
  }};
`

const LogoWrapper = styled.div`
  width: 28px;
  margin-right: 6px;
  transition: all 300ms;

  transform: translateY(0) translateX(0) scale(1);

  ${({ iAmAHack, windowWidth }) => {
    if (!iAmAHack) {
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

  ${({ iAmAHack }) => {
    //console.log({ windowScrollY })

    if (typeof window === `undefined`) {
      return ""
    }

    if (iAmAHack) {
      console.log("should be at top")
      return `
        transform: translateX(-10px) translateY(0);
      `
    } else {
      console.log("should not be at top")
      return `transform: translateX(calc(100vw / -2 + 80px)) translateY(250px)`
    }
  }}
`

const Header = ({ siteTitle }) => {
  const { y: windowScrollY } = useWindowScroll()
  const { width: windowWidth } = useWindowSize()

  const [iAmAHack, setIAmAHack] = useState(true)

  useEffect(() => {
    setIAmAHack(windowScrollY > scrollBreakpoint)
  }, [iAmAHack, windowScrollY, windowWidth])

  useLayoutEffect(() => {
    setIAmAHack(windowScrollY > scrollBreakpoint)
  }, [iAmAHack, windowScrollY, windowWidth])

  return (
    <StyledHeader
      iAmAHack={iAmAHack}
      windowScrollY={windowScrollY}
      windowWidth={windowWidth}
    >
      <LogoWrapper
        iAmAHack={iAmAHack}
        windowScrollY={windowScrollY}
        windowWidth={windowWidth}
      >
        <img src={LogoSVG} />
      </LogoWrapper>
      <MainTitle
        iAmAHack={iAmAHack}
        windowScrollY={windowScrollY}
        windowWidth={windowWidth}
      >
        HostParty
      </MainTitle>
      <FlexFill />
      <DownloadButton
        className="ant-btn ant-btn-primary"
        href="#downloads"
        windowScrollY={windowScrollY}
        windowWidth={windowWidth}
        iAmAHack={iAmAHack}
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
