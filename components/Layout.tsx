import * as React from "react"
import styled, { ThemeProvider } from "styled-components"

import theme from "../style/theme"
import Head from "./Head"
// import Footer from "components/Footer"
import GlobalStyle from "./GlobalStyle"

const Container = styled.div.attrs({
  className: "flex fxd-c ai-c"
})`
  min-height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.p};
  padding: 1rem 2rem 2rem;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Head />
      {children}
      {/* <Footer /> */}
    </Container>
  </ThemeProvider>
)

export default Layout
