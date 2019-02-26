import styled, { css } from "styled-components"

const Container = styled.div.attrs({ className: "flex jc-c ai-c" })`
  height: 100px;
  border: 1px solid black;
`
const H1 = styled.h1.attrs({ className: "f31 fw400" })`
  margin: 0;
  font-family: cursive;
`

export default class Header extends React.PureComponent {
  render() {
    return (
      <Container>
        <H1>Léo ❤️ Magali</H1>
      </Container>
    )
  }
}
