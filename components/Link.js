import Link from "next/link"

export default ({ className, children, ...rest }) => (
  <Link {...rest}>
    <a href={rest.href} className={className}>
      {children}
    </a>
  </Link>
)
