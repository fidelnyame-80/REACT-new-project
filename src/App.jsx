import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/services'
import ServicesOffered from './components/servicesOffered'
import DoctorSection from './components/doctorSection'
import Testimonials from './components/Testimonials'
import BlogPreview from './components/BlogPreview'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <Services />
    <ServicesOffered />
    <DoctorSection />
    <Testimonials />
    <BlogPreview />
    <FAQ />
    <Contact />
    <Footer />
    
    </>
  )
}

export default App