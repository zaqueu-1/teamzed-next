export default function About() {
    return (
        <section id="serv1">
        <h4 class="markup"
                        data-aos={"fade-up"}
                        data-aos-duration={"900"}
        >QUEM SOMOS</h4>
        <h2 class="titulo"
                        data-aos={"fade-up"}
                        data-aos-delay={"200"}
                        data-aos-duration={"900"}
        >PROFISSIONAIS QUE AMAM O ESPORTE!</h2>
        <p class="paragrafo"
                        data-aos={"fade-up"}
                        data-aos-delay={"200"}
                        data-aos-duration={"900"}
        >
          Trabalhamos para que você não cometa os mesmos erros que os demais.
        </p>
        <a name="contato-info"></a>
        <div class="box-quemsomos">
          <div class="coach-container"
                          data-aos={"fade-up"}
                          data-aos-duration={"900"}
          >
            <div class="coach">
              <img src='/src/images/wagner.png' class="avatar-wagner" height='100%' width='100%' />
              <h3>Wagner Machado</h3>
              <div class="centerme">
              <span>Treinos personalizados. Experiência e vivência no esporte!</span>
              </div>
              <br/><button class="contato-info"><a href="#" data-modal=".myModal3"><span id="legenda">Contato</span></a></button>
            </div>
            <div class="coach">
              <img src='/src/images/edu.jpg' class="avatar-edu" height='100%' width='100%' />
              <h3>Eduardo Zaqueu</h3>
              <div class="centerme">
              <span>Dieta fácil e acessível. Suplementação eficaz. Sem enrolação!</span>
              </div>
              <br/><button class="contato-info"><a href="#" data-modal=".myModal1"><span id="legenda">Contato</span></a></button>
            </div>
            <div class="coach">
              <img src='/src/images/deley.jpeg' class="avatar-van" height='100%' width='100%' />
              <h3>Vanderlei Moraes</h3>
              <div class="centerme">
              <span>Pós-graduando em Hormonização, Nutrição e Treinamento Feminino.</span>
              </div>
              <br/><button class="contato-info"><a href="#" data-modal=".myModal2"><span id="legenda">Contato</span></a></button>
            </div>
          </div>
          <div class="cards-box">
            <div class="card">
              <img src="src/images/smartp-icon.svg" class="svg-icon" />
              <h4 class="titulo-card">Praticidade</h4>
              <p class="descricao-card">
                Arquivos em <i>.pdf</i> que podem ser acessados a qualquer momento!
              </p>
            </div>
            <div class="card">
              <img src="src/images/packs-icon.svg" class="svg-icon" />
              <h4 class="titulo-card">Pacotes completos</h4>
              <p class="descricao-card">
                Contamos com planos mensais, trimestrais e semestrais.
              </p>
            </div>
            <div class="card">
              <img src="src/images/money-icon.svg" class="svg-icon" />
              <h4 class="titulo-card">Pagamento fácil</h4>
              <p class="descricao-card">
                Aceitamos todas as principais formas de pagamento!
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}