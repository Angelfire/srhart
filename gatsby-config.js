const siteMetadata = {
  description: `Hardcore JavaScript Developer, Web Developer and Social Engineering Specialist`,
  title: `Andrés Bedoya - Sr Hart`,
  url: `https://srhart.co`,
  site_name: `SrHart`,
};

const plugins = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-postcss`,
    options: {
      postCssPlugins: [
        require("tailwindcss"),
        require("./tailwind.config.js"),
      ],
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      background_color: `#fff`,
      description: 'Personal website of Andres Bedoya',
      display: `minimal-ui`,
      icon: `src/images/logo-site.png`,
      lang: 'en-US',
      name: `Andres Bedoya`,
      short_name: `abedoyag`,
      start_url: `/`,
      theme_color: `#fafafa`,
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
];

module.exports = {
  siteMetadata,
  plugins,
};
