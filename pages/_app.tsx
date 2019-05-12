import * as React from "react"
import { ThemeProvider } from "styled-components"
import App, { Container } from "next/app"
import dynamic from "next/dynamic"
import { hotjar } from "react-hotjar"
import ReactGA from "react-ga"
import theme from "../style/theme"
import { InformationProvider } from "../context/InformationContext"

// import Layout from "../components/Layout"
const Layout = dynamic(() => import("../components/Layout"))

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
        <InformationProvider>
          <Container>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Container>
        </InformationProvider>
      </ThemeProvider>
    )
  }
}
export default _App
