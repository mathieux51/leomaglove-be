import React from "react"
import styled from "styled-components"

const StyledMap = styled(Map).attrs({ className: "w100 h100" })``

function Map({ className }) {
  return (
    <iframe
      className={className}
      src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Dublin&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
    />
  )
}

export default StyledMap
