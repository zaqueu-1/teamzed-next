import { AsideStyle } from './Aside.styles'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'

export default function Aside() {
    return (
      <>
        <AsideStyle />
        <aside id='aside-container'>
          <h2 className="about-title"
              data-aos={"fade-up"}
              data-aos-duration={"900"}
            >RESULTADOS QUE SÓ O #TEAMZED ENTREGA
          </h2>
          <div className="aside-wrapper">
            <div className="deps">
              <Image data-aos={"zoom-in"} data-aos-duration={"1100"} src='/src/images/deps1.png' width='500' height='500' />
              <Image data-aos={"zoom-in"} data-aos-duration={"1300"} src='/src/images/deps2.png' width='500' height='500' />
            </div>
            <ul className="aside-list" >
              <li><AiOutlineCheckCircle className='check-icon'/> Suas dúvidas respondidas pelo WhatsApp, de segunda a sábado</li>
              <li><AiOutlineCheckCircle className='check-icon'/> Plano alimentar pensado perfeitamente para seu objetivo e rotina</li>
              <li><AiOutlineCheckCircle className='check-icon'/> Suplementação individualizada e que cabe no seu bolso</li>
              <li><AiOutlineCheckCircle className='check-icon'/> Orientações específicas e personalizadas</li>
              <li><AiOutlineCheckCircle className='check-icon'/> Acesso à página de materiais exclusiva no Notion</li>
              <Link href='/planos'><li className='li-btn'>QUERO ESSES RESULTADOS!</li></Link>
            </ul>
          </div>
        </aside>
      </>

    )
}