import React from "react"
import styled, { ThemeProvider } from "styled-components"

import theme from "style/theme"
import Head from "components/Head"
// import Footer from "components/Footer"
import GlobalStyle from "components/GlobalStyle"

const Container = styled.div.attrs({
  className: "flex fxd-c"
})`
  min-height: calc(100vh);
  overflow: hidden;
  background: ${({ theme }) => theme.p};
  padding: 2rem;
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
