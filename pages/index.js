import Header from '../components/Header/Header.jsx'
import Hero from '../components/Hero/Hero.jsx'
import About from '../components/About/About.jsx'
import Results from '../components/Results/Results.jsx'
import Aside from '../components/Aside/Aside.jsx'
import Subscribe from '../components/Subscribe/Subscribe.jsx'
import Footer from '../components/Footer/Footer.jsx'
import { React, useEffect, useRef } from "react"
import { GlobalStyle } from "../styles/globals.styles"
import AOS from "aos"
import "aos/dist/aos.css"
import Head from 'next/head'

export default function Home() {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
    scrollInto('top')
  }, []);

  const hero = useRef(null)
  const about = useRef(null)
  const top = useRef(null)

  const scrollInto = (ref) => {
    if (ref === "hero") hero.current.scrollIntoView()
    else if (ref === 'about') about.current.scrollIntoView()
    else if (ref === 'top') top.current.scrollIntoView()
  }

  return (
    <>
      <Head>
        <title>#TEAMZED | Consultoria Esportiva</title>
        <meta name="description" content="Sua meta é nosso desafio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />
      <div ref={top}>
        <Header scrollInto={scrollInto}/>
      </div>
      <div ref={hero}>
        <Hero scrollInto={scrollInto}/>
      </div>
      <div ref={about}>
        <About />
      </div>
      <Results />
      <Aside />
      <Subscribe />
      <Footer scrollInto={scrollInto}/>
    </>
  )
}
