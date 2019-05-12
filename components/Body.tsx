import * as React from "react"
import dynamic from "next/dynamic"
import { withRouter, SingletonRouter } from "next/router"
import styled from "styled-components"
import Main from "./Main"
import HomeLink from "./HomeLink"
import { france, belgium } from "../constants"

const Information = dynamic(() => import("./Information"))

const Top = styled.div.attrs({
  className: "flex jc-c ai-c fxd-c relative"
})`
  flex: 0 65vh;
  border: 1px solid black;
  background: ${({ theme }) => theme.s};
`

const Middle = styled.div.attrs({
  className: "flex fxd-c ai-c jc-c relative"
})`
  flex: 0 6rem;
`

const Big = styled.span.attrs({
  className: "ttu"
})`
  background: ${({ theme }) => theme.p};
  padding: 2rem 9rem;
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
        <Top>
          <Big>Vidéo in loop</Big>
        </Top>
      )}
      <>
        <Middle>
          {/* <Text>Plus d'info</Text> */}
          <ButtonContainer>
            <HomeLink q={france} text="Les invités en France" />
            <HomeLink q={belgium} text="Les invités en Belgique" />
          </ButtonContainer>
        </Middle>
      </>
    </Main>
  )
}

export default withRouter(Body)
