import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NoPage from './pages/NoPage'
import Home from './pages/Home'
import Layout from './pages/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './pages/Blogs'
import Contact from './pages/TrafficLights'
import './App.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="NoPage" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
