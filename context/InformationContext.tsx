import * as React from "react"
import dynamic from "next/dynamic"
import Tent from "../components/icons/Tent"
import House from "../components/icons/House"

const TimelineBelgium = dynamic(() =>
  import("../components/icons/TimelineBelgium")
)
const TimelineFrance = dynamic(() =>
  import("../components/icons/TimelineFrance")
)

export type CountryInformationType = {
  date: string
  title: string
  address: string
  googleMapsURL: string
  timelineComponent: React.ComponentType
  camping?: {
    text: string
    icon: React.ComponentType
  }
  gites?: {
    text: string
    icon: React.ComponentType
  }
} | null

export type CountriesType = "france" | "belgiumn"

export type InformationType = { [K in CountriesType]?: CountryInformationType }

export const InformationContext: React.Context<any> = React.createContext(null)

export const { Provider, Consumer: InformationConsumer } = InformationContext

export class InformationProvider extends React.PureComponent {
  state = {
    belgium: {
      date: "29.06.2019",
      title:
        "Google maps: Maison communale de Saint-Gilles Place Maurice Van Meenen 1060 Bruxelles",
      address:
        "Maison communale de Saint-Gilles Place Maurice Van Meenen 1060 Bruxelles",
      googleMapsURL:
        "https://maps.google.com/maps?width=100%&height=130&hl=en&q=Maison%20communale%20de%20Saint-Gilles%20Place%20Maurice%20Van%20Meenen%201060%20Bruxelles+(Maison%20communale%20de%20Saint-Gilles%20Place%20Maurice%20Van%20Meenen%201060%20Bruxelles)&ie=UTF8&t=&z=14&iwloc=B&output=embed",
      timelineComponent: TimelineBelgium
    },
    france: {
      date: "27.07.2019",
      title: "Google maps: Salle d’activité Ruat-Carguessac 47470 BEAUVILLE",
      address: "Salle d’activité Ruat-Carguessac 47470 BEAUVILLE",
      googleMapsURL:
        "https://maps.google.com/maps?width=100%&height=130&hl=en&q=47470%20BEAUVILLE+(Salle%20d%E2%80%99activit%C3%A9%20Ruat-Carguessac%2047470%20BEAUVILLE)&ie=UTF8&t=&z=14&iwloc=B&output=embed",
      timelineComponent: TimelineFrance,
      camping: {
        icon: <Tent />,
        text: "Camping sur le domaine possible. Prévoir tente et matelas de sol"
      },

      gites: {
        icon: <House />,
        text: "Gîtes à proximité dans la région via AirBnb ou Gîtes de France"
      }
    }
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}
