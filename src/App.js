import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ResumeCTA from './Components/ResumeCTA/ResumeCTA'
import Hero from './Components/Hero/Hero'
import Intro from './Components/Intro/Intro'
import Projects from './Components/Projects/Portfolio'
import Skills from './Components/Skills/Skillset.js'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ResumeCTA /> */}
      <Hero />
      <Intro />
      <Projects />
      <Skills />
      <Testimonials />
      <About />
    </div>
  );
}

export default App;
