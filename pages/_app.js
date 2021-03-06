import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  return(
      <>
        <Head>
          <link 
            rel="preconnect" 
            href="https://fonts.googleapis.com"
          />
          <link 
            rel="preconnect" 
            href="https://fonts.gstatic.com" 
            crossOrigin
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Hind+Madurai:wght@400;700&display=swap" 
            rel="stylesheet"
          />
        </Head> 
        <Component {...pageProps} />
      </>
    )
}

export default MyApp
