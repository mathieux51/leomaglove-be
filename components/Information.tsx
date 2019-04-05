// @ts-check
import React from "react"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose"
import Map from "./Map"
import Timeline from "./Timeline"
import { media } from "../helpers"

// display: ${({ isOpen }) => (isOpen ? "block" : "none")};
const Container = styled(
  posed.div({
    enter: { y: "0" },
    exit: { y: "100%" }
  })
).attrs({
  className: "flex-1 fxd-c absolute w100 h100"
})`
  min-height: 50vh;
  background: ${({ theme }) => theme.p};
  left: 0;
  top: 0;
  border: 1px solid black;
`

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

const Information = ({ className, isOpen }) => (
  <PoseGroup>
    {isOpen && (
      <Container
        className={className}
        pose={isOpen ? "open" : "closed"}
        key="information-container"
      >
        <Top>
          <TextContainer>
            <span>Adresse</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus rerum quam eius necessitatibus cumque vero officia
              nemo fugiat labore iusto.
            </p>
          </TextContainer>
          {/* <StyledMap /> */}
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
    )}
  </PoseGroup>
)

export default Information
