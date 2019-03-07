const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")
const withImages = require("next-images")
const withFonts = require("next-fonts")
const Dotenv = require("dotenv-webpack")

module.exports = withBundleAnalyzer(
  withImages(
    withFonts({
      // dotenv
      webpack: config => {
        config.plugins.push(new Dotenv({ safe: true }))
        return config
      },
      // BundleAnalyser
      analyzeServer: ["server", "all"].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ["web", "all"].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: "static",
          reportFilename: "../bundles/server.html"
        },
        browser: {
          analyzerMode: "static",
          reportFilename: "../bundles/client.html"
        }
      }
    })
  )
)
