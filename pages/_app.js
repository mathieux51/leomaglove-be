import React from "react"
import { hotjar } from "react-hotjar"
import ReactGA from "react-ga"
import App, { Container } from "next/app"
import Layout from "components/Layout"

export default class extends App {
  componentDidMount() {
    if (process.env.NODE_ENV !== "development") {
      hotjar.initialize(process.env.HOT_JAR_SITE_ID, "v1")
      ReactGA.initialize(process.env.GA_TRACKING_ID)
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
