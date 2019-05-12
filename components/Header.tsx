import styled from "styled-components"
import dynamic from "next/dynamic"
import Link from "./Link"
import { media } from "../helpers"

const AmourFritesDecadence = dynamic(() =>
  import("./icons/AmourFritesDecadence")
)
const MagaliLoveLeo = dynamic(() => import("./icons/MagaliLoveLeo"))

const Header = styled.header.attrs({ className: "flex jc-c ai-c w100" })`
  max-width: 1280px;
  padding: 0 1rem 2rem;
  ${media.phone`
    padding: 0 1rem 1rem;
    flex-direction: column;
  `}
`

// const H1 = styled.h1.attrs({ className: "visuallyHidden" })``

const LogoContainer1 = styled(Link).attrs({
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
  height: 5rem;
`

const LogoContainer2 = styled(Link).attrs({
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
    <LogoContainer1 href="/">
      <StyledAmourFritesDecadence />
    </LogoContainer1>
    <LogoContainer2 href="/">
      <StyledMagaliLoveLeo />
    </LogoContainer2>
  </Header>
)

export default _Header
