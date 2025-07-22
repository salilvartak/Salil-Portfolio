import React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import Navigation from '@/components/navbar';
import Particles from '../components/ui/Particles.tsx';
import ChatBot from "@/components/ChatbBot"; // Or similar path


const Index = () => {
  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Full-screen particle background */}
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={['#89cce3', '#89cce3']}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <Navigation />
      <Hero />
      <About />
      
      <Skills />
      <Projects />
      <Blogs />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-700">
        <p className="text-gray-400">© 2025 Salil Vartak Developer Portfolio.</p>
      </footer>
    </div>
  );
};

export default Index;
