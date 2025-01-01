import { useState } from 'react'
import{ BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Layout from './envirement/Layout'
import About from './screen/about/About'
import Contact from './screen/contact/Contact'
import Portfolio from './screen/portfolio/Portfolio'
import Home from './screen/home/Home'

import './App.css'

function App() {

  return (
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App
