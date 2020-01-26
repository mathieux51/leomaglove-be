import React from "react"
// import dynamic from "next/dynamic"
import { withRouter, SingletonRouter } from "next/router"
import styled from "styled-components"
import Main from "./Main"
// import HomeLink from "./HomeLink"
import StyledLink from "./StyledLink"
import src from "../public/PHOTOS OFFICIELLES by Amélie Landry/1-La crème de la crème/_DSC7213.jpg"
// import { france, belgium } from "../constants/constants"
// // import weddingLove200Src from "assets/images/wedding-love-200.jpg"
// // import weddingLove858Src from "assets/images/wedding-love-858.jpg"
// // import weddingLove1400Src from "assets/images/wedding-love-1400.jpg"
import { media } from "../helpers"

// const Information = dynamic(() => import("./Information"));

const Img = styled.img.attrs({
  className: "w100 h100"
})`
  object-fit: cover;
  max-height: 500px;
  background: ${({ theme }) => theme.s};
  border-radius: 9px;
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.19);
`

const Container = styled.div.attrs({ className: "relative" })`
  flex: 0 38vh;
  ${media.tablet`
    flex: none;
  `}
`

const Text = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  text-align: center;
  font-size: 16rem;
  font-family: Helvetica, Arial, sans-serif;
  color: white;
  opacity: 0.2;
  ${media.tablet`
    font-size: 6rem;
  `}
}
`

const Middle = styled.div.attrs({
  className: "flex fxd-c ai-c jc-c"
})`
  flex: 0 6rem;
`

const ButtonContainer = styled.div.attrs({
  className: "w100 flex ai-c jc-sa"
})``

type Props = {
  router: SingletonRouter
}

const Body = ({ router }: Props) => {
  const isOpen = router.query ? !!router.query.q : false
  let query = ""
  if (router.query) {
    if (Array.isArray(router.query.q)) {
      query = router.query.q[0]
    } else {
      query = router.query.q
    }
  }
  console.log(query)

  return (
    <Main id='main'>
      {/* <Information isOpen={isOpen} query={query} /> */}
      {!isOpen && (
        <Container>
          <Text>Love</Text>
          <Img
            // sizes='(max-width: 1400px) 100vw, 1400px'
            // srcSet={`
            //   ${weddingLove200Src} 200w,
            //   ${weddingLove858Src} 858w,
            //   ${weddingLove1400Src} 1400w
            // `}
            src={src}
            alt='Love'
          />
        </Container>
      )}
      <Middle>
        <ButtonContainer>
          <StyledLink href='/official'>Photos officielles crêmes</StyledLink>
          <StyledLink href='/france'>Photos officielles France</StyledLink>
          <StyledLink href='/belgium'>Photos officielles Belgique</StyledLink>
          <StyledLink href='/emilie-and-kaspar'>Emilie et Kaspar</StyledLink>
          <StyledLink href='/everybody'>Everybody</StyledLink>
        </ButtonContainer>
      </Middle>
    </Main>
  )
}

export default withRouter(Body)
