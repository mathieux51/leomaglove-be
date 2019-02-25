import React from "react"
import styled from "styled-components"

const Main = styled.main.attrs({ className: "flex fxd-c" })`
  min-height: calc(100vh - 100px);
`
const VideoContainer = styled.div.attrs({ className: "" })`
  width: 100vw;
  height: calc(100vw / 2.39);
  background: gold;
`
const MoreInfoContainer = styled.div.attrs({
  className: "flex fxd-c ai-c jc-sb"
})`
  padding: 0 5vw;
  background: hotpink;
`
const TextInfo = styled.span.attrs({ className: "" })`
  margin: 10px 10px 20px;
`

const ButtonContainer = styled.div.attrs({ className: "flex jc-sb w100" })``
const Button = styled.button.attrs({ className: "" })`
  border: 1px solid black;
  padding: 20px;
`

export default () => (
  <Main id="main">
    <VideoContainer>
      <span>Vidéo en boucle</span>
    </VideoContainer>
    <MoreInfoContainer>
      <TextInfo>Plus d'infos</TextInfo>
      <ButtonContainer>
        <Button>
          Les invités en <strong> Belgique</strong>
        </Button>
        <Button>
          Les invités en <strong> France</strong>
        </Button>
      </ButtonContainer>
    </MoreInfoContainer>
  </Main>
)
