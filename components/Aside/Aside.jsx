import { AsideStyle } from './Aside.styles'
import Image from 'next/image'

export default function Aside() {
    return (
      <>
        <AsideStyle />
        <aside id='aside-container'>
            <h2 class="aside-title"
                                    data-aos={"fade-up"}
                                    data-aos-duration={"900"}
            >SEU OBJETIVO A UM CLIQUE</h2>
            <div className="aside-wrapper">
              <div 
              data-aos={"fade-up"}
                          data-aos-delay={"200"}
                          data-aos-duration={"900"}
              >
              <p class="aside-text">
              Os arquivos do protocolo são enviados para você e podem ser acessados facilmente em qualquer dispositivo.
              Coletas mensais de feedback garantem que os ajustes necessários sejam feitos sem agendamento de horários ou consultas.
              Para uma maior qualidade no serviço mantemos <em>vagas limitadas</em>, renovadas mensalmente.
              </p>
            </div>
          <Image className='cel' src="/src/images/cel.png" width='200' height='200'
                                  data-aos={"fade-up"}
                                  data-aos-delay={"200"}
                                  data-aos-duration={"900"}
          />
            </div>

      </aside>
      </>

    )
}