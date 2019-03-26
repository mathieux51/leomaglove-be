import styled from "styled-components"
import MagaliLoveLeo from "./icons/MagaliLoveLeo"
import Emoji from "./Emoji"

const Header = styled.header.attrs({ className: "flex jc-c ai-c" })`
  flex: 0 6rem;
  border-bottom: 1px solid black;
  margin: 1px;
`

const H1 = styled.h1.attrs({ className: "visuallyHidden" })``

const StyledMagaliLoveLeo = styled(MagaliLoveLeo).attrs({
  className: ""
})`
  height: 6rem;
`

const SubContainer = styled.div.attrs({
  className: "flex w100 h100 ai-c jc-sb"
})`
  margin: 0 1rem;
`

const TextContainer = styled.div.attrs({
  className: "flex-2 flex h100 fxd-c jc-c"
})``

const _Header = ({ secondary }) => (
  <Header>
    {!secondary ? (
      <React.Fragment>
        <H1>Magali coeur Léo</H1>
        <StyledMagaliLoveLeo />
      </React.Fragment>
    ) : (
      <SubContainer>
        <TextContainer>
          <span>Texte</span>
          <span>Texte</span>
          <span>Texte</span>
        </TextContainer>
        <StyledMagaliLoveLeo className="flex-1" />
      </SubContainer>
    )}
  </Header>
)

export default _Header
