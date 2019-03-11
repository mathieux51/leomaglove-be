import React from "react"
import styled from "styled-components"
import Map from "./Map"
import Timeline from "./Timeline"

const Container = styled.div.attrs({
  className: "flex-1 fxd-c"
})`
  display: ${({ show }) => (show ? "inherit" : "none")};
`

const Top = styled.div.attrs({
  className: "flex"
})`
  margin: 2rem 1rem;
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
  className: ""
})``

const Information = ({ show, className }) => (
  <Container show={show} className={className}>
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
    <Bottom />
  </Container>
)

export default Information
