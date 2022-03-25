import '../styles/globals.css'
import '../components/collapse.css'
import Layout from './components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
