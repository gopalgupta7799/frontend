import React from 'react'
import './Navbar.css'
import logo from '../../Images/logo.png'
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
      <NavLink to='/' className="navListItem" id="listItem-1" activeClassName='active'>
        <Home className='icon' sx={{ color: 'orange' }} />
        <span className='tooltipText'>Home</span>
      </NavLink>
      <NavLink to='/about' className="navListItem" id="listItem-2" >
        <InfoIcon className='icon' sx={{ color: '#2eb1b1' }} />
        <span className='tooltipText'>About</span>
      </NavLink>
      <NavLink to='/projects' className="navListItem" id="listItem-3" >
        <ListAltIcon className='icon' sx={{ color: '#2f2dc9' }} />
        <span className='tooltipText'>Projects</span>
      </NavLink>
      <NavLink to='/contact' className="navListItem" id="listItem-4" >
        <ConnectWithoutContactIcon className='icon' sx={{ color: 'green' }} />
        <span className='tooltipText'>Contact</span>
      </NavLink>
    </div >
  )
}
