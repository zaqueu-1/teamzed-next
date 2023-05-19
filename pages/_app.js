import Head from "next/head"
import { GlobalStyle } from "../styles/globals.styles"

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
