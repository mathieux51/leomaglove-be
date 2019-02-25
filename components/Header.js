import styled, { css } from "styled-components"

const Container = styled.div.attrs({ className: "flex jc-c ai-c" })`
  height: 100px;
  border: 1px solid black;
`

export default class Header extends React.PureComponent {
  render() {
    return <Container>Header</Container>
  }
}
