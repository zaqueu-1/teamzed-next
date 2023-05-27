import Image from 'next/image'
import { HeroStyle } from './Hero.styles'

export default function Hero({scrollToSection}) {
    return (
      <>
      <HeroStyle />
      <section id="teamzed"
        data-aos={"fade-down"}
        data-aos-duration={"1200"}
        >
        <Image src="/src/images/teamzed-logo.png" class="big-logo" alt="TeamZed" width='500' height='200'/>
        <button className='more' onClick={() => scrollToSection('about')}>
          SAIBA MAIS
        </button>
      </section>
      </>
    )
}  
