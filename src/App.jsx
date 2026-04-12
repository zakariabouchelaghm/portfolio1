import React, { useState } from 'react';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Projects from './components/Projects';
import RelatedProjects from './components/RelatedProjects';
import Awards from './components/Awards';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import LanguageToggle from './components/LanguageToggle';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <LanguageProvider>
      <div className="app-container">
        <div className="background-glow"></div>
        <LanguageToggle />
        <Hero />
        <Bio />
        <Skills />
        <Education />
        <Experience />
        <Projects openModal={openModal} />
        <RelatedProjects openModal={openModal} />
        <Awards />
        <Footer />
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
