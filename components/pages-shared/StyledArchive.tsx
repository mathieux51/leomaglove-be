import styled from "styled-components"
import Archive from "../icons/Archive"
import { media } from "../../helpers"

const StyledArchive = styled(Archive)`
  width: 2rem;
  ${media.phone`
    width: 1rem;
  `}
`

export default StyledArchive
