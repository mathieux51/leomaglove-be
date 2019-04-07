import React from "react"
import styled from "styled-components"

interface Props {
  className?: string
  q: string
}

const MapIFrame = ({ className, q }: Props) => (
  <iframe
    className={className}
    src={`https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=${encodeURIComponent(
      q
    )}amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed`}
    frameBorder="0"
    scrolling="no"
    marginHeight={0}
    marginWidth={0}
  />
)

const StyledMap = styled(MapIFrame).attrs({ className: "w100 h100" })``

export default StyledMap
