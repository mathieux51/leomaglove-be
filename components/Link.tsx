import Link from "next/link"

const _Link = ({ className, children, ...rest }) => (
  <Link {...rest}>
    <a href={rest.href} className={className}>
      {children}
    </a>
  </Link>
)

export default _Link
