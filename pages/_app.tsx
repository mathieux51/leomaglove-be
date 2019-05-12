import React from "react"
import { hotjar } from "react-hotjar"
import ReactGA from "react-ga"
import App, { Container } from "next/app"
import Layout from "../components/Layout"
import { InformationProvider } from "../context/InformationContext"

const isProd = process.env.NODE_ENV !== "development"
console.info("process.env", JSON.stringify(process.env, null, 2))

export default class extends App {
  componentDidMount() {
    if (isProd) {
      console.info("process.env.HOT_JAR_SITE_ID", process.env.HOT_JAR_SITE_ID)
      console.info("process.env.GA_TRACKING_ID", process.env.GA_TRACKING_ID)
      hotjar.initialize(process.env.HOT_JAR_SITE_ID || "", "v1")
      ReactGA.initialize(process.env.GA_TRACKING_ID || "")
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
