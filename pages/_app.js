import '../styles/globals.css'
import Layout from '../components/Layout'
import { AuthContextProvider } from '../stores/authContext'


function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  )
}

export default MyApp

