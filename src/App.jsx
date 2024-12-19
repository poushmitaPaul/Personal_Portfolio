import React from 'react'
import './output.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Footer from './components/footer';
import Contact from './components/contact';
import { Toaster } from 'react-hot-toast';



function App() {
  // #Javascript

  return (
    <>
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
     <Toaster />
    </>
  )
}

export default App
