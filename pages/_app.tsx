import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/animations.css'
import '../styles/homepage.css'
import '../styles/github-contribution.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
