import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
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
import AllCertificationsPage from './components/AllCertificationsPage'

// Enable browser's automatic scroll restoration to remember recent positions on back navigation
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'auto';
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // If navigating back/forward (POP action), disable smooth scroll temporarily so the browser restores scroll position instantly
    if (navType === 'POP') {
      const html = document.documentElement;
      html.style.scrollBehavior = 'auto';
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          html.style.scrollBehavior = '';
        });
      });
      return;
    }

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
  }, [pathname, hash, navType]);

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
        <Route path="/certifications" element={<AllCertificationsPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
