import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Navigation from './navigation';
import Footer from './Footer';
export default function Layout() {
  return (
    <div>
      {/* <p>This is the page layout</p> */}
      <Footer/>
      <Navigation/>
      <Outlet/>
    </div>
  )
}
