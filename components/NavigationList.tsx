import { NavigationLink } from '../models/NavLinks'

interface NavigationListProps {
  links: NavigationLink[]
}

export function NavigationList(props: NavigationListProps) {
  const links = props.links
  const linksList = links.map((link) => (
    <li key={link.toString()}>
      {' '}
      <a href={link.uri}> {link.name} </a>
    </li>
  ))

  return <ul>{linksList}</ul>
}
