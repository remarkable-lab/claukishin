module.exports = {
  siteMetadata: {
    title: `ClauKishin`,
    subtitle: `El Blog de Clau`,
    description: `Tips financieros`,
    author: `Clau`
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
        name: `post`
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
              showCaptions: true
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
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://hanslebon.us7.list-manage.com/subscribe/post?u=087fd9c746a82ae9dfa71b0df&amp;id=fbb89f01e9" // see instructions section below
      }
    }
  ]
};
