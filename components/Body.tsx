import React from "react"
import styled from "styled-components"
import Main from "./Main"
import StyledLink from "./StyledLink"
import Archive from "./icons/Archive"
import src from "../assets/images/_DSC7213.jpg"
import { media } from "../helpers"

const Img = styled.img.attrs({
  className: "w100 h100"
})`
  object-fit: cover;
  max-height: 480px;
  background: ${({ theme }) => theme.s};
  border-radius: 9px;
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.19);
  ${media.phone`
    max-height: 250px;
  `}
`

const Container = styled.div.attrs({ className: "relative" })`
  flex: 0 38vh;
  ${media.tablet`
    flex: none;
  `}
`

const Middle = styled.div.attrs({
  className: "flex fxd-c ai-c jc-s"
})`
  flex: 1;
`

const ButtonContainer = styled.div.attrs({
  className: "w100 flex ai-c jc-c"
})`
  flex-wrap: wrap;
`

const SubContainer = styled.div.attrs({
  className: "flex ai-c jc-c ta-c fxd-c"
})`
  flex: 100%;
`

const HrContainer = styled.div`
  width: 100%;
  `

const Hr = styled.hr`
  width: 180px;
  margin: auto;
  margin-bottom: 1rem;
`

// StyledLink
// border-radius: 9px;
// box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.19);
// background: ${({ theme }) => theme.t};
const Download = styled.a.attrs({
  className: "fw900 ta-c flex ai-c"
})`
  padding: 0.75rem;
  margin: 0.25rem;
  margin-top: 1rem;
`

const ButtonSubContainer = styled.div.attrs({
  className: "flex ai-c jc-c"
})`
  margin-bottom: 1rem;
  flex-wrap: wrap;
`

const Text = styled.h1.attrs({
  className: ""
})`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 20px;
`

const StyledArchive = styled(Archive)`
  width: 1.25rem;
  margin-left: 0.5rem;
`

const Body = () => {
  return (
    <Main id='main'>
      <Container>
        <Img src={src} alt='Love' />
      </Container>
      <Middle>
        <ButtonContainer>
          <SubContainer>
            <Text>PHOTOS OFFICIELLES by Amélie Landry</Text>
            <ButtonSubContainer>
              <StyledLink href='/official'>La crème de la crème</StyledLink>
              <StyledLink href='/belgium'>Belgique: la totale</StyledLink>
              <StyledLink href='/france'>Le Sud: la totale</StyledLink>
            </ButtonSubContainer>
          </SubContainer>
          <HrContainer>
            <Hr />
          </HrContainer>
          <StyledLink href='/emilie-elvis-kaspar'>
            PHOTOS CADEAUX merci Emilie, Elvis et Kaspar
          </StyledLink>
          <StyledLink href='/everybody'>PHOTOS FLASH by everybody</StyledLink>
        </ButtonContainer>
        <Download
          href='https://www.dropbox.com/sh/n9ilwhxft3hs2cl/AACYS3GDuVSWM0l9Pz3QRaSAa?dl=0'
          download
          target='_blank'
        >
          Télécharger toutes les photos
          <StyledArchive />
        </Download>
      </Middle>
    </Main>
  )
}

export default Body
