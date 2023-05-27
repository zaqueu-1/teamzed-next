import { AboutStyle } from './About.styles'
import Image from 'next/image'

export default function About() {
    return (
        <>
          <AboutStyle />
          <section id="about-container">
            <div class="about-wrapper">
              <div class="coach-container" data-aos={"fade-up"} data-aos-duration={"900"}>                    
                <div class="coach">
                  <Image src='/src/images/links-small.png' class="avatar" height='400' width='400' />
                  <h3>Eduardo Zaqueu</h3>
                  <a target='_blank 'href="https://instagram.com/zq1fit"><span>@zq1fit</span></a>
                </div>

                <div class="coach">
                  <Image src='/src/images/avatar-dl.png' class="avatar" height='400' width='400' />
                  <h3>Vanderlei Moraes</h3>
                  <a target='_blank 'href="https://instagram.com/vanderleimoraespro"><span>@vanderleimoraespro</span></a>
                </div>
              </div>

              <div class="cards-wrapper">
                <div class="card">
                  <Image src="/src/images/diet-icone.svg" class="svg-icon" width='48' height='48'/>
                  <h4 class="titulo-card">Plano Alimentar</h4>
                  <p class="descricao-card">
                    Adaptado para seu objetivo. <br/> Seja ele qual for!
                  </p>
                </div>

                <div class="card">
                  <Image src="/src/images/orient-icone.svg" class="svg-icon" width='48' height='48'/>
                  <h4 class="titulo-card">Orientações Gerais</h4>
                  <p class="descricao-card">
                    Informações exclusivas e direcionadas pro seu foco!
                  </p>
                </div>
                
                <div class="card">
                  <Image src="/src/images/treino-icone.svg" class="svg-icon" width='48' height='48' />
                  <h4 class="titulo-card">Aeróbicos e Treinos</h4>
                  <p class="descricao-card">
                    Planilhas de exercícios periodizadas para suas metas!
                  </p>
                </div>
              </div>
            </div>

          </section>
        </>
 
    )
}