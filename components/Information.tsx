import React from "react"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose"
import MapIFrame from "./MapIFrame"
import Timeline from "./Timeline"
import { media } from "../helpers"

const Container = styled(
  posed.div({
    enter: {
      y: "0",
      transition: {
        duration: 1000,
        ease: [0.35, 1.15, 0.6, 0.91]
      }
    },
    exit: {
      y: "150%",
      transition: {
        duration: 1000,
        ease: [0.35, 1.15, 0.6, 0.91]
      }
    }
  })
).attrs({
  className: "flex-1 fxd-c"
})`
  z-index: 1;
  background: ${({ theme }) => theme.p};
  border: 1px solid black;
`

const Top = styled.div.attrs({
  className: "flex"
})`
  flex-direction: column;
  margin: 1rem;
  ${media.tablet`
    flex-direction: row;
  `}
`

const TextContainer = styled.div.attrs({
  className: "flex fxd-c flex-1"
})``

const StyledMap = styled(MapIFrame).attrs({
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

interface Props {
  className?: string
  isOpen: boolean
}

const Information = ({ className, isOpen }: Props) => (
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
          {/* <StyledMap q="Maison communale de Saint-Gilles Place Maurice Van Meenen 1060 Bruxelles" /> */}
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
