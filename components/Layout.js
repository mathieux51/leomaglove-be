import React, { Fragment } from "react"
import styled, { ThemeProvider } from "styled-components"

import theme from "style/theme"
import { ProjectProvider } from "components/ProjectContext"
import Header from "components/Header"
import Head from "components/Head"
import Footer from "components/Footer"
import GlobalStyle from "components/GlobalStyle"

const Container = styled.div`
  /* margin: 20px; */
  /* max-width: 141.667rem; */
  min-height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.bg};
`

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Head />
      <Header />
      {children}
      <Footer />
    </Container>
  </ThemeProvider>
)
