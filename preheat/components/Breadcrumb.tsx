import Link from 'next/link'
import styles from '../styles/components/Breadcrumb.module.scss'

interface Props {
  title: String
  lastRoute: {path?: string, name?: string}

}

export default function Breadcrumb({title, lastRoute}: Props) {
  return (
    <div className={styles.breadcrumb}>
      {lastRoute.path && lastRoute.name? (
        <Link href={lastRoute.path}>
          <a className={styles.breadcrumb__last}>{`<- ${lastRoute.name}`}</a>
        </Link>
      ): null}
      <h1>{title}</h1>

    </div>
  )
}