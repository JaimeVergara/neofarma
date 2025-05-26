import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Carrusel from './components/Carrusel';


function App() {

  return (
    <section >
      <Header />
      <Nav /> 
      <Carrusel />
    </section>
  )
}

export default App
