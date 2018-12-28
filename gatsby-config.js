module.exports = {
  siteMetadata: {
    title: `ClauKishin`,
    subtitle: `Finanzas y mucho mas`,
    description: `Mi description de la pagina`,
    author: `Clau Flores`
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: "gatsby-plugin-emotion",
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== "production",
        labelFormat: "[local]",
        cssPropOptimization: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: "post"
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `claukishin`
      }
    },
    // for gatsby image
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true,
              wrapperStyle: `
                margin: 3px solid red
              `
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
