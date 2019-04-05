import * as React from "react"
import { withRouter } from "next/router"
import styled from "styled-components"
import Main from "./Main"
import Link from "./Link"
import Information from "./Information"
import fireworksTakeOffSrc from "../assets/images/fireworks-take-off.gif"

const Top = styled.div.attrs({
  className: "flex-1 flex jc-c ai-c fxd-c relative"
})`
  min-height: 50vh;
  max-height: 31rem;
  border: 1px solid black;
`

const FireworksTakeOff = styled.img.attrs({ className: "absolute" })`
  top: calc(50% + 85px);
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`

const Middle = styled.div.attrs({
  className: "flex fxd-c ai-c jc-c relative"
})`
  flex: 0 6rem;
  border-bottom: 1px solid black;
`

const Big = styled.span.attrs({
  className: "f31 ttu"
})``

const CloseButton = styled(Link).attrs({
  className: "absolute flex jc-c ai-c"
})`
  margin: 0.75rem;
  right: 0;
  top: 0;
`

const ButtonContainer = styled.div.attrs({
  className: "flex-1 w100 flex ai-c jc-sa"
})``

const Text = styled.span.attrs({
  className: "flex-1 w100 flex ai-c ta-c jc-c"
})``

const Button = styled(Link).attrs({
  className: "ttu"
})`
  border: 1px solid black;
  padding: 0.4rem;
`

function Body({ router }) {
  const isOpen = !!router.query.q
  return (
    <Main id="main">
      <Top>
        <Big>Vidéo in loop</Big>
        <FireworksTakeOff
          src={fireworksTakeOffSrc}
          alt="Feu d'artifice décolle"
        />
      </Top>
      <>
        <Middle>
          {isOpen && <CloseButton href="#">❌</CloseButton>}
          <Text>Plus d'info</Text>
          <ButtonContainer>
            <Button href="?q=belgium">Les invités en Belgique</Button>
            <Button href="?q=france">Les invités en France</Button>
          </ButtonContainer>
        </Middle>

        {<Information isOpen={isOpen} />}
      </>
    </Main>
  )
}

export default withRouter(Body)
