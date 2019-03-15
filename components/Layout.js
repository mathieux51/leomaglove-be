import React from "react"
import styled, { ThemeProvider } from "styled-components"

import theme from "style/theme"
import Head from "components/Head"
// import Footer from "components/Footer"
import GlobalStyle from "components/GlobalStyle"

const Container = styled.div`
  min-height: calc(100vh - 20px);
  overflow: hidden;
  background: ${({ theme }) => theme.bg};
  margin: 10px;
  border-radius: 5px;
`

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Head />
      {children}
      {/* <Footer /> */}
    </Container>
  </ThemeProvider>
)
