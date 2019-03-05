import React from "react"
import styled from "styled-components"

const Text = styled.span`
  margin-top: 10px;
  font-size: 1.25rem;
`

const CountDownItemText = React.memo(props => <Text>{props.text}</Text>)

export default CountDownItemText
