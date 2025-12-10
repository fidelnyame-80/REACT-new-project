import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to={'/'}><h3>Home</h3></Link>
        <Link to={'/Items'} ><h3>items</h3></Link>
        <Link to={'/About'} ><h3>About</h3></Link>
        <Link to={'/Details'}><h3>Details</h3></Link>
        
        
        
        
    </div>
  )
}

export default NavBar