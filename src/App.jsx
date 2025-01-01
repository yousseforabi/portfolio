import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';

const App = () => {
  return (

     <div style={{ scrollBehavior: 'smooth' }}>
     <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
   </div>
 );
  
};

export default App;
