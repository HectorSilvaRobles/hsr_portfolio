import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills.js'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <Testimonials />
      <About />
    </div>
  );
}

export default App;
