import * as React from "react"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose"
import MapIFrame from "./MapIFrame"
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
  background: ${({ theme }) => theme.s};
  border: 1px solid black;
`

const Title = styled.h1.attrs({
  className: "ta-c"
})`
  margin: 0.5rem 0 1rem;
`

const Timeline = styled.svg.attrs({
  className: ""
})`
  width: 50%;
  flex: 0 187px;
  margin: 0 auto 3rem;
`

const InformationContainer = styled.div.attrs({
  className: "w100 flex jc-sa"
})`
  margin: 0.5rem auto;
  flex: 0 130px;
  ${media.tablet`
    flex-direction: column;
  `}
`

const AddressContainer = styled.div.attrs({
  className: "flex jc-c ai-c"
})`
  flex: 0 17rem;
  background: ${({ theme }) => theme.p};
`

const Address = styled.address.attrs({
  className: "ta-c fs-n"
})`
  margin: auto 1rem;
`

const StyledMap = styled(MapIFrame).attrs({
  className: ""
})`
  flex: 0 17rem;
`

const Schema = styled.div.attrs({
  className: ""
})`
  flex: 0 17rem;
  background: ${({ theme }) => theme.p};
`
const Honeymoon = styled.div.attrs({
  className: ""
})`
  padding: 1rem;
  width: 40%;
  margin: 2rem auto 2rem;
  background: ${({ theme }) => theme.p};
`

const P = styled.p.attrs({
  className: "ta-c"
})``

const A = styled.a.attrs({
  className: "ta-c d"
})``

interface Props {
  className?: string
  isOpen: boolean
  query: string
}

const Information = ({ className, isOpen, query }: Props) => {
  const state = React.useContext(InformationContext)
  const { title, date, address, googleMapsURL, timelineComponent } =
    state[query] || {}
  return (
    <PoseGroup>
      {isOpen && (
        <Container
          className={className}
          pose={isOpen ? "open" : "closed"}
          key="information-container"
        >
          <Title>{date}</Title>
          <Timeline as={timelineComponent} />
          <InformationContainer>
            <AddressContainer>
              <Address>{address}</Address>
            </AddressContainer>
            <StyledMap title={title} src={googleMapsURL} />
            <Schema />
          </InformationContainer>
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
