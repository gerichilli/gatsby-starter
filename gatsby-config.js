module.exports = {
  siteMetadata: {
    title: `JP Mint NFT Online Marketing`,
    image: `src/images/logo.png`,
    description: `JP Mint NFT Online Marketing`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `./src/content/`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "vnkupgyb",
        dataset: "production",
      },
    },
  ],
};
