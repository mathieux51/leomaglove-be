import React from "react"
import { hotjar } from "react-hotjar"
import ReactGA from "react-ga"
import App, { Container } from "next/app"
import Layout from "../components/Layout"
import { InformationProvider } from "../context/InformationContext"

const hotJarSiteId = process.env.HOT_JAR_SITE_ID || ""
const gaTrackingId = process.env.GA_TRACKING_ID || ""
const isDev = process.env.NODE_ENV !== "development"

export default class extends App {
  componentDidMount() {
    if (isDev) {
      hotjar.initialize(hotJarSiteId, "v1")
      ReactGA.initialize(gaTrackingId)
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <InformationProvider>
        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </InformationProvider>
    )
  }
}
