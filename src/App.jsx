import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Service from './components/Service/Service'
import Products from './components/Products/Products'
import Footer from "./components/Footer/Footer"

function App() {


  return (
    <>

      <Header />
      <Intro />
      <About />
      <Service />
      <Products />
      <Footer />

    </>
  )
}

export default App
