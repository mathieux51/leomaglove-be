import * as React from "react"
import dynamic from "next/dynamic"
import { withRouter, SingletonRouter } from "next/router"
import styled from "styled-components"
import Main from "./Main"
import HomeLink from "./HomeLink"
import { france, belgium } from "../constants"
import weddingLove200Src from "../assets/images/wedding-love-200.jpg"
import weddingLove800Src from "../assets/images/wedding-love-800.jpg"
import weddingLove1400Src from "../assets/images/wedding-love-1400.jpg"

const Information = dynamic(() => import("./Information"))

// const Top = styled.div.attrs({
//   className: "flex jc-c ai-c fxd-c"
// })``

const Img = styled.img.attrs({
  className: "w100 relative"
})`
  flex: 0 38vh;
  max-height: 500px;
  object-fit: cover;
  border: 1px solid black;
  background: ${({ theme }) => theme.s};
`

const Middle = styled.div.attrs({
  className: "flex fxd-c ai-c jc-c relative"
})`
  flex: 0 6rem;
`

const ButtonContainer = styled.div.attrs({
  className: "w100 flex ai-c jc-sa"
})``

interface Props {
  router: SingletonRouter
}

const Body = ({ router }: Props) => {
  const isOpen = router.query ? !!router.query.q : false
  const query = router.query ? router.query.q : ""
  return (
    <Main id="main">
      <Information isOpen={isOpen} query={query} />
      {!isOpen && (
        // <Top>
        <Img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcSet={`
              ${weddingLove200Src} 200w,
              ${weddingLove800Src} 800w,
              ${weddingLove1400Src} 1400w
            `}
          src={weddingLove1400Src}
          alt="Love"
        />
        // </Top>
      )}
      <>
        <Middle>
          {/* <Text>Plus d'info</Text> */}
          <ButtonContainer>
            <HomeLink q={belgium} text="Les invités en Belgique" />
            <HomeLink q={france} text="Les invités en France" />
          </ButtonContainer>
        </Middle>
      </>
    </Main>
  )
}

export default withRouter(Body)
