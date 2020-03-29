require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Luke Dunscombe`,
    description: `My Personal Website`,
    author: `@LukeDunscombe`,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: `KeystoneJS`,
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: `cms`,
        // Url to query from
        // url: `https://api-euwest.graphcms.com/v1/cjjr1at6d0xb801c3scjrm0l0/master`,
        url: `${process.env.API_URL}`,
        // refetch interval in seconds
        refetchInterval: 60,
      },
    },
    `gatsby-plugin-styled-components`,
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
        name: `gatsby-starter-default`,
        short_name: `starwter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
