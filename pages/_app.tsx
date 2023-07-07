import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { ThemeProvider } from '@mui/material';
import { themeOptions } from '../src/theme';
import Head from 'next/head';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import '../src/styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

const baseURL = 'https://asimbilal.com';
const pageUrl = `${baseURL}/`;
const pageImage = `/images/home/headerImg.png`;
const title = `Asim Bilal is the best developer`;
const favIcon = '/icon.ico';
const description = 'Asim Bilal is the best developer';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href={favIcon} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description}></meta>
        <meta name="image" property="og:image" content={pageImage} key="ogimage" />
        <meta property="og:site_name" content={baseURL} key="ogsitename" />
        <meta property="og:url" content={pageUrl} key="ogurl" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta data-rh="true" property="og:image" content={pageImage} />
        <meta data-rh="true" name="twitter:image:src" content={pageImage} />
        <meta data-rh="true" name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
      </Head>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ThemeProvider theme={themeOptions}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Component {...pageProps} />
            </LocalizationProvider>
          </ThemeProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Provider>
      </I18nextProvider>
    </>
  );
}

export default appWithTranslation(App);
