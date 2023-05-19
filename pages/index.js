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

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const heroSection = useRef(null);
  const aboutSection = useRef(null);
  const resultsSection = useRef(null);
  const asideSection = useRef(null);
  const subscribeSection = useRef(null);

  const scrollToSection = (section) => {
    if (section === "hero") window.scrollTo({ top: heroSection.current.offsetTop, behavior: "smooth" });
    else if (section === "about") window.scrollTo({ top: aboutSection.current.offsetTop, behavior: "smooth" });
    else if (section === "results") window.scrollTo({ top: resultsSection.current.offsetTop, behavior: "smooth" });
    else if (section === "aside") window.scrollTo({ top: asideSection.current.offsetTop, behavior: "smooth" });
    else if (section === "subscribe") window.scrollTo({ top: subscribeSection.current.offsetTop, behavior: "smooth" });
  };

  return (
    <>
    <GlobalStyle />
    <Header onGetScrollSection={scrollToSection} />
    <Hero />
    <section ref={heroSection}>
      </section>
     <section ref={aboutSection}>
        <About />
       </section>
      <section ref={resultsSection}>
        <Results />
      </section>
      <section ref={asideSection}>
        <Aside />
      </section>
     <section ref={subscribeSection}>
        <Subscribe />
      </section>
      <Footer />
    </>
  )
}
