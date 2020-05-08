const axios = require("axios")
const yaml = require("js-yaml")
const fs = require("fs-extra")
const path = require("path")

async function main() {
  const baseLatestYamlUrl =
    "https://github.com/HostParty/HostParty/releases/latest/download/"

  const platforms = [
    {
      fileSuffix: "",
      displayName: "Windows",
      name: "win",
    },
    {
      fileSuffix: "-linux",
      displayName: "Linux",
      name: "linux",
    },
    {
      fileSuffix: "-mac",
      displayName: "MacOS",
      name: "mac",
    },
  ]

  const downloadedFiles = await Promise.all(
    platforms.map(async platform => {
      const response = await axios
        .get(`${baseLatestYamlUrl}latest${platform.fileSuffix}.yml`)
        .catch(e => {
          console.log(`Error fetching yaml for ${platform.displayName}`)
          return false
        })

      if (response) {
        const data = yaml.safeLoad(Buffer.from(response.data))
        return {
          ...data,
          ...platform,
          fileSize: `${(data.files[0].size / 1024 / 1024).toFixed(2)}MB`,
        }
      }
    })
  )

  fs.writeJSON(
    path.join(process.cwd(), "/src/data/releases.json"),
    downloadedFiles
  )
}

main()
