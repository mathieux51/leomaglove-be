import styled, { css } from "styled-components"

const Container = styled.div.attrs({ className: "flex jc-c ai-c" })`
  height: 100px;
  border: 1px solid black;
  margin: 1px;
`
const H1 = styled.h1.attrs({ className: "fw400" })`
  margin: 0;
  font-size: 3rem;
`

export default class Header extends React.PureComponent {
  render() {
    return (
      <Container>
        <H1>Magali ❤️ Léo </H1>
      </Container>
    )
  }
}
