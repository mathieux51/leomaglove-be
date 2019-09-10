import * as React from "react"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose"
import MapIFrame from "./MapIFrame"
import { media } from "../helpers"
import {
  InformationContext,
  CountryInformationType,
} from "../context/InformationContext"

const Container = styled(
  posed.div({
    enter: {
      y: "0",
      transition: {
        duration: 1000,
        ease: [0.35, 1.15, 0.3, 1.01]
      }
    },
    exit: {
      y: "150%",
      transition: {
        duration: 1000,
        ease: [0.54, 0.01, 0.54, 0.01]
      }
    }
  })
).attrs({
  className: "flex-1 fxd-c flex"
})`
  z-index: 1;
  background: ${({ theme }) => theme.s};
  border-radius: 9px;
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.19);
`

const Title = styled.h1.attrs({
  className: "ta-c"
})`
  margin: 0.5rem 0 1rem;
  ${media.tablet`
    margin: 1rem 0 0rem;
  `}
`

const Timeline = styled.svg.attrs({
  className: ""
})`
  width: 50%;
  flex: 0 187px;
  margin: 0 auto 3rem;
  ${media.tablet`
    width: 90%;
    margin: 0 auto; 
  `}
`

const InformationContainer = styled.div.attrs({
  className: "w100 flex jc-sa"
})`
  margin: 0.5rem auto;
  flex: 0 130px;
  flex-wrap: wrap;
  ${media.tablet`
    flex: auto;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  `}
`

const AddressContainer = styled.div.attrs({
  className: "flex jc-c ai-c w100"
})`
  border-radius: 9px;
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.19);
  margin-top: 0.5rem;
  flex: 0 17rem;
  background: ${({ theme }) => theme.p};
  ${media.tablet`
    width: 90%;
    flex: 0 10rem;
  `}
`

const Address = styled.address.attrs({
  className: "ta-c fs-n"
})`
  margin: auto 1rem;
`

const StyledMap = styled(MapIFrame).attrs({
  className: "w100"
})`
  border-radius: 9px;
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.19);
  margin-top: 0.5rem;
  flex: 0 17rem;
  ${media.tablet`
    flex: 0 10rem;
    width: 90%;
  `}
`

const SleepingContainer = styled.div.attrs({ className: "flex fxd-c" })`
  border-radius: 9px;
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.19);
  margin-top: 0.5rem;
  flex: 0 17rem;
  background: ${({ theme }) => theme.p};
  ${media.tablet`
    flex: 0 10rem;
    width: 90%;
    margin: 0.5 auto 0;
  `}
`
const Sleeping = styled.dl.attrs({ className: "flex" })`
  margin: 1rem;
`

const Dt = styled.dt.attrs({ className: "flex jc-c ai-c" })`
  width: 5rem;
`

const Dd = styled.dd.attrs({ className: "" })`
  ${media.tablet`
    margin: auto 2rem;
  `}
`

const Honeymoon = styled.div.attrs({
  className: ""
})`
  border-radius: 9px;
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.19);
  padding: 1rem;
  width: 40%;
  margin: 2rem auto 2rem;
  background: ${({ theme }) => theme.p};
  ${media.tablet`
    width: 90%;
    margin: 0 auto 2rem;
  `}
`

const P = styled.p.attrs({
  className: "ta-c"
})``

const A = styled.a.attrs({
  className: "ta-c d"
})``

type Props = {
  className?: string
  isOpen: boolean
  query: string
}

const Information = ({ className, isOpen, query }: Props) => {
  const state = React.useContext(InformationContext)
  const information: CountryInformationType = state[query] || null
  return (
    <PoseGroup>
      {isOpen && (
        <Container
          className={className}
          pose={isOpen ? "open" : "closed"}
          key="information-container"
        >
          {information && (
            <>
              <Title>{information.date}</Title>
              <Timeline as={information.timelineComponent} />
              <InformationContainer>
                <AddressContainer>
                  <Address>{information.address}</Address>
                </AddressContainer>
                <StyledMap
                  title={information.title}
                  src={information.googleMapsURL}
                />
                {information.camping && information.gites && (
                  <SleepingContainer>
                    <Sleeping>
                      <Dt>{information.camping.icon}</Dt>
                      <Dd>{information.camping.text}</Dd>
                    </Sleeping>
                    <Sleeping>
                      <Dt>{information.gites.icon}</Dt>
                      <Dd>{information.gites.text}</Dd>
                    </Sleeping>
                  </SleepingContainer>
                )}
              </InformationContainer>
              <Honeymoon>
                <P>Pour notre voyage sur la lune </P>
                <P>BE17 3770 7855 8721</P>
                <P>ou</P>
                <A
                  target="_blank"
                  href="https://www.colleo.fr/cagnotte/14909/amour-frites-et-decadence"
                >
                  colleo.fr/cagnotte/14909/amour-frites-et-decadence
                </A>
              </Honeymoon>
            </>
          )}
        </Container>
      )}
    </PoseGroup>
  )
}

export default Information
