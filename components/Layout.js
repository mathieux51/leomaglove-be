import React from "react"
import styled, { ThemeProvider } from "styled-components"

import theme from "style/theme"
import Head from "components/Head"
// import Footer from "components/Footer"
import GlobalStyle from "components/GlobalStyle"

const Container = styled.div.attrs({
  className: "flex fxd-c"
})`
  min-height: calc(100vh - 4rem);
  overflow: hidden;
  background: ${({ theme }) => theme.bg};
  margin: 2rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 1px solid black;
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
