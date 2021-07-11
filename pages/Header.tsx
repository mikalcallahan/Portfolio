import React from 'react'
import * as Link from 'next/link'
import styles from '../styles/Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h3> Mikal Callahan </h3>
      <div className={styles.listContainer}>
        <ul>
          <li key={1}>
            <Link.default href='/about'>
              <a>About</a>
            </Link.default>
          </li>
          <li key={2}>
            <Link.default href='/portfolio'>
              <a>Portfolio</a>
            </Link.default>
          </li>
        </ul>
      </div>
    </header>
  )
}
