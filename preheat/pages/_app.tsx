// styles
import '../styles/globals.css'
import {css} from '@emotion/css'
// imports
import { Web3ConfigProvider } from '../wallets/context/Web3ConfigProvider'

// types
import type { AppProps } from 'next/app'

export default function CreateVerseApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Web3ConfigProvider
        networkId={4}
        rpcUrl = {process.env.NEXT_PUBLIC_RPC_ENDPOINT as string || undefined}
        theme={{
          walletOption: css`
            color: #000 !important;
            position: relative;
            width: 100%;
            padding: 20px;
            margin-bottom: 20px;
            cursor: pointer;
            &:last-child {
              margin-bottom: 0;
            }
          `,
        }}
      >
        <Component {...pageProps} />
      </Web3ConfigProvider>
      
    </>
  
  )
}

