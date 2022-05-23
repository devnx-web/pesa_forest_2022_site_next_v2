import '../styles/globals.css'
import '../components/collapse.css'
import Layout from './components/Layout'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Script id='tag' strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WCK92HL');`}}></Script>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCK92HL"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
