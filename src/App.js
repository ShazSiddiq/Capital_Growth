import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './animations.css';
import './enhanced-styles.css';
import './App.css';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Footer />
    </>
  );
}
