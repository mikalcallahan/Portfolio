import { NavigationListItem } from '../components/NavigationList'
import styles from '../styles/Home.module.scss'
import { NavigationLink } from '../models/NavLinks'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function Portfolio() {
  const links: NavigationLink[] = [
    {
      _id: '1',
      name: 'Vish',
      uri: 'https://getvish.com',
    },
    {
      _id: '2',
      name: 'Mindfulstreaming',
      uri: 'https://github.com/mikalcallahan/mindfulstreaming',
    },
    {
      _id: '3',
      name: 'VueBoilerplate',
      uri: 'https://github.com/mikalcallahan/vuejs-boilerplate',
    },
    {
      _id: '4',
      name: 'Sinnoise',
      uri: 'https://github.com/mikalcallahan/sinnoise',
    },
    {
      _id: '5',
      name: 'Metamorphosis',
      uri: 'https://github.com/mikalcallahan/metamorphosis',
    },
    {
      _id: '6',
      name: 'Minuteur',
      uri: 'https://www.npmjs.com/package/minuteur',
    },
    {
      _id: '7',
      name: 'Threejs Cube',
      uri: 'https://github.com/mikalcallahan/three-js-cube',
    },
  ]

  return (
    <div className='page-content'>
      <div className='container'>
        <Header/>
        <main className='main'>
          {/*<Paragraph text={paragraph}></Paragraph>*/}

          <div className={styles.grid}>
            <NavigationListItem links={links} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
