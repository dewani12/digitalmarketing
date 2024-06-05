import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast';
import PopUpContact from './components/PopUpContact'
import Marque from './components/Marque'

function App() {
  return (
    <>
    <div className='w-full bg-zinc-900'>
      <PopUpContact/>
      <Navbar/>
      <LandingPage/>
      <Marque/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
    <Toaster />
    </>
  )
}

export default App
