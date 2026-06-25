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
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = '';
      }, 0);
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
