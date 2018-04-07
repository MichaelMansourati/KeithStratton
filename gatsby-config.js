module.exports = {
    siteMetadata: {
        title: `Keith Stratton`
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `img`,
          path: `${__dirname}/src/assets/images/`
        }
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`
    ],
};