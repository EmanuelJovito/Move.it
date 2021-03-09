import '../styles/global.css'
import { Provider } from 'next-auth/client'
import { ChallengesProvider } from '../contexts/ChallengeContext'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
