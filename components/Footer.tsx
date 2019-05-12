import * as React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer.attrs({ className: "flex jc-c ai-c" })`
  height: 100px;
  border: 1px solid black;
`

const Footer = () => (
  <StyledFooter id="footer">
    <span>Footer</span>
  </StyledFooter>
)

export default Footer
