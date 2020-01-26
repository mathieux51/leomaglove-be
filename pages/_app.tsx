import React from "react"
import { ThemeProvider } from "styled-components"
import App from "next/app"
import { hotjar } from "react-hotjar"
import ReactGA from "react-ga"
import theme from "../style/theme"
import { InformationProvider } from "../context/InformationContext"
import { GalleryProvider } from "../context/GalleryContext"
import Layout from "../components/Layout" // Cannot be dynamically loaded
import "lazysizes"

const isProd = process.env.NODE_ENV !== "development"

class _App extends App {
  componentDidMount() {
    if (isProd) {
      hotjar.initialize(process.env.HOT_JAR_SITE_ID || "", "v1")
      ReactGA.initialize(process.env.GA_TRACKING_ID || "")
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GalleryProvider>
          <InformationProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </InformationProvider>
        </GalleryProvider>
      </ThemeProvider>
    )
  }
}
export default _App
