// @ts-check
import React from "react"
import styled from "styled-components"
import Map from "./Map"
import Timeline from "./Timeline"
import { media } from "../helpers"

const Container = styled.div.attrs({
  className: "flex-1 fxd-c"
})``

const Top = styled.div.attrs({
  className: "flex"
})`
  flex-direction: column;
  margin: 2rem 1rem;
  ${media.tablet`
    flex-direction: row;
  `}
`

const TextContainer = styled.div.attrs({
  className: "flex fxd-c flex-1"
})``

const StyledMap = styled(Map).attrs({
  className: "flex-1"
})``

const Schema = styled.div.attrs({
  className: "flex-1 flex jc-c ai-c"
})``

const Bottom = styled.div.attrs({
  className: "flex fxd-c flex-auto"
})``

const BottomSubContainer = styled.div.attrs({
  className: "flex-1 flex jc-sa ai-c"
})``

const Camping = styled.span.attrs({
  className: ""
})``

const Housing = styled.span.attrs({
  className: ""
})``

const Message = styled.span.attrs({
  className: "flex-1 flex ai-c jc-c"
})``

const Information = ({ className }) => (
  <Container className={className}>
    <Top>
      <TextContainer>
        <span>Adresse</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          rerum quam eius necessitatibus cumque vero officia nemo fugiat labore
          iusto.
        </p>
      </TextContainer>
      <StyledMap />
      <Schema>Schéma</Schema>
    </Top>
    <Timeline />
    <Bottom>
      <BottomSubContainer>
        <Camping>⛺️ Camping</Camping>
        <Housing>🏠 Logement</Housing>
      </BottomSubContainer>
      <Message>Pour notre voyage dans l'espace : BEXX XXXX XXXX</Message>
    </Bottom>
  </Container>
)

export default Information
