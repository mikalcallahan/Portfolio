import { Paragraph } from '../components/Paragraph'
import { NavigationList } from '../components/NavigationList'
import styles from '../styles/Home.module.scss'
import { NavigationLink } from '../models/NavLinks'
import * as Link from 'next/link'

export default function About() {
  const paragraph: string =
    'Self-driven and quick learning software developer recently focusing on functional programming patterns, reusable, clean code. Hobbies include mindfulness, design, music, community. Currently based in Montreal ⛰'

  const links: NavigationLink[] = [
    {
      name: 'Github',
      uri: 'https://github.com/mikalcallahan',
    },
    { name: 'LinkedIn', uri: 'https://linkedin.com/in/mikalcallahan' },
    { name: 'Webring', uri: 'http://webring.xxiivv.com' },
  ]

  return (
    <div className='container'>
      <header>
        <h3> Mikal Callahan </h3>
        <ul>
          <li>
            <Link.default href='/about'>
              <a>About</a>
            </Link.default>
          </li>
          <li>
            <Link.default href='/portfolio'>
              <a> Portfolio </a>
            </Link.default>
          </li>
        </ul>
      </header>
      <main className='main'>
        <Paragraph text={paragraph}></Paragraph>

        <div className={styles.grid}>
          <NavigationList links={links}></NavigationList>
        </div>
      </main>
    </div>
  )
}
