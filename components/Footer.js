import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer.attrs({ className: "flex jc-e" })`
  margin: 33px 0 20px;
  padding-top: 50px;
`

const Footer = () => (
  <StyledFooter id="footer">
    <span>Footer</span>
  </StyledFooter>
)

export default Footer
