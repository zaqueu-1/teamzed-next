import Link from 'next/link';
import { SignInStyle } from './css/signin.styles'
import { HeaderStyle } from '../components/Header/Header.styles';
import { GlobalStyle } from './globals.styles';

export default function SignIn() {
    return (
<>
    <SignInStyle />
    <HeaderStyle />
    <GlobalStyle />
    <header>
      <h4 class="logo">#TEAMZED</h4>
    </header>
    <section id="signin">
        <div class="membersArea"
                                        data-aos={"fade-up"}
                                        data-aos-duration={"900"}
        >
            <img src="src/images/biglogo.png" alt="teamzed" class="minilogo" height='10%' width='10%' />  
            <h5 class="login-titulo">CADASTRO</h5>
        </div>
      <form id="login-form" 
                                              data-aos={"fade-up"}
                                              data-aos-delay={"200"}
                                              data-aos-duration={"900"}
      >
        <div class="inputs-control">
            <p>Nome</p>
            <input type="text" id="name-input" placeholder="Eduardo" />
            <p>E-mail</p>
            <input type="text" id="email-input" placeholder="email@mail.com.br" />
            <p>Senha</p>
            <input type="password" id="pass-input" placeholder="********" />
            <p>Confirmação de senha</p>
            <input type="password" id="pass-input" placeholder="********" />
        </div>
        <div class="buttons-control">
            <button type="submit" id="login-button">Enviar</button>
            <Link href='/login'><button type="submit" id="backtomembers-button">Voltar para Área de Membros</button></Link>
        </div>
       </form>
    </section>
    </>
    )
}  