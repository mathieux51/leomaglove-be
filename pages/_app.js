import React from "react"
import { hotjar } from "react-hotjar"
import App, { Container } from "next/app"
import Layout from "components/Layout"

export default class extends App {
  componentDidMount() {
    if (process.env.NODE_ENV !== "development") {
      hotjar.initialize(process.env.HOT_JAR_SITE_ID)
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
