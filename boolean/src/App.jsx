import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NoPage from './pages/NoPage'
import Home from './pages/Home'
import Layout from './pages/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './pages/Blogs'
import TrafficLights from './pages/TrafficLights'
import Contact from './pages/contact'
import Movies from './pages/movies'
import './App.css'
import Moviespage from './pages/moviespage'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="TrafficLights" element={<TrafficLights />} />
          <Route path="NoPage" element={<NoPage />} />
          <Route path='Contact' element={<Contact/>}></Route>
          <Route path='Movies' element={<Movies/>}></Route>
          <Route path='moviespage' element={<Moviespage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
