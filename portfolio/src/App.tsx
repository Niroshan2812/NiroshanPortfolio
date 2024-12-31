import { useState } from 'react'
import{ BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Layout from './envirement/Layout'
import About from './screen/About'
import Contact from './screen/Contact'
import Portfolio from './screen/Portfolio'
import Home from './home/Home'

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
