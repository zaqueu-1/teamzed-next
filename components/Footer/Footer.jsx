import { FooterStyle } from "./Footer.styles"

export default function Footer({scrollInto}) {
    return (
        <>
          <FooterStyle />
          <footer>
            <h3 onClick={() => scrollInto('hero')} className="logo">#TEAMZED</h3>
            <a className='small-link' href="#teamzed">Voltar</a>
          </footer>
      </>
    )
}