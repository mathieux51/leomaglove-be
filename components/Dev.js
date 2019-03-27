import React from "react"
import styled from "styled-components"
import Main from "./Main"
import Information from "./Information"

const Top = styled.div.attrs({
  className: "flex-1 flex jc-c ai-c fxd-c"
})`
  height: 60vh;
  max-height: 31rem;
  border: 1px solid black;
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
          <Big>Vidéo in loop</Big>
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
        <Information show={show} />
      </Main>
    )
  }
}

export default Dev
