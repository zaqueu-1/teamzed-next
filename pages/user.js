import Link from "next/link";
import { GlobalStyle } from "./globals.styles"
import Header from "../components/Header/Header";
import { HeaderStyle } from "../components/Header/Header.styles";

export default function User() {
    return (
        <>
        <GlobalStyle />
        <HeaderStyle />
        <header>
      <h4 class="logo">#TEAMZED</h4>
      <nav>
        <ul>
          <li>
            <Link href='/' >
            <span id="members">Home</span>
            </Link>
          </li>
          <li>
            <Link href='/products' >
            <span id="members">Consultoria</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    <div class="useContainer">
        <div class="userWrapper">
        <h3>Bem-vindo,</h3>
        <h1>Eduardo!</h1>
        <div id="ImageWrapper">avatar</div>
        </div>

        <div class="downloadsWrapper">
            Plano Alimentar
            Treinos
        </div>


    </div>
        </>
    )
}  