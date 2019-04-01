import styled from "styled-components"
import MagaliLoveLeo from "./icons/MagaliLoveLeo"
import AmourFritesDecadence from "./icons/AmourFritesDecadence"
import { media } from "../helpers"

const Header = styled.header.attrs({ className: "flex jc-c ai-c" })`
  padding: 0 1rem 3rem;
  ${media.phone`
    flex-direction: column;
  `}
`

// const H1 = styled.h1.attrs({ className: "visuallyHidden" })``

const LogoContainer1 = styled.div.attrs({
  className: "flex-1 w100 h100 flex ai-c"
})`
  ${media.phone`
    justify-content: center;
  `}
`

const StyledAmourFritesDecadence = styled(AmourFritesDecadence).attrs({
  className: ""
})`
  width: auto;
  height: 100%;
  height: 6rem;
`

const LogoContainer2 = styled.div.attrs({
  className: "flex-1 w100 h100 flex ai-c"
})`
  justify-content: flex-end;
  ${media.phone`
    justify-content: center;
  `}
`

const StyledMagaliLoveLeo = styled(MagaliLoveLeo).attrs({
  className: ""
})`
  width: auto;
  height: 50%;
  height: 2rem;
  margin-top: 1.5rem;
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
