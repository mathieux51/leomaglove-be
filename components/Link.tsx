import Link from "next/link"

const _Link = ({ className, children, id, ...rest }) => (
  <Link {...rest}>
    <a className={className} id={id}>
      {children}
    </a>
  </Link>
)

export default _Link
