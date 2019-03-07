import React from "react"
import styled from "styled-components"
import Main from "./Main"
import Map from "./Map"

const Top = styled.div.attrs({
  className: "flex-1 flex jc-c ai-c fxd-c"
})`
  max-height: 900px;
`

const Middle = styled.div.attrs({
  className: "flex fxd-c ai-c jc-c relative"
})`
  background: gold;
  flex: 0 6rem;
`

const Bottom = styled.div.attrs({
  className: "flex-1"
})`
  /* display: ${({ show }) => (show ? "inherit" : "none")}; */
  /* visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transition: visibility 0s, opacity 5s linear; */
`

const Big = styled.span.attrs({
  className: "f31"
})``

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

class Dev extends React.PureComponent {
  state = {
    show: null
  }
  setShow = evt => this.setState({ show: evt.target.name })

  render() {
    const { show } = this.state
    return (
      <Main id="main">
        <Top>
          <Big>Vidéo en boucle</Big>
        </Top>
        <Middle>
          {show && <CloseButton onClick={this.setShow}>❌</CloseButton>}
          <Text>Plus d'info</Text>
          <ButtonContainer>
            <Button onClick={this.setShow} name="belgium">
              Les invités en Belgique
            </Button>
            <Button onClick={this.setShow} name="france">
              Les invités en France
            </Button>
          </ButtonContainer>
        </Middle>
        {
          <Bottom show={show}>
            <Map />
          </Bottom>
        }
      </Main>
    )
  }
}

export default Dev
