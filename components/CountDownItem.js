import React from "react"
import styled from "styled-components"
import CountDownItemText from "./CountDownItemText"

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

const CountDownItem = ({ text, time }) => {
  const _time = time === 0 ? "00" : String(time)
  const splitTime = _time.split("")
  return (
    <Container>
      {_time.length === 1 ? (
        <SubContainer>
          <Time>{_time}</Time>
        </SubContainer>
      ) : (
        <SubContainer>
          <Time>{splitTime[0]}</Time>
          <Time>{splitTime[1]}</Time>
        </SubContainer>
      )}
      <CountDownItemText text={text} />
    </Container>
  )
}

export default CountDownItem
