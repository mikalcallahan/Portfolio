import { Header } from './Header'
import { Paragraph } from '../components/Paragraph'
import { NavigationListItem } from '../components/NavigationList'
import styles from '../styles/Home.module.scss'
import { NavigationLink } from '../models/NavLinks'

export default function About() {
  const paragraph: string =
    'Self-driven and quick learning software developer recently focusing on functional programming patterns, reusable, clean code. Hobbies include mindfulness, design, music, community. Currently based in Montreal ⛰'

  const links: NavigationLink[] = [
    {
      _id: '1',
      name: 'Github',
      uri: 'https://github.com/mikalcallahan',
    },
    {
      _id: '2',
      name: 'LinkedIn',
      uri: 'https://linkedin.com/in/mikalcallahan',
    },
    { _id: '3', name: 'Webring', uri: 'http://webring.xxiivv.com' },
  ]

  return (
    <div className='container'>
      <Header></Header>
      <main className='main'>
        <Paragraph text={paragraph}></Paragraph>

        <div className={styles.grid}>
          <NavigationListItem links={links}></NavigationListItem>
        </div>
      </main>
    </div>
  )
}
