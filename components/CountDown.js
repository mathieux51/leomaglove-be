import React from "react"
import styled from "styled-components"
import { CountdownConsumer } from "./CountdownContext"
import CountdownItem from "./CountdownItem"

const Container = styled.div.attrs({ className: "flex w100 jc-c fxw-w" })`
  margin-top: 10px;
`

const Countdown = () => (
  <CountdownConsumer>
    {({ days, hours, minutes, seconds }) => (
      <Container>
        <CountdownItem text="Jours" time={days} />
        <CountdownItem text="Heures" time={hours} />
        <CountdownItem text="Minutes" time={minutes} />
        <CountdownItem text="Secondes" time={seconds} />
      </Container>
    )}
  </CountdownConsumer>
)

export default Countdown
