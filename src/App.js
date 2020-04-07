import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills.js'
import About from './Components/About/About'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <About />
    </div>
  );
}

export default App;
