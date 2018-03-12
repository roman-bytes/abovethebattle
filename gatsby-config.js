module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `t8j0ewtik3c3`,
        accessToken: `1fd4c030cd175cb0a9f9a42e2ca0323d4bede2f2cfefa7b8d80164da7987df42`
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark'
  ],
};
