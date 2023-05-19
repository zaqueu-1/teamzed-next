import { SubscribeStyle } from './Subscribe.styles'
import Link from 'next/link'

export default function Subscribe() {
    return (
      <>
        <SubscribeStyle />
        <aside id="subscribe-container" 
          data-aos={"fade-up"}
          data-aos-duration={"900"}
          >
          <h2>Vai continuar pra trás ou vai correr <br/>na direção dos seus objetivos?
          </h2>
          <Link class="plans-button" href='/planos'>Quero fazer parte desse time!</Link>
        </aside>
      </>
    )
}