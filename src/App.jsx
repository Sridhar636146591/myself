import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AllProjectsPage from './components/AllProjectsPage'

// Disable browser's automatic scroll restoration
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const html = document.documentElement;
      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      
      // Use nested requestAnimationFrame to restore smooth scrolling 
      // after the browser has completed the instant scroll-to-top.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          html.style.scrollBehavior = '';
        });
      });
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Certifications />
      <Contact />
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjectsPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
