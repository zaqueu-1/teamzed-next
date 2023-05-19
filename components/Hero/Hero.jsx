import Image from 'next/image'
import { HeroStyle } from './Hero.styles'

export default function Hero() {
    return (
      <>
      <HeroStyle />
      <section id="teamzed"
        data-aos={"fade-down"}
        data-aos-duration={"1200"}
        >
        <Image src="/src/images/teamzed-logo.png" class="big-logo" alt="TeamZed" width='500' height='200'/>
        <p>
          Suas metas são nosso desafio!
        </p>
      </section>
      </>
    )
}  
