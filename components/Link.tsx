import Link from "next/link"

type Props = {
  className?: string,
  children: any,
  id?: string,
  href: string
}

const _Link: React.FunctionComponent<Props> = ({ className, children, id, href, ...rest }) => (
  <Link href={href} {...rest}>
    <a className={className} id={id}>
      {children}
    </a>
  </Link>
)

export default _Link
