module.exports = {
  siteMetadata: {
    title: "Rudderstack-Plugin",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-rudderstack`,
      options: {
        // your rudderstack write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        //NOTE: Do not commit this to git. Process from env.
        prodKey: `1l7YzB8IxCUDhsq7Imxcxj3MnvH`,
        devKey: `1l7YzB8IxCUDhsq7Imxcxj3MnvH`,
        trackPage: true,
      },
    },
  ],
};
