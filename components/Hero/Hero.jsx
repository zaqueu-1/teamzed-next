import Image from 'next/image'

export default function Hero() {
    return (
        <section id="teamzed"
        data-aos={"fade-down"}
        data-aos-duration={"1200"}
        >
        <img src="/src/images/biglogo.png" class="blob" alt="TeamZed" width='30%' height='30%'/>
        <h2 class="titulo">Consultoria Esportiva</h2>
        <p class="paragrafo">
          Suas metas são nosso desafio!
        </p>
      </section>
    )
}  
