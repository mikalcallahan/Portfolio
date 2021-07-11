import React from 'react'
import styles from '../styles/Home.module.scss'

interface ParagraphProps {
  text: string;
}
export function Paragraph(props: ParagraphProps) {
  return (
    <h5 className={styles.title}>
      {props.text}
    </h5>
  )
}
