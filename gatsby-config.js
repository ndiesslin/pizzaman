module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {

            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                "G-JNCBLBVESZ", // Google Analytics / GA
                ],
            },
        },
        {
            resolve: `gatsby-plugin-clarity`,
            options: {
              clarity_project_id: bviij5mefa,
              // Boolean value for enabling clarity while developing
              // true will enable clarity tracking code on both development and production environments
              // false will enable clarity tracking code on production environment only
              enable_on_dev_env: true
            },
        }
    ],
}