import { ResultsStyle } from './Results.styles'
import Image from 'next/image'

export default function Results(){
    return (
      <>
        <ResultsStyle />
        <section id="results-container">
          <h2 class="about-title" data-aos={"fade-up"} data-aos-delay={"200"} data-aos-duration={"900"}
          >ACREDITAMOS EM PLANOS BEM FEITOS</h2>
          
          <div data-aos={"fade-left"} data-aos-delay={"200"} data-aos-duration={"1100"} className="cards-container">

            <div className="cards-subwrapper">
              <div className="card-r">
                  <Image src="/src/images/smartp-icon.svg" className="svg-icon" width='48' height='48' />
                  <div className="card-text-r">
                    <h4 className="titulo-card">Praticidade</h4>
                    <p className="descricao-card">
                      Arquivos <i>.pdf</i> que podem ser acessados a qualquer momento.
                    </p>
                  </div>
                </div>

                <div className="card-r">
                  <Image src="/src/images/packs-icon.svg" className="svg-icon" width='48' height='48' />
                  <div className="card-text-r">
                    <h4 className="titulo-card">Pacotes completos</h4>
                    <p className="descricao-card">
                      Planos mensais, trimestrais e semestrais.
                    </p>
                  </div>
                </div>

                <div className="card-r">
                  <Image src="/src/images/money-icon.svg" className="svg-icon" width='48' height='48' />
                  <div className="card-text-r">
                    <h4 className="titulo-card">Pagamento fácil</h4>
                    <p className="descricao-card">
                      Aceitamos pix, boleto e cartões.
                    </p>
                  </div>
                </div>
              </div>

              <Image className='devices' src='/src/images/opa.png' width='700' height='400' />
            </div>

        </section>
      </>

    )
}