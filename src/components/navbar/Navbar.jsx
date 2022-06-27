import React from 'react'
import './Navbar.css'
import logo from '../../Images/logo.jpg'
import { NavLink } from 'react-router-dom'
// import Home from '@mui/icons-material'
// import { AiOutlineHome } from 'react-icons/ai'
import Home from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function Navbar() {
  return (
    <div id='navbar'>
      <img src={logo} alt="Gopal" id='logo' />
      <ul id='navList'>
        <li><NavLink to='/' className="navListItem" id="listItem-1" activeClassName='active'><Home sx={{ color: 'orange' }} /></NavLink></li>
        <li><NavLink to='/about' className="navListItem" id="listItem-2" ><InfoIcon sx={{ color: '#2eb1b1' }} /></NavLink></li>
        <li><NavLink to='/projects' className="navListItem" id="listItem-3" ><ListAltIcon sx={{ color: '#2f2dc9' }} /></NavLink></li>
        <li><NavLink to='/contact' className="navListItem" id="listItem-4" ><ConnectWithoutContactIcon sx={{ color: 'green' }} /></NavLink></li>
      </ul>
    </div >
  )
}
