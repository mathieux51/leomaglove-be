import React, { Fragment } from "react"
import styled, { ThemeProvider } from "styled-components"

import theme from "style/theme"
import { ProjectProvider } from "components/ProjectContext"
import Header from "components/Header"
import Head from "components/Head"
import Footer from "components/Footer"
import GlobalStyle from "components/GlobalStyle"

const Container = styled.div`
  max-width: 90rem;
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
      <Header />
      {children}
      {/* <Footer /> */}
    </Container>
  </ThemeProvider>
)
