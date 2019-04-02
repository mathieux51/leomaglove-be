// @ts-check
import React from "react"
import styled from "styled-components"
import Main from "./Main"
import Information from "./Information"
import fireworksTakeOffSrc from "../assets/images/fireworks-take-off.gif"

const Top = styled.div.attrs({
  className: "flex-1 flex jc-c ai-c fxd-c relative"
})`
  min-height: 60vh;
  max-height: 31rem;
  border: 1px solid black;
`
const FireworksExplosion = styled.img.attrs({ className: "" })``

const FireworksTakeOff = styled.img.attrs({ className: "absolute" })`
  top: calc(50% + 85px);
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`

const Middle = styled.div.attrs({
  className: "flex fxd-c ai-c jc-c relative"
})`
  flex: 0 6rem;
  border: 1px solid black;
  border-left: 0;
  border-right: 0;
`

const Big = styled.span.attrs({
  className: "f31 ttu"
})`
  ${"" /* margin-top: 154px; */}
`

const CloseButton = styled.button.attrs({
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

const Button = styled.button.attrs({
  className: "ttu"
})`
  border: 1px solid black;
  padding: 0.4rem;
`

function Body() {
  const [show, setShow] = React.useState(null)
  const handleSetShow = evt => setShow(evt.target.name)
  return (
    <Main id="main">
      <Top>
        <Big>Coming soon...</Big>
        <FireworksTakeOff
          src={fireworksTakeOffSrc}
          alt="Feu d'artifice décolle"
        />
      </Top>
      {show && (
        <>
          <Middle>
            {show && <CloseButton onClick={handleSetShow}>❌</CloseButton>}
            <Text>Plus d'info</Text>
            <ButtonContainer>
              <Button onClick={handleSetShow} name="belgium">
                Les invités en Belgique
              </Button>
              <Button onClick={handleSetShow} name="france">
                Les invités en France
              </Button>
            </ButtonContainer>
          </Middle>
          {show && <Information />}
        </>
      )}
    </Main>
  )
}

export default Body
