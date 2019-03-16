import styled from "styled-components"
import MagaliLoveLeo from "./icons/MagaliLoveLeo"

const Container = styled.div.attrs({ className: "flex jc-c ai-c" })`
  flex: 0 6rem;
  border-bottom: 1px solid black;
  margin: 1px;
`

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
  className: "flex h100 fxd-c jc-c"
})``

const Header = ({ secondary }) => (
  <Container>
    {!secondary ? (
      <StyledMagaliLoveLeo />
    ) : (
      <SubContainer>
        <TextContainer>
          <span>Texte</span>
          <span>Texte</span>
          <span>Texte</span>
        </TextContainer>
        <H1>Magali {<StyledHeart />}Léo</H1>
      </SubContainer>
    )}
  </Container>
)

export default Header
