import * as React from "react"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose"
// import MapIFrame from "./MapIFrame"
import { media } from "../helpers"
import { InformationContext } from "../context/InformationContext"

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
  className: "flex-1 fxd-c flex"
})`
  z-index: 1;
  background: ${({ theme }) => theme.p};
  border: 1px solid black;
`

const Title = styled.h1.attrs({
  className: "ta-c"
})``

const Timeline = styled.div.attrs({
  className: ""
})`
  background: hotpink;
  width: 50%;
  flex: 187px;
  margin: 0 auto;
`

const InformationContainer = styled.div.attrs({
  className: "w100"
})`
  background: gold;
  flex: 130px;
`

const Honeymoon = styled.div.attrs({
  className: ""
})``

const P = styled.p.attrs({
  className: "ta-c"
})``

const A = styled.a.attrs({
  className: "ta-c"
})``

interface Props {
  className?: string
  isOpen: boolean
  query: string
}

const Information = ({ className, isOpen, query }: Props) => {
  const state = React.useContext(InformationContext)
  const { date, address, googleMapsURL } = state[query] || {}
  return (
    <PoseGroup>
      {isOpen && (
        <Container
          className={className}
          pose={isOpen ? "open" : "closed"}
          key="information-container"
        >
          <Title>{date}</Title>
          <Timeline />
          <InformationContainer />
          <Honeymoon>
            <P>Pour notre voyage sur la lune </P>
            <P>BE17 3770 7855 8721</P>
            <P>ou</P>
            <A href="www.colleo.fr/cagnotte/14909/amour-frites-et-decadence">
              www.colleo.fr/cagnotte/14909/amour-frites-et-decadence
            </A>
          </Honeymoon>
        </Container>
      )}
    </PoseGroup>
  )
}

export default Information
