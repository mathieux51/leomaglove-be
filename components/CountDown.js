import React from "react"
import styled from "styled-components"
import CountDownItem from "./CountDownItem"

const Container = styled.div.attrs({ className: "flex w100 jc-c fxw-w" })`
  margin-top: 10px;
`

class CountDown extends React.PureComponent {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  finalDate = new Date("Jun 29 2019").getTime()
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
      <Container>
        <CountDownItem text="Jours" time={days} />
        <CountDownItem text="Heures" time={hours} />
        <CountDownItem text="Minutes" time={minutes} />
        <CountDownItem text="Secondes" time={seconds} />
      </Container>
    )
  }
}
export default CountDown
