module.exports = {
  siteMetadata: {
    title: `ClauKishin`,
    subtitle: `Finanzas y mucho mas`
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
    }
  ]
};
