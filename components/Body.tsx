import React from "react"
import styled from "styled-components"
import Main from "./Main"
import StyledLink from "./StyledLink"
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
  className: "flex fxd-c ai-c jc-c"
})`
  flex: 0 6rem;
`

const ButtonContainer = styled.div.attrs({
  className: "w100 flex ai-c jc-c"
})`
  flex-wrap: wrap;
`

const SubContainer = styled.div.attrs({
  className: "flex ai-c jc-c ta-c fxd-c"
})`
  margin: 0 0 1rem;
  flex: 100%;
`

// StyledLink
const Download = styled.a.attrs({
  className: "fw900 ta-c"
})`
  border-radius: 9px;
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.19);
  padding: 0.75rem;
  margin: 0.25rem;
  background: ${({ theme }) => theme.t};
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
  font-size: 20px;
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
            <Text>PHOTOS OFFICIELLES</Text>
            <ButtonSubContainer>
              <StyledLink href='/official'>La crème de la crème</StyledLink>
              <StyledLink href='/belgium'>Belgique: la totale</StyledLink>
              <StyledLink href='/france'>Le Sud: la totale</StyledLink>
            </ButtonSubContainer>
          </SubContainer>
          <StyledLink href='/emilie-and-kaspar'>
            PHOTO CADEAUX merci Kaspar et Emilie
          </StyledLink>
          <StyledLink href='/everybody'>PHOTOS FLASH by everybody</StyledLink>
        </ButtonContainer>

        <Download href='/leomaglove-photos.zip' download>
          télécharger toutes les photos
        </Download>
      </Middle>
    </Main>
  )
}

export default Body
