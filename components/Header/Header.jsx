import Link from 'next/link'
import { HeaderStyle } from './Header.styles'

export default function Header({scrollToSection}) {

  return (
    <>
    <HeaderStyle />
    <header>
      <h3 class="logo" onClick={() => scrollToSection('hero')}>#TEAMZED</h3>
      <Link href='/planos' >
        <span className="small-link">Planos e Valores</span>
      </Link>
    </header>
    </>
  )
}