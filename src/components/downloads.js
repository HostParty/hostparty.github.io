import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Button } from "antd"

import downloadFiles from "../data/releases.json"

const baseDownloadUrl =
  "https://github.com/HostParty/HostParty/releases/latest/download/"

let OSName = "Windows"
try {
  if (navigator.appVersion.indexOf("Win") !== -1) OSName = "Windows"
  if (navigator.appVersion.indexOf("Mac") !== -1) OSName = "MacOS"
  if (navigator.appVersion.indexOf("X11") !== -1) OSName = "UNIX"
  if (navigator.appVersion.indexOf("Linux") !== -1) OSName = "Linux"
} catch (e) {
  console.log("Could not determine OS. Defaulting to Windows.")
}

const currentPlatform = downloadFiles.filter(platformDownload => {
  return platformDownload.displayName === OSName
})[0]

const otherPlatforms = downloadFiles.filter(platformDownload => {
  return platformDownload.displayName !== OSName
})

const CurrentPlatformItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);

  & > div {
    margin: 0 10px;
  }
`

const DownloadsRow = styled.div``

const OtherDownloadsTitle = styled.h3`
  text-align: center;
`

const OtherDownloadsRow = styled.div`
  display: flex;
  flex-direction: row;
`

const OtherDownloadItem = styled.div`
  width: 50%;
  text-align: left;
  margin-top: 20px;

  a {
    margin-top: 10px;
  }
`

const HR = styled.hr`
  margin: 32px;
`

const Downloads = props => {
  return (
    <DownloadsRow>
      <CurrentPlatformItem>
        <div>
          <h3>Current Platform: </h3>
          <a
            href={baseDownloadUrl + currentPlatform.path}
            download="true"
            className="ant-btn ant-btn-primary"
            target="_blank"
            download
          >
            Download
          </a>
        </div>
        <div>
          <h3>{currentPlatform.displayName}</h3>
          <div>
            <div>File Size: {currentPlatform.fileSize}</div>
            <div>Filename: {currentPlatform.path}</div>
          </div>
        </div>
      </CurrentPlatformItem>
      <HR />
      <OtherDownloadsTitle>Other Platforms</OtherDownloadsTitle>
      <OtherDownloadsRow>
        {otherPlatforms.map(platform => {
          return (
            <OtherDownloadItem>
              <h4>{platform.displayName}</h4>
              <div>
                <div>{platform.fileSize}</div>
                <div>{platform.path}</div>
                <a
                  className="ant-btn"
                  href={baseDownloadUrl + platform.path}
                  target="_blank"
                  download
                >
                  Download
                </a>
              </div>
            </OtherDownloadItem>
          )
        })}
      </OtherDownloadsRow>
    </DownloadsRow>
  )
}

Downloads.propTypes = {}

Downloads.defaultProps = {}

export default Downloads
