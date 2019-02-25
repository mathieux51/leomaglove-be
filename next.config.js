const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")
const withImages = require("next-images")
const withFonts = require("next-fonts")

module.exports = withBundleAnalyzer(
  withImages(
    withFonts({
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
      },
    })
  )
)
