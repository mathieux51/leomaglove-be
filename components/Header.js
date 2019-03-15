import styled, { css } from "styled-components"
import Heart from "./icons/Heart"

const Container = styled.div.attrs({ className: "flex jc-c ai-c" })`
  height: 100px;
  border: 1px solid black;
  margin: 1px;
`

const H1 = styled.h1.attrs({ className: "fw400 flex ai-c" })`
  margin: 0;
  font-size: 2.5rem;
`

const StyledHeart = styled(Heart).attrs({ className: "" })`
  width: 30px;
  margin: 0 0.75rem;
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
      <H1>Magali {<StyledHeart />}Léo</H1>
    ) : (
      <SubContainer>
        <TextContainer>
          <span>Texte</span>
          <span>Texte</span>
          <span>Texte</span>
        </TextContainer>
        <H1>Magali ❤️ Léo </H1>
      </SubContainer>
    )}
  </Container>
)

export default Header
