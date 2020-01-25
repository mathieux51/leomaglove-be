import React from "react"

export const GalleryContext: React.Context<any> = React.createContext(null)
GalleryContext.displayName = "GalleryContext"
const { Provider, Consumer } = GalleryContext

export { Consumer as GalleryConsumer }

type Props = {}

export const GalleryProvider: React.FC<Props> = props => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [index, setIndex] = React.useState(0)

  const state = {
    isOpen,
    setIsOpen,
    index,
    setIndex
  }

  return <Provider value={state}>{props.children}</Provider>
}
