import { NavigationLink } from '../models/NavLinks'

interface NavigationListItemProps {
  links: NavigationLink[]
}

export function NavigationListItem(props: NavigationListItemProps) {
  const links = props.links
  const linksList = links.map((link) => (
    <li key={link._id}>
      {' '}
      <a href={link.uri}> {link.name} </a>
    </li>
  ))

  return <ul>{linksList}</ul>
}
