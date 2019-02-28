import React from "react"
import styled from "styled-components"

const Text = styled.span.attrs({ className: "" })`
  margin-top: 10px;
  font-size: 1.25rem;
`

const CountDownItemText = ({ text }) => <Text>{text}</Text>

export default CountDownItemText
