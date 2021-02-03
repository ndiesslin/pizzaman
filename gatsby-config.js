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
    ],
}