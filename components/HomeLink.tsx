import StyledLink from './StyledLink'


type Props = {
  className?: string
  q: string
  text: string
}

const HomeLink = ({ className, q, text }: Props) => (
  <StyledLink href={`?q=${q}`} className={className}>
    {text}
  </StyledLink>
)

export default HomeLink
