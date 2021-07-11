import { Paragraph } from '../components/Paragraph'
import { NavigationList } from '../components/NavigationList'
import styles from '../styles/Home.module.scss'
import { NavigationLink } from '../models/NavLinks'
import * as Link from 'next/link'

export default function Portfolio() {
  const links: NavigationLink[] = [
    {
      name: 'Vish',
      uri: 'https://getvish.com',
    },
    {
      name: 'Mindfulstreaming',
      uri: 'https://github.com/mikalcallahan/mindfulstreaming',
    },
    {
      name: 'VueBoilerplate',
      uri: 'https://github.com/mikalcallahan/vuejs-boilerplate',
    },
    { name: 'Sinnoise', uri: 'https://github.com/mikalcallahan/sinnoise' },
    {
      name: 'Metamorphosis',
      uri: 'https://github.com/mikalcallahan/metamorphosis',
    },
    { name: 'Minuteur', uri: 'https://www.npmjs.com/package/minuteur' },
    {
      name: 'Threejs Cube',
      uri: 'https://github.com/mikalcallahan/three-js-cube',
    },
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
              <a>Portfolio</a>
            </Link.default>
          </li>
        </ul>
      </header>
      <main className='main'>
        {/*<Paragraph text={paragraph}></Paragraph>*/}

        <div className={styles.grid}>
          <NavigationList links={links}></NavigationList>
        </div>
      </main>
    </div>
  )
}
