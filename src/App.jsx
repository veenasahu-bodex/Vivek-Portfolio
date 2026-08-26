import { useState } from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import BeforeAfter from "./components/BeforeAfter";
import EditingLanguage from "./components/EditingLanguage";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/About";
import CreativeProcess from "./components/CreativeProcess";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* =========================================
          CINEMATIC PRELOADER
      ========================================= */}

      {loading && (
        <Preloader
          onComplete={() => setLoading(false)}
        />
      )}


      {/* =========================================
          CUSTOM CURSOR
      ========================================= */}

      <CustomCursor />


      {/* =========================================
          NAVBAR
      ========================================= */}

      <Navbar />


      {/* =========================================
          MAIN WEBSITE
      ========================================= */}

      <main>

        {/* HERO */}
        <section id="home">
          <Hero />
        </section>


        {/* SHOWREEL */}
        <Showreel />


        {/* RAW → FINAL */}
        <section id="raw-final">
          <BeforeAfter />
        </section>


        {/* EDITING LANGUAGE */}
        <section id="editing-language">
          <EditingLanguage />
        </section>


        {/* SKILLS */}
        <section id="skills">
          <Skills />
        </section>


        {/* EXPERIENCE */}
        <section id="experience">
          <Experience />
        </section>


        {/* ABOUT */}
        <section id="about">
          <About />
        </section>


        {/* CREATIVE PROCESS */}
        <section id="process">
          <CreativeProcess />
        </section>


        {/* TESTIMONIALS */}
        <section id="testimonials">
          <Testimonials />
        </section>


        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>

      </main>


      {/* =========================================
          FOOTER
      ========================================= */}

      <Footer />
    </>
  );
}

export default App;