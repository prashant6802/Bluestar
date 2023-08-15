import React from 'react'

import './Navbar.css';

function Navbar() {

  return (
    <>
    <div className="nav-wrapper">
          <div className="grad-bar"></div>
          <nav className="navbar">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png"
              alt="Company Logo"
            />
            <ul className="nav no-search itemsnav">
              <li className="nav-item">
                <a href="/#home">Home</a>
              </li>
              <li className="nav-item">
                <a href="/#genre">Genres</a>
              </li>
              <li className="nav-item">
                <a href="/#publisher">Publishers</a>
              </li>
              <li className="nav-item">
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </nav>
    </div>
    </>
  )
}

export default Navbar
