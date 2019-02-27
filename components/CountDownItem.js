import React from "react"
import styled from "styled-components"

const Container = styled.div.attrs({ className: "flex fxd-c jc-sb ai-c" })`
  margin: 10px 5px 5px;
  & > div {
    margin: 0 30px;
  }
`

const Time = styled.span.attrs({ className: "" })`
  border: 1px solid black;
  padding: 5px;
  margin: 2px;
`

const Text = styled.span.attrs({ className: "" })`
  margin-top: 10px;
  font-size: 1.25rem;
`
const SubContainer = styled.div.attrs({ className: "flex jc-c w100" })``

const CountDownItem = ({ text, time }) => {
  const _time = String(time)
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
      <Text>{text}</Text>
    </Container>
  )
}

export default CountDownItem
