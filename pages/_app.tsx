import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import { ThemeProvider } from '@mui/material'
import { themeOptions } from '../src/theme'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.scss'


const baseURL = "https://webiste.com"
const pageUrl = `${baseURL}/`
const pageImage = ``
const title = `Title Goes here`


export default function App({ Component, pageProps }: AppProps) {



  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/fav2.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={title}></meta>
        <meta property="og:url" content={pageUrl} key="ogurl" />
        <meta name="image" property="og:image" content={pageImage} key="ogimage" />
        <meta property="og:site_name" content={baseURL} key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={title} key="ogdesc" />
        <meta data-rh="true" property="og:image" content={pageImage} />
        <title>{title}</title>
        <meta data-rh="true" name="twitter:image:src" content={pageImage} />
        <meta data-rh="true" name="twitter:card" content="summary_large_image" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={themeOptions}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}
