import styled from "styled-components"
import Link from "./Link"
import { media } from "../helpers"

const StyledHomeLink = styled(Link).attrs({
  className: "fw900 ta-c"
})`
  border-radius: 9px;
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.19);
  padding: 0.75rem;
  margin: 0.25rem;
  background: ${({ theme }) => theme.t};
`

type Props = {
  className?: string
  q: string
  text: string
}

const HomeLink = ({ className, q, text }: Props) => (
  <StyledHomeLink href={`?q=${q}`} className={className}>
    {text}
  </StyledHomeLink>
)

export default HomeLink
