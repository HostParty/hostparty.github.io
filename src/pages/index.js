import React from "react"

import styled from "styled-components"
import { useWindowScroll, useWindowSize } from "react-use"

import LeftScreenshotImage from "../images/screenshot-obs.jpg"
import RightScreenshotImage from "../images/screenshot-app.jpg"

import {
  RobotFilled,
  SettingFilled,
  PlusCircleFilled,
  DesktopOutlined,
  LikeOutlined,
  BorderlessTableOutlined,
} from "@ant-design/icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GettingStartedStep from "../components/getting-started-step"
import Downloads from "../components/downloads"
import { Container } from "../components/utils"
import { breakpoints } from "../variables/breakpoints"

const GettingStartedContainer = styled(Container)`
  @media (min-width: ${breakpoints.large}px) {
    width: ${breakpoints.medium}px;
  }
  @media (min-width: ${breakpoints.xl}px) {
    width: ${breakpoints.large}px;
  }
  @media (min-width: ${breakpoints.xxl}px) {
    width: ${breakpoints.large}px;
  }
`

const HeroContent = styled.div`
  width: 342px;
  margin: auto;
  padding-left: 157px;
  padding-top: 30px;
  padding-bottom: 110px;

  h2 {
    font-size: 40px;
  }
`

const ContentSection = styled.div`
  min-height: 400px;
  display: flex;
  align-items: center;
  margin-bottom: 42px;

  @media (min-width: ${breakpoints.medium}px) {
    min-height: 500px;
  }
`

const HowItWorksSection = styled.div`
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.medium}px) {
    flex-direction: row;
  }
`

const HowItWorksItem = styled.div`
  text-align: center;
  flex: 1 1 auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    width: 50%;
    margin: 0 auto;
  }

  h4 {
    margin: 0 auto;
    text-align: left;
  }

  .anticon svg {
    width: 100%;
    max-width: 140px;
    height: auto;
    padding-right: 20px;
  }

  @media (min-width: ${breakpoints.medium}px) {
    flex-direction: column;
    justify-content: center;

    h4 {
      width: 210px;
    }
  }

  @media (min-width: ${breakpoints.large}px) {
    padding: 10px 40px;
  }
`

const SectionIntro = styled.div`
  width: 300px;
  margin: 0 auto 20px;

  h2 {
    text-align: center;
    font-size: 32px;
  }
`

const DownloadsSection = styled.div`
  min-height: 400px;
  display: flex;
  align-items: center;
  margin-bottom: 42px;

  h2 {
    font-size: 32px;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 42px;
  }

  @media (min-width: ${breakpoints.medium}px) {
    min-height: 400px;
  }
`

const SupportRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.medium}px) {
    flex-direction: row;
  }
`

const SupportSection = styled.div`
  flex: 1 1 auto;
  width: 50%;
  max-width: 300px;
  margin: 0 24px 12px;

  @media (min-width: ${breakpoints.medium}px) {
    margin-bottom: 0;
  }
`

const SupportContainer = styled(Container)`
  max-width: 600px;
  margin-bottom: 100px;

  h2 {
    margin-bottom: 42px;
  }
`

const gettingStartedSteps = [
  {
    imageUrl: "http://www.fillmurray.com/200/200",
    title: "Enter Bot Credentials",
    details:
      "It is best to use a dedicated bot account. Create one if you don't have one and get its OAuth token. We use this to let the bot chat in stream and connect to the Twitch API.",
    Icon: RobotFilled,
  },
  {
    imageUrl: "http://www.fillmurray.com/201/201",
    title: "Configure Settings",
    details:
      "This is where the fun begins. You can set the title keyword to search for and fine tune the timers and commands. Then you just start the server via the controls section.",
    Icon: SettingFilled,
  },
  {
    imageUrl: "http://www.fillmurray.com/202/202",
    title: "Add Overlay to OBS (or other)",
    details:
      "Grab the bot url from inside the app and paste it into an OBS BrowserSource. Other broadcasting suites with browsersource capabilities work just great.",
    Icon: PlusCircleFilled,
  },
]

const HeroContainer = styled.div`
  position: relative;
`

const LeftScreenshot = styled.div`
  position: absolute;
  left: 15%;
  top: 0;
  width: 400px;

  img {
    width: 100%;
    height: auto;
    border: 4px solid white;
    box-shadow: 0px 03px 20px rgba(0, 0, 0, 0.42);
    transform: perspective(400px) rotateY(32deg);
  }
`

const RightScreenshot = styled(LeftScreenshot)`
  left: auto;
  right: 15%;

  img {
    transform: perspective(400px) rotateY(-32deg);
  }
`

const IndexPage = () => {
  const { width: windowWidth } = useWindowSize()

  return (
    <Layout>
      <SEO title="Home" />
      <HeroContainer>
        <LeftScreenshot>
          <img src={LeftScreenshotImage} />
        </LeftScreenshot>
        <HeroContent windowWidth={windowWidth}>
          <Container>
            <h2>Democracy In Action</h2>
            <p>Engage your audience better during your next hosted event</p>
          </Container>
        </HeroContent>
        <RightScreenshot>
          <img src={RightScreenshotImage} />
        </RightScreenshot>
      </HeroContainer>
      <ContentSection>
        <Container>
          <SectionIntro>
            <h2>How It Works</h2>
            <p>
              Are you hosting a hackathon, game jam, or live streamed
              tournament? Use HostParty to showcase participants and let chat
              vote on when move onto the next stream.
            </p>
          </SectionIntro>
          <HowItWorksSection>
            <HowItWorksItem>
              <DesktopOutlined />
              <h4>You host an overlay in which you show another stream.</h4>
            </HowItWorksItem>
            <HowItWorksItem>
              <BorderlessTableOutlined />
              <h4>The stream inside is randomly selected by opt-in tag.</h4>
            </HowItWorksItem>
            <HowItWorksItem>
              <LikeOutlined />
              <h4>Chat can vote to stay or move onto the next stream.</h4>
            </HowItWorksItem>
          </HowItWorksSection>
        </Container>
      </ContentSection>
      <ContentSection>
        <GettingStartedContainer>
          <SectionIntro>
            <h2>Getting Started</h2>
            <p>
              In just a couple quick steps, you can be on your way. After
              downloading the app, head onto the first step.
            </p>
          </SectionIntro>
          <div>
            {gettingStartedSteps.map(step => {
              return <GettingStartedStep {...step} />
            })}
          </div>
        </GettingStartedContainer>
      </ContentSection>
      <DownloadsSection id="downloads">
        <Container>
          <h2>Downloads</h2>
          <Downloads />
        </Container>
      </DownloadsSection>
      <ContentSection>
        <SupportContainer>
          <SectionIntro>
            <h2>Support</h2>
          </SectionIntro>
          <SupportRow>
            <SupportSection>
              <h4>FAQs and Docs</h4>
              <p>
                You can find basic documentation at{" "}
                <a
                  href="https://github.com/HostParty/HostParty"
                  target="_blank"
                >
                  the Github repo
                </a>
                . Focused FAQs are being worked on and compiled as we go.
              </p>
            </SupportSection>
            <SupportSection>
              <h4>Real-Time Support Coming Soon</h4>
              <p>
                We are looking into ways to get you real-time support when you
                need it. We have not decided upon subscription or on-demand.
                But, the gears are turning.
              </p>
            </SupportSection>
          </SupportRow>
        </SupportContainer>
      </ContentSection>
    </Layout>
  )
}

export default IndexPage
