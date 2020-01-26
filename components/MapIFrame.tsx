import React from "react"
import styled from "styled-components"

interface Props {
  className?: string
  src: string
  title: string
}

const MapIFrame = ({ className, src, title }: Props) => (
  <iframe
    className={className}
    src={src}
    title={title}
    frameBorder="0"
    scrolling="no"
    marginHeight={0}
    marginWidth={0}
  />
)

const StyledMap = styled(MapIFrame).attrs({ className: "w100 h100" })``

export default StyledMap
