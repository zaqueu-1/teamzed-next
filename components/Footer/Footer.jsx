import { FooterStyle } from "./Footer.styles"

export default function Footer({scrollInto}) {
    return (
        <>
          <FooterStyle />
          <footer>
            <h3 onClick={() => scrollInto('hero')} class="logo">#TEAMZED</h3>
            <a className='small-link' href="#top">Voltar</a>
          </footer>
      </>
    )
}