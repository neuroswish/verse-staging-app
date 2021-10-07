// styles
import '../styles/globals.css'

// imports


// types
import type { AppProps } from 'next/app'

export default function Verse({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

