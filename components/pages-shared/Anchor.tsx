import styled from "styled-components"
import { media } from "../../helpers"

const Anchor = styled.a`
  align-self: flex-end;
  margin-bottom: 1rem;
  margin-right: -1rem;
  ${media.phone`
    margin-right: -1.5rem;
  `}
`

export default Anchor
