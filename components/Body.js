import React from "react"
import styled from "styled-components"
import CountDownItem from "./CountDownItem"

const Main = styled.main.attrs({ className: "flex fxd-c" })`
  min-height: calc(100vh - 120px);
  border: 1px solid black;
  margin: 1px;
  border-top: 0;
`
const TopContainer = styled.div.attrs({
  className: "flex-1 flex jc-c ai-c fxd-c"
})`
  /* width: 100vw;
  height: calc(100vw / 2.39);
  max-height: calc(100vh - 100px) */
  /* background: black; */
`
const Frame = styled.div.attrs({ className: "" })`
  font-size: 3rem;
`

const CountDown = styled.div.attrs({ className: "flex" })`
  margin-top: 10px;
`

class Body extends React.PureComponent {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  finalDate = new Date("March 27 2019").getTime()
  componentDidMount() {
    const intervalId = setInterval(this.timer, 1000)
    this.setState({ intervalId })
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  timer = () => {
    const now = new Date().getTime()
    const distance = this.finalDate - now
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    this.setState({ days, hours, minutes, seconds })
  }
  render() {
    const { days, hours, minutes, seconds } = this.state
    return (
      <Main id="main">
        <TopContainer>
          <Frame>Plus d'info bientôt !</Frame>
          <CountDown>
            <CountDownItem text="Jours" time={days} />
            <CountDownItem text="Heures" time={hours} />
            <CountDownItem text="Minutes" time={minutes} />
            <CountDownItem text="Secondes" time={seconds} />
          </CountDown>
        </TopContainer>
      </Main>
    )
  }
}
export default Body
