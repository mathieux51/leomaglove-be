import * as React from "react"
import styled from "styled-components"

interface Props {
  className?: string
  src: string
}

const MapIFrame = ({ className, src }: Props) => (
  <iframe
    className={className}
    src={src}
    frameBorder="0"
    scrolling="no"
    marginHeight={0}
    marginWidth={0}
  />
)

const StyledMap = styled(MapIFrame).attrs({ className: "w100 h100" })``

export default StyledMap
