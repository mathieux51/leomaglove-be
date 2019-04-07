import styled from "styled-components"
import Link from "./Link"

const StyledHomeLink = styled(Link).attrs({
  className: "fw900"
})`
  border: 1px solid black;
  padding: 0.4rem;
  background: ${({ theme }) => theme.t};
`

interface Props {
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
