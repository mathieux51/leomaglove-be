import React from 'react'
import styled from "styled-components"
import Link from "./Link"

const StyledLink = styled(Link).attrs({
  className: "fw900 ta-c"
})`
  border-radius: 9px;
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.19);
  padding: 0.75rem;
  margin: 0.25rem;
  background: ${({ theme }) => theme.t};
`

type Props = {
  href: string,
  className?: string
}

const StyledLinkContainer: React.FunctionComponent<Props> = ({ href, children }) => (
  <StyledLink href={href}>{children}</StyledLink>
)

export default StyledLinkContainer 
