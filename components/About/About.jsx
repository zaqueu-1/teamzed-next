import { AboutStyle } from './About.styles'
import Image from 'next/image'

export default function About() {
    return (
        <>
        <AboutStyle />
        <section id="about-container">
          <h2 class="about-title" data-aos={"fade-up"} data-aos-delay={"200"} data-aos-duration={"900"}
          >PROFISSIONAIS AMANTES DO ESPORTE</h2>
          <div class="about-wrapper">
            <div class="coach-container" data-aos={"fade-up"} data-aos-duration={"900"}>
              <div class="coach">
                <Image src='/src/images/wagner.png' class="avatar" height='200' width='200' />
                <h3>Wagner Machado</h3>
                <a target='_blank 'href="https://instagram.com/wagnermachadopro"><span>@wagnermachadopro</span></a>
              </div>
                                  
              <div class="coach">
                <Image src='/src/images/edu.jpg' class="avatar" height='200' width='200' />
                <h3>Eduardo Zaqueu</h3>
                <a target='_blank 'href="https://instagram.com/zq1fit"><span>@zq1fit</span></a>
              </div>

              <div class="coach">
                <Image src='/src/images/deley.jpeg' class="avatar" height='200' width='200' />
                <h3>Vanderlei Moraes</h3>
                <a target='_blank 'href="https://instagram.com/vanderleimoraespro"><span>@vanderleimoraespro</span></a>
              </div>
            </div>

            <div class="cards-wrapper">
              <div class="card">
                <Image src="/src/images/smartp-icon.svg" class="svg-icon" width='48' height='48' />
                <h4 class="titulo-card">Praticidade</h4>
                <p class="descricao-card">
                  Arquivos <i>.pdf</i> que podem ser acessados a qualquer momento
                </p>
              </div>
              <div class="card">
                <Image src="/src/images/packs-icon.svg" class="svg-icon" width='48' height='48' />
                <h4 class="titulo-card">Pacotes completos</h4>
                <p class="descricao-card">
                  Planos mensais, trimestrais e semestrais
                </p>
              </div>
              <div class="card">
                <Image src="/src/images/money-icon.svg" class="svg-icon" width='48' height='48' />
                <h4 class="titulo-card">Pagamento fácil</h4>
                <p class="descricao-card">
                  Pix, boleto e cartões
                </p>
              </div>
            </div>
          </div>
      </section>
        </>
 
    )
}