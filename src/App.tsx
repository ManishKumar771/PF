import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { DarkModeToggle } from './components/DarkModeToggle';
import { useDarkMode } from './hooks/useDarkMode';
import { Starfield } from './components/Starfield';
import { CosmicParticles } from './components/CosmicParticles';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'skills',
      'projects',
      'certifications',
      'blog',
      'contact',
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 relative flex dark:bg-gray-900 bg-gray-50">
      <Sidebar activeSection={activeSection} onSectionChange={scrollToSection} />
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="flex-1 min-w-0">
        <Starfield />
        <CosmicParticles />
        <img
          src="/nebula.svg"
          alt=""
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1,
            pointerEvents: 'none',
            opacity: 0.7,
            objectFit: 'cover',
          }}
        />

        <main className="relative z-10 md:mr-80">
          <div id="home">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="certifications">
            <Certifications />
          </div>
          <div id="blog">
            <Blog />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
