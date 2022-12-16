import '../styles/globals.css'
import Head from "next/head"
import { GlobalStyle } from './globals.styles';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <GlobalStyle />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&display=swap');
      </style>
    </Head>
      <Component {...pageProps} />
  </>
  );
}


export default MyApp
