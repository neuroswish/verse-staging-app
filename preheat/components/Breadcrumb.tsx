import Link from 'next/link'

interface Props {
  title: String
  lastRoute: {path?: string, name?: string}

}

export default function BreadCrumb({title, lastRoute}: Props) {
  return (
    <div>
      {lastRoute.path && lastRoute.name? (
        <Link href={lastRoute.path}>
          <a>{`<- ${lastRoute.name}`}</a>
        </Link>
      ): null}
      <h1>{title}</h1>
      
    </div>
  )
}