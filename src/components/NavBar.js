import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'


const NavBar = () => {
  return (
    <div className='navbar'>
        <NavLink id='logo'>Salt &amp; Pepper</NavLink>
        <NavLink><input type='text' placeholder="I'm looking for ..."></input></NavLink>
        <button><BiSearch/></button>
        <NavLink>Home</NavLink>
        <NavLink>Favourites</NavLink>
        <NavLink>Profile</NavLink>

    </div>
  )
}

export default NavBar