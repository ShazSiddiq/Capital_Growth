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
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ParticleBackground from './components/ParticleBackground';

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
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
