// This is the page that will be rendered at / and /index
import Head from 'next/head';
import Home from '../src/components/home';

const baseURL = 'https://asimbilal.com';
const pageUrl = `${baseURL}/`;
const pageImage = `/images/home/headerImg.png`;
const title = `Asim Bilal is the best developer`;
const favIcon = '/icon.ico';
const description = 'Asim Bilal is the best developer';

export default function HomeScreen() {
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
      <Home />
    </>
  );
}
