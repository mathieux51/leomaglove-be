const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const withImages = require('next-images')
const withFonts = require('next-fonts')

module.exports = withBundleAnalyzer(
  withImages(
    withFonts({
      // dotenv
      webpack: config => {
        if (process.env.NODE_ENV === 'production') {
          // config.plugins.push(new Dotenv({ safe: true }))
        }
        return config
      },
      env: {
        HOT_JAR_SITE_ID: process.env.HOT_JAR_SITE_ID,
        GA_TRACKING_ID: process.env.GA_TRACKING_ID
      },
      // Deployment
      target: 'serverless',
      // BundleAnalyser
      analyzeServer: ['server', 'all'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['web', 'all'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: 'static',
          reportFilename: '../bundles/server.html'
        },
        browser: {
          analyzerMode: 'static',
          reportFilename: '../bundles/client.html'
        }
      }
    })
  )
)
