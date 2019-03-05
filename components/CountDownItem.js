import React from "react"
import styled from "styled-components"
import CountdownItemText from "./CountdownItemText"

const Container = styled.div.attrs({ className: "flex fxd-c jc-sb ai-c" })`
  min-width: 108px;
  min-height: 72px;
  margin: 10px 5px 5px;
  & > div {
    margin: 0 30px;
  }
`

const Time = styled.span.attrs({ className: "ta-c" })`
  font-size: 1.25rem;
  border: 1px solid black;
  padding: 5px;
  margin: 2px;
  width: 20px;
`

const SubContainer = styled.div.attrs({ className: "flex jc-c w100" })``

const CountdownItem = React.memo(({ text, time }) => {
  const _time = String(time).length >= 1 ? String(time) : `0${time}`.slice(-2)
  return (
    <Container>
      <SubContainer>
        {_time.split("").map((t, i) => (
          <Time key={i + t}>{t}</Time>
        ))}
      </SubContainer>
      <CountdownItemText text={text} />
    </Container>
  )
})

export default CountdownItem
