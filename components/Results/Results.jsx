import { ResultsStyle } from './Results.styles'
import Image from 'next/image'

export default function Results(){
    return (
      <>
      <ResultsStyle />
      <section id="results-container">
        <h2 class="about-title" data-aos={"fade-up"} data-aos-delay={"200"} data-aos-duration={"900"}
        >ACREDITAMOS EM PLANOS BEM FEITOS</h2>
        <Image src="/src/images/corredor.svg" class="svg" width='300' height='300'/>
        <div class="cards-container">
          <div class="card">
            <Image src="/src/images/diet-icone.svg" class="svg-icon" width='48' height='48'/>
            <h4 class="titulo-card">Plano Alimentar</h4>
            <p class="descricao-card">
              Adaptado para SUA rotina. <br/> Seja ela como for!
            </p>
          </div>

          <div class="card">
            <Image src="/src/images/orient-icone.svg" class="svg-icon" width='48' height='48'/>
            <h4 class="titulo-card">Orientações Gerais</h4>
            <p class="descricao-card">
              Suplementação e informações precisas pro plano correr sem erros!
            </p>
          </div>
          
          <div class="card">
            <Image src="/src/images/treino-icone.svg" class="svg-icon" width='48' height='48' />
            <h4 class="titulo-card">Aeróbicos e Treinos</h4>
            <p class="descricao-card">
              Planilha de exercícios periodizada em torno de suas metas!
            </p>
          </div>

        </div>
      </section>
      </>

    )
}