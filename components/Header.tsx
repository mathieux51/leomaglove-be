import React from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"
import Link from "./Link"
import { media } from "../helpers"
import { GalleryContext } from "../context/GalleryContext"

const AmourFritesDecadence = dynamic(() =>
  import("./icons/AmourFritesDecadence")
)

const MagaliLoveLeo = dynamic(() => import("./icons/MagaliLoveLeo"))

type HeaderProps = {
  isOpen: boolean
}
const Header = styled.header.attrs({ className: "flex jc-c ai-c w100" })`
  ${(props: HeaderProps) => (!props.isOpen ? "inherit" : "none")}
  max-width: 1280px;
  padding: 0 1rem 0.5rem;
  ${media.phone`
    padding: 0 1rem 1rem;
    flex-direction: column;
  `}
`

const LogoContainer1 = styled(Link).attrs({
  className: "flex-1 w100 h100 ai-c"
})`
  display: flex;
  ${media.phone`
    justify-content: center;
    display: none;
  `}
`

const StyledAmourFritesDecadence = styled(AmourFritesDecadence)`
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

const StyledMagaliLoveLeo = styled(MagaliLoveLeo)`
  width: auto;
  height: 50%;
  height: 2rem;
`
type Props = {}

const _Header: React.FunctionComponent<Props> = () => {
  const { isOpen } = React.useContext(GalleryContext)
  return (
    <Header isOpen={isOpen}>
      <LogoContainer1 href='/'>
        <StyledAmourFritesDecadence />
      </LogoContainer1>
      <LogoContainer2 href='/'>
        <StyledMagaliLoveLeo />
      </LogoContainer2>
    </Header>
  )
}

export default _Header
