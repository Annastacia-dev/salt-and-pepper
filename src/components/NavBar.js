import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi' 
import { AiFillHome} from 'react-icons/ai'
import {AiFillHeart } from 'react-icons/ai'
import {IoIosNotifications} from 'react-icons/io'
import{ CgProfile } from 'react-icons/cg'


const NavBar = () => {
  return (
    <div className='navbar'>
        <NavLink id='logo'>Salt &amp; Pepper</NavLink>
        <NavLink className='nav-icon'><input type='text' placeholder="Search ..."></input></NavLink>
        <button><BiSearch/></button>
        <NavLink className='nav-icon'><AiFillHome/></NavLink>
        <NavLink className='nav-icon'><AiFillHeart/></NavLink>
        <NavLink className='nav-icon'><IoIosNotifications/></NavLink>
        <NavLink className='nav-icon'><CgProfile/></NavLink>

    </div>
  )
}

export default NavBar