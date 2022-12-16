import Link from 'next/link'
import { HeaderStyle } from './Header.styles'

export default function Header() {

  return (
    <>
    <HeaderStyle />
    <div class="bg"></div>
    <a name="top"></a>
    <header>
      <h3 class="logo">#TEAMZED</h3>
      <nav>
        <ul>
          <li>
            <Link href='/login' >
            <span id="members">Área de Membros</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}