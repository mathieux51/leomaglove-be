import React from "react"
import styled from "styled-components"
import Main from "./Main"
import DiscoBall from "./icons/DiscoBall"
import { media } from "../helpers"

const TopContainer = styled.section.attrs({
  className: "flex-1 flex jc-c ai-c fxd-c relative"
})`
  max-height: 900px;
`

const H2 = styled.h2.attrs({ className: "m0 fw400 ta-c" })`
  font-size: 3rem;
`

const StyledDiscoBall = styled(DiscoBall).attrs({ className: "absolute" })`
  width: 11rem;
  top: -6px;
  right: 2rem;
  transform: rotate(2deg);
  ${media.desktop`
    width: 15rem;  
  `}
`

const Body = () => (
  <Main id="main">
    <TopContainer>
      <StyledDiscoBall />
      <H2>Plus d'infos... bientôt !</H2>
    </TopContainer>
  </Main>
)

export default Body
