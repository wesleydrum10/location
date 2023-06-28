import { ConsultProvider } from '../context/useConsult'
import ThemeProviderMui5 from '../providers'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProviderMui5>
      <ConsultProvider>
        <Component {...pageProps} />
      </ConsultProvider>
    </ThemeProviderMui5>
  )
}

export default MyApp
