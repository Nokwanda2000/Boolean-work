import React from 'react'

import {  Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="w3-bar w3-green">
        <nav>
        <Link to="/" className="w3-bar-item w3-button">Excersice</Link>
        <Link to="/Contact" className="w3-bar-item w3-button">TrafficLights</Link>
        <Link to="/NoPage" className="w3-bar-item w3-button">NoPage</Link>

        </nav>
 
</div>
  )
}
