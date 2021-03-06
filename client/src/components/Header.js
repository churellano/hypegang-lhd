import React from 'react'
import { Link } from 'react-router-dom'
// import Profile from '../Profile'
// import Maps from '../Maps'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/map'>Map</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header