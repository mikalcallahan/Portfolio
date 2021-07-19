import { NavigationLink } from '../models/NavLinks'
import styles from '../styles/Header.module.scss'

interface NavigationListItemProps {
  links: NavigationLink[]
}

export function NavigationListItem(props: NavigationListItemProps) {
  const links = props.links
  const linksList = links.map((link) => (
    <li className={styles.navLink} key={link._id}>
      {' '}
      <a href={link.uri}> {link.name} </a>
    </li>
  ))

  return (
    <div className={styles.listContainer}>
      <ul>{linksList}</ul>
    </div>
  )
}
