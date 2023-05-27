import { AboutStyle } from './About.styles'
import Image from 'next/image'

export default function About() {
    return (
        <>
          <AboutStyle />
          <div className="about-container">
            <div className="about-wrapper">
              <div className="coach-container" data-aos={"fade-up"} data-aos-duration={"900"}>                    
                <div className="coach">
                  <Image src='/src/images/links-small.png' className="avatar" height='400' width='400' />
                  <h3>Eduardo Zaqueu</h3>
                  <a target='_blank 'href="https://instagram.com/zq1fit"><span>@zq1fit</span></a>
                </div>

                <div className="coach">
                  <Image src='/src/images/avatar-dl.png' className="avatar" height='400' width='400' />
                  <h3>Vanderlei Moraes</h3>
                  <a target='_blank 'href="https://instagram.com/vanderleimoraespro"><span>@vanderleimoraespro</span></a>
                </div>
              </div>

              <div className="cards-wrapper">
                <div className="card">
                  <Image src="/src/images/diet-icone.svg" className="svg-icon" width='48' height='48'/>
                  <h4 className="titulo-card">Plano Alimentar</h4>
                  <p className="descricao-card">
                    Adaptado para seu objetivo. <br/> Seja ele qual for!
                  </p>
                </div>

                <div className="card">
                  <Image src="/src/images/orient-icone.svg" className="svg-icon" width='48' height='48'/>
                  <h4 className="titulo-card">Orientações Gerais</h4>
                  <p className="descricao-card">
                    Informações exclusivas e direcionadas pro seu foco!
                  </p>
                </div>
                
                <div className="card">
                  <Image src="/src/images/treino-icone.svg" className="svg-icon" width='48' height='48' />
                  <h4 className="titulo-card">Aeróbicos e Treinos</h4>
                  <p className="descricao-card">
                    Planilhas de exercícios periodizadas para suas metas!
                  </p>
                </div>
              </div>
            </div>

          </div>
        </>
 
    )
}