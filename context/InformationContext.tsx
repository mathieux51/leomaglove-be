import * as React from "react"

export const InformationContext = React.createContext({})
export const { Provider, Consumer: InformationConsumer } = InformationContext

const info = `Pour notre voyage sur la lune 
BE17 3770 7855 8721
ou
www.colleo.fr/cagnotte/14909/amour-frites-et-decadence`

export class InformationProvider extends React.PureComponent {
  state = {
    belgium: {
      date: "29.06.2019",
      address:
        "Maison communale de Saint-Gilles Place Maurice Van Meenen 1060 Bruxelles",
      info
    },
    france: {
      date: "27.07.2019",
      address: "Salle d’activité Ruat-Carguessac 47470 BEAUVILLE",
      info
    }
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}
