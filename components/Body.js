import React from "react"
import styled from "styled-components"
import Countdown from "./Countdown"

const Main = styled.main.attrs({ className: "flex fxd-c" })`
  min-height: calc(100vh - 120px);
  border: 1px solid black;
  margin: 1px;
  border-top: 0;
`
const TopContainer = styled.div.attrs({
  className: "flex-1 flex jc-c ai-c fxd-c"
})`
  max-height: 900px;
`
const H2 = styled.h2.attrs({ className: "m0 fw400 ta-c" })`
  font-size: 3rem;
`

const Body = () => (
  <Main id="main">
    <TopContainer>
      <H2>Plus d'infos... bientôt !</H2>
      <Countdown />
    </TopContainer>
  </Main>
)

export default Body
