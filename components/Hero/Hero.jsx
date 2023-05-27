import Image from 'next/image'
import { HeroStyle } from './Hero.styles'
import { RxDoubleArrowDown } from 'react-icons/rx'

export default function Hero({scrollInto}) {
    return (
      <>
      <HeroStyle />
      <div id="teamzed"
        data-aos={"fade-down"}
        data-aos-duration={"1200"}
        >
        <Image src="/src/images/teamzed-logo.png" class="big-logo" alt="TeamZed" width='500' height='200'/>
        <RxDoubleArrowDown className='more'/>
      </div>
      </>
    )
}  
