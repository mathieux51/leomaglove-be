import React from "react"

let CountdownContext
const { Provider, Consumer } = (CountdownContext = React.createContext())

class CountdownProvider extends React.PureComponent {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  finalDate = new Date("July 26 2019").getTime()
  intervalId = null
  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
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

    this.setState(prevState => ({
      ...(prevState.days !== days ? { days } : {}),
      ...(prevState.hours !== hours ? { hours } : {}),
      ...(prevState.minutes !== minutes ? { minutes } : {}),
      ...(prevState.seconds !== seconds ? { seconds } : {})
    }))
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { CountdownProvider, Consumer as CountdownConsumer, CountdownContext }
