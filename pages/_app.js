import { ConsultProvider } from '../context/useConsult'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ConsultProvider>
      <Component {...pageProps} />
    </ConsultProvider>
  )
}

export default MyApp
