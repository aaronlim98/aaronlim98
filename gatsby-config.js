module.exports = {
  pathPrefix: "/aaronlim98",
  siteMetadata: {
      title: `Aaron Lim`,
    siteUrl: `https://www.aaronlimchengkiat.com`
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `dm mono: 300, 400, 700`,
          `source sans pro:300,400,400i,700`,
          `monoton: 400`
        ],
        display: 'swap'
      }
    }
  ]
};
