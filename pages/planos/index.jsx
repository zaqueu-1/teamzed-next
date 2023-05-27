import React from 'react'
import { PlansStyle } from '../../styles/Plans.styles'
import Image from 'next/image'
import { BsFillCheckSquareFill } from 'react-icons/bs'


function index() {
  return (
    <>
        <PlansStyle />
        <div className='plans-container'>
            <div className="plans-info">
                <Image data-aos={"fade-up"} data-aos-duration={"900"} className='teamzed-logo' src='/src/images/teamzed-logo.png' width='600' height='200' />
                <h3 data-aos={"fade-left"} data-aos-duration={"1100"}>De forma prática, é possível começar agora mesmo, através de uma videochamada ou formulário enviado diretamente pra você pelo WhatsApp. A consultoria inclui:</h3>
                <ul data-aos={"fade-right"} data-aos-duration={"1300"}>
                    <li>Plano alimentar alinhado com seu objetivo e rotina</li>
                    <li>Suporte e retirada de dúvidas pelo WhatsApp</li>
                    <li>Suplementação ajustada a seu orçamento</li>
                    <li>Orientações específicas e personalizadas</li>
                    <li>Planejamento entregue em até 48 horas</li>
                    <li>Página de materiais exclusiva no Notion</li>
                </ul>
                <a data-aos={"fade-up"} data-aos-duration={"1500"} className='join-btn' href="https://wa.me/5521989122887"><BsFillCheckSquareFill className='join-icon' />Quero entrar pro time!</a>
            </div>
            <div data-aos={"zoom-in"} data-aos-duration={"1800"} className="plans-types">
                <div className='bg-div' />
                <a href="https://mpago.la/2XBUGV4" target='_blank'>Plano Mensal <span>Duração de 30 dias</span><span>R$150</span></a>
                <a href="https://mpago.la/1zu4p82" target='_blank'>Plano Trimestral <span>Duração de 90 dias</span><span>R$390</span></a>
                <a href="https://mpago.la/18w6NT1" target='_blank'>Plano Semestral <span>Duração de 180 dias</span><span>R$720</span></a>
            </div>
        </div> 
    </>
  )
}

export default index
