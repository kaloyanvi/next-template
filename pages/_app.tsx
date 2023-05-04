import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyle } from '../styles/global'
import '~/styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next-Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
