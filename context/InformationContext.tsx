import * as React from "react"

type Country = {
  date: string
  address: string
  googleMapsURL: string
}
type Keys = "france" | "belgiumn"
export type InformationType = { [K in Keys]?: Country }

export const InformationContext: React.Context<
  InformationType
> = React.createContext({})

export const { Provider, Consumer: InformationConsumer } = InformationContext

export class InformationProvider extends React.PureComponent {
  state = {
    belgium: {
      date: "29.06.2019",
      address:
        "Maison communale de Saint-Gilles Place Maurice Van Meenen 1060 Bruxelles",
      googleMapsURL:
        "https://maps.google.com/maps?width=100%&amp;height=130&amp;hl=en&amp;q=Maison%20communale%20de%20Saint-Gilles%20Place%20Maurice%20Van%20Meenen%201060%20Bruxelles+(Maison%20communale%20de%20Saint-Gilles)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
    },
    france: {
      date: "27.07.2019",
      address: "Salle d’activité Ruat-Carguessac 47470 BEAUVILLE",
      googleMapURL:
        "https://maps.google.com/maps?width=100%&amp;height=250&amp;hl=en&amp;q=Salle%20d%E2%80%99activit%C3%A9%20Ruat-Carguessac%2047470%20BEAUVILLE+(Salle%20d%E2%80%99activit%C3%A9%20Ruat-Carguessac)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
    }
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}
