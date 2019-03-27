// @ts-check
import styled from "styled-components"
import MagaliLoveLeo from "./icons/MagaliLoveLeo"
import AmourFritesDecadence from "./icons/AmourFritesDecadence"

const Header = styled.header.attrs({ className: "flex jc-c ai-c fxw-w" })`
  padding: 0 1rem 1rem;
`

// const H1 = styled.h1.attrs({ className: "visuallyHidden" })``

const LogoContainer1 = styled.div.attrs({
  className: "flex-1 w100 h100 flex ai-c"
})``

const StyledAmourFritesDecadence = styled(AmourFritesDecadence).attrs({
  className: ""
})`
  width: auto;
  height: 100%;
  height: 6rem;
`

const LogoContainer2 = styled.div.attrs({
  className: "flex-1 w100 h100 flex jc-e ai-c"
})``

const StyledMagaliLoveLeo = styled(MagaliLoveLeo).attrs({
  className: ""
})`
  width: auto;
  height: 50%;
  height: 3rem;
`

const _Header = () => (
  <Header>
    <LogoContainer1>
      <StyledAmourFritesDecadence />
    </LogoContainer1>
    <LogoContainer2>
      <StyledMagaliLoveLeo />
    </LogoContainer2>
  </Header>
)

export default _Header
