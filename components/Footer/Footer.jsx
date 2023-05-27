import { FooterStyle } from "./Footer.styles"

export default function Footer({scrollToSection}) {
    return (
        <>
          <FooterStyle />
          <footer>
            <h3 onClick={() => scrollToSection('hero')} class="logo">#TEAMZED</h3>
            <a className='small-link' href="#top">Voltar</a>
          </footer>
      </>
    )
}