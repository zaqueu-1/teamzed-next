import { GlobalStyle } from "../styles/globals.styles"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}


export default MyApp
