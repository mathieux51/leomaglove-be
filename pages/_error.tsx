import * as React from "react"
import styled from "styled-components"
import Header from "components/Header"

const H1 = styled.h1.attrs({ className: "tc-c" })`
  font-size: 3rem;
  margin: auto;
`

export default class Error extends React.PureComponent {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <>
        <Header />
        <H1>Mais qu'est que tu fais là ? </H1>
      </>
    )
  }
}
