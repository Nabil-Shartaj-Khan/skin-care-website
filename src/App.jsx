import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
import Before from './components/BeforeAfterGallery/Before'
import Contact from './components/Contact/Contact'
import Testimonial from './components/Testimonial/Testimonial'
import Location from './components/Location/Location'
import Login from "./components/UserAction/Login/Login";
import NotFound from "./NotFound";
import Register from "./components/UserAction/Register/Register";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Intro />
          <About />
          <Service />
          <Products />
          <Before />
          <Testimonial />
          <Contact />
          <Location />
        </>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
