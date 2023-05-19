import '../styles/globals.css'
import Head from "next/head"
import { GlobalStyle } from './globals.styles';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <GlobalStyle />
    </Head>
      <Component {...pageProps} />
  </>
  );
}


export default MyApp
