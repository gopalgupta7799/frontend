import './Navbar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import InfoIcon from '@mui/icons-material/Info';
import ViewListIcon from '@mui/icons-material/ViewList';
import WorkIcon from '@mui/icons-material/Work';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import logo from '../../Images/logo.png'

export default function Navbar() {
  return (
    <>
      <div id='navbar'>
        <NavLink to='/about' className="navListItem" id="listItem-1" style={{ borderColor: '#d9534f' }}>
          <InfoIcon className='icon' sx={{ color: '#d9534f' }} />
          <span className='tooltipText'>About</span>
        </NavLink>
        <NavLink to='/projects' className="navListItem" id="listItem-2" style={{ borderColor: '#0f6b8f' }}>
          <ViewListIcon className='icon' sx={{ color: '#0f6b8f' }} />
          <span className='tooltipText'>Projects</span>
        </NavLink>
        <NavLink to='/' className="navListItem" id="listItem-3" activeclassname='active' style={{ borderColor: '#8d99c5' }}>
          <img src={logo} alt="Gopal" id='logo' className='icon' />
          <span className='tooltipText'>Home</span>
        </NavLink>
        <NavLink to='/myCareer' className="navListItem" id="listItem-4" style={{ borderColor: 'green' }}>
          <WorkIcon className='icon' sx={{ color: 'green' }} />
          <span className='tooltipText'>My Career</span>
        </NavLink>
        <NavLink to='/getConnected' className="navListItem" id="listItem-5" style={{ borderColor: '#ff5200' }}>
          <ConnectWithoutContactIcon className='icon' sx={{ color: '#ff5200' }} />
          <span className='tooltipText'>Get Connected</span>
        </NavLink>
      </div >
      <div className='wave_anim'>
        <div className='wave wave1'></div>
        <div className='wave wave2'></div>
      </div>
    </>
  )
}
