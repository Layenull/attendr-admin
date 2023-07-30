import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Sidebar>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200&family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </Sidebar>
  )
}
