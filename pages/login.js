import Link from 'next/link';
import { HeaderStyle } from '../components/Header/Header.styles';
import { LoginStyle } from './css/login.styles'
import { GlobalStyle } from './globals.styles';

export default function Login() {
    return (
<>
    <LoginStyle />
    <HeaderStyle />
    <GlobalStyle />
    <header>
      <h4 class="logo">#TEAMZED</h4>
      <nav>
        <ul>
          <li>
            <Link href='/' >
            <span id="members">Voltar para Home</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <section id="login">
        <div class="membersArea"
                                        data-aos={"fade-up"}
                                        data-aos-duration={"900"}
        >
            <img src="src/images/biglogo.png" alt="teamzed" class="minilogo" height='10%' width='10%' />  
            <h5 class="login-titulo">ÁREA DE MEMBROS</h5>
        </div>
      <form id="login-form">
        <div class="inputs-control"
                                        data-aos={"fade-up"}
                                        data-aos-delay={"200"}
                                        data-aos-duration={"900"}
        >
            <p>E-mail</p>
            <input type="text" id="email-input" placeholder="email@mail.com.br" />
            <p>Senha</p>
            <input type="password" id="pass-input" placeholder="********" />
        </div>
        <div class="buttons-control"
                                        data-aos={"fade-up"}
                                        data-aos-delay={"400"}
                                        data-aos-duration={"900"}
        >
            <Link href='/user'><button type="submit" id="login-button">Acessar a área de membros</button></Link>
            <Link href='/signin'><button type="submit" id="signin-button">Novo por aqui? Cadastre-se</button></Link>
            <button type="submit" id="forgotpass-button">Esqueceu sua senha?</button></div>
       </form>
    </section>
</>
    )
}  