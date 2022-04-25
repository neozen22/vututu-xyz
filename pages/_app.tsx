import '../styles/globals.scss'
import '../styles/bootstrap.min.css'
import '../styles/main.scss'
import '../styles/404.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
