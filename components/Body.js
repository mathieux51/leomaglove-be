import React from "react"
import styled from "styled-components"
import CountDown from "./CountDown"

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
  /* width: 100vw;
  height: calc(100vw / 2.39);
  max-height: calc(100vh - 100px) */
  /* background: black; */
`
const Frame = styled.h2.attrs({ className: "m0 fw400 ta-c" })`
  font-size: 3rem;
`

const Body = () => (
  <Main id="main">
    <TopContainer>
      <Frame>Plus d'infos... bientôt !</Frame>
      <CountDown />
    </TopContainer>
  </Main>
)

export default Body
