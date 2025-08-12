import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Carrusel from './components/Carrusel';
import Navegation from './components/Navegation';
import About from './components/About';
import Servicios from './components/Servicios';
import Galeria from './components/Galeria';
import Testimonios from './components/Testimonios';
import Equipo from './components/Equipo';
import Contacto from './components/Contacto';
import { Footer } from './components/Footer';
import ModalMapa from './components/ModalMapa';

function App() {

  return (
    <section >
      {/* <Header />  */}
      {/* <Nav />  */}
      <Navegation />
      <Carrusel />
      <About />
      <Servicios />
      <Galeria />
      {/* <Testimonios /> */}
      <Equipo />
      <Contacto />
      <ModalMapa />
      <Footer />
    </section>
  )
}

export default App
