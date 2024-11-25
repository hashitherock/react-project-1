import React from 'react'
import './Navbar.css'
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='container'>
      <div className="row navbar">
        <div className="col-2">
          <div className="navbar-brand">
          Brandname
          </div>
        </div>
        <div className="col-6">
            <nav className='nav'>
              <ul className='d-flex'>
                <li><a href=''>Home</a></li>
                <li><a href=''>Product</a></li>
                <li><a href=''>Pricing</a></li>
                <li><a href=''>Contact</a></li>
              </ul>
            </nav>
        </div>
        <div className="col-3">
          <div className="account-panel d-flex">
            <a href='' className='btn-text'>Login</a>
            <button className='btn btn-primary btn-1 text-uppercase text-white '>Join Us <FaArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
