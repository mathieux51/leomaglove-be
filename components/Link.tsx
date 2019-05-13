import Link from "next/link"

type Props = {
  className: string
  children: React.ComponentType
  id: string
}

const _Link = ({ className, children, id, ...rest }: Props) => (
  <Link {...rest}>
    <a className={className} id={id}>
      {children}
    </a>
  </Link>
)

export default _Link
