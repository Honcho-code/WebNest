import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Service from '../Components/Service'
import About from '../Components/About'
import Portfolio from '../Components/Portfolio'
import Contact from '../Components/Contact'
import AiChate from '../Components/AiChate'
import Footer from '../Components/Footer'
import Testimonial from '../Components/Testimonial'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Service/>
      <About/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <AiChate/>
    </div>
  )
}

export default Homepage