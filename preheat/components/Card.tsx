import React from 'react'
import styles from '../styles/components/Card.module.scss'

interface Props {
  title: string,
  subtext?: string,
  action?: {
    name:string,
    handler: ()=>void,
    disabled: boolean,
    loading: boolean,
    loadingText: string,
    customColor: string
  },
  children: any
}

export default function Card({title, subtext, action, children}: Props) {
  return (
    <div className={`${styles.card}`}>
     
      <div className={styles.card__content}>{children}</div>
    </div>
  );
}

