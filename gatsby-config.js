module.exports = {
  siteMetadata: {
    title: `HostParty`,
    description: `Twitch bot app for hackathons, etc.`,
    author: `hostparty`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HostParty`,
        short_name: `hostparty`,
        start_url: `/`,
        background_color: `rgba(0, 1, 127, 0.7)`,
        theme_color: `rgba(0, 216, 255, 0.5)`,
        display: `minimal-ui`,
        icon: `src/images/logo-bordered.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },
  ],
}
