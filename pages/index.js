import Header from '../components/Header/Header.jsx'
import Hero from '../components/Hero/Hero.jsx'
import About from '../components/About/About.jsx'
import Results from '../components/Results/Results.jsx'
import Aside from '../components/Aside/Aside.jsx'
import Subscribe from '../components/Subscribe/Subscribe.jsx'
import Footer from '../components/Footer/Footer.jsx'
import { React, useEffect, useState, useRef } from "react"
import { GlobalStyle } from "../styles/globals.styles"
import AOS from "aos"
import "aos/dist/aos.css"
import Head from 'next/head'

export default function Home() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const aboutSection = useRef(null);

  const scrollToSection = (section) => {
    if (section === "about") window.scrollTo({ top: aboutSection.current.offsetTop-150, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>#TEAMZED | Consultoria Esportiva</title>
        <meta name="description" content="Sua meta é nosso desafio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />
      <Header />
      <Hero scrollToSection={scrollToSection} />
      <section ref={aboutSection}>
        <About />
      </section>
      <Results />
      <Aside />
      <Subscribe />
      <Footer />
    </>
  )
}
