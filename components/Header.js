import styled, { css } from "styled-components"

const Container = styled.div.attrs({ className: "" })``

export default class Header extends React.PureComponent {
  render() {
    return <Container>Header</Container>
  }
}
