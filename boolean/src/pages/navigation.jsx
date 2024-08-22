import React from 'react'
import {  Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="w3-bar w3-green">
        <nav>
        
        <Link to="/" className="w3-bar-item w3-button">Home</Link>
        <Link to="/Blogs" className="w3-bar-item w3-button">Excersise</Link>
        <Link to="/TrafficLights" className="w3-bar-item w3-button">TrafficLights</Link>
        <Link to="/Contact" className="w3-bar-item w3-button">Contact</Link>
        <Link to="/Movies" className="w3-bar-item w3-button">Movies</Link>
        <Link to="/moviespage" className="w3-bar-item w3-button">Movies Page</Link>
        <Link to="/NoPage" className="w3-bar-item w3-button"></Link>
        </nav>
 
</div>
  )
}
