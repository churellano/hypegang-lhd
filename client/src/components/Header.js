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
<<<<<<< HEAD
        <li><Link to='/map'>Map</Link></li>
=======
        <li><Link to='/maps'>Maps</Link></li>
>>>>>>> 0ebd6dbfc62717a2d56d2228b45426fe8b1f19ae
      </ul>
    </nav>
  </header>
)

export default Header