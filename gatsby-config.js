module.exports = {
  siteMetadata: {
      title: `Keith Stratton`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `audio`,
        path: `${__dirname}/src/assets/audio/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};