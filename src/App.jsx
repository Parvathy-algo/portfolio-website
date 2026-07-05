import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contact from './pages/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Select all sections configured to reveal on scroll
    const revealSections = document.querySelectorAll('.floating-section');

    const observerOptions = {
      root: null, // Tracks adjustments relative to the browser viewport
      threshold: 0.15, // Triggers when 15% of the section card is visible
      rootMargin: "0px 0px -50px 0px" // Slight bottom offset for a more natural reveal pace
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the active animation class
          entry.target.classList.add('section-revealed');
          // Unobserve once animated to keep performance ultra-fast
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealSections.forEach(section => {
      sectionObserver.observe(section);
    });

    // Cleanup observer on component unmount
    return () => sectionObserver.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      
      <div className="scroll-container">
        <section id="home" className="floating-section hero-section-adjust">
          <Hero />
        </section>

        <section id="skills" className="floating-section">
          <Skills />
        </section>

        <section id="projects" className="floating-section">
          <Project />
        </section>

        <section id="contact" className="floating-section">
          <Contact />
        </section>

        <footer className="global-footer">
          <p>© 2026 – Full Stack Developer Portfolio</p>
        </footer>
      </div>
    </div>
  );
}

export default App;