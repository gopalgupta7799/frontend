import './Navbar.css'
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Info, ViewList, Work, ConnectWithoutContact } from '@mui/icons-material';
import logo from '../../Images/logo.png'
import boat from '../../Images/boat.png'

export default function Navbar() {
  let location = useLocation()
  const [active, setActive] = useState(location.pathname)
  useEffect(() => {
    setActive(location.pathname)
  }, [location])
  useEffect(() => {
    window.onscroll = () => {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("boat").style.left = scrolled + "%";
    }

    document.getElementById(active).style.borderBottomWidth = '5px'

    document.querySelectorAll('.icon').forEach((icon) => {
      icon.addEventListener('mouseover', () => {
        icon.parentElement.nextSibling.style.visibiity = 'show'
        icon.parentElement.nextSibling.style.opacity = '1'
        icon.style.transform = 'scale(1.3)'
      })
      icon.addEventListener('mouseout', () => {
        icon.parentElement.nextSibling.style.visibiity = 'hidden'
        icon.parentElement.nextSibling.style.opacity = '0'
        icon.style.transform = 'scale(1)'
      })
      icon.addEventListener('touchend', () => {
        icon.parentElement.nextSibling.style.visibiity = 'hidden'
        icon.parentElement.nextSibling.style.opacity = '0'
        icon.style.transform = 'scale(1)'
      })
      icon.addEventListener('touchstart', () => {
        icon.parentElement.nextSibling.style.visibiity = 'show'
        icon.parentElement.nextSibling.style.opacity = '1'
        icon.style.transform = 'scale(1.3)'
      })
    })
  }, [])
  useEffect(() => {
    const activeElement = document.getElementById(active)
    activeElement.style.borderBottomWidth = '5px'
    activeElement.lastChild.style.visibiity = 'show'
    activeElement.lastChild.style.opacity = '1'
    setTimeout(() => {
      activeElement.lastChild.style.visibiity = 'hidden'
      activeElement.lastChild.style.opacity = '0'
    }, 500)
    return () => activeElement.style.borderBottomWidth = '0px'
  }, [active])
  return (
    <div id='nav-boat-container'>
      <img src={boat} alt="" id='boat' />
      <div id='navbar'>
        <div className="navListItem" id="/about" style={{ borderColor: '#d9534f' }}>
          <NavLink to='/about' className='navlink' onClick={() => setActive('/about')}>
            <Info className='icon' sx={{ color: '#d9534f' }} />
          </NavLink>
          <span className='tooltipText'>About</span>
        </div>
        <div className="navListItem" id="/projects" style={{ borderColor: '#0f6b8f' }}>
          <NavLink to='/projects' className='navlink' onClick={() => setActive('/projects')}>
            <ViewList className='icon' sx={{ color: '#0f6b8f' }} />
          </NavLink>
          <span className='tooltipText'>Projects</span>
        </div>
        <div className="navListItem" id="/" style={{ borderColor: '#b52771' }}>
          <NavLink to='/' className='navlink' activeclassname='active' onClick={() => setActive('/')}>
            <img src={logo} alt="Gopal" id='logo' className='icon' />
          </NavLink>
          <span className='tooltipText'>Home</span>
        </div>
        <div className="navListItem" id="/myCareer" style={{ borderColor: 'green' }}>
          <NavLink to='/myCareer' className='navlink' onClick={() => setActive('/myCareer')}>
            <Work className='icon' sx={{ color: 'green' }} />
          </NavLink>
          <span className='tooltipText'>My Career</span>
        </div>
        <div className="navListItem" id="/getConnected" style={{ borderColor: '#ff5200' }}>
          <NavLink to='/getConnected' className='navlink' onClick={() => setActive('/getConnected')}>
            <ConnectWithoutContact className='icon' sx={{ color: '#ff5200' }} />
          </NavLink>
          <span className='tooltipText'>Get Connected</span>
        </div>
      </div >
      <div className='wave_anim'>
        <div className='wave wave1'></div>
        <div className='wave wave2'></div>
      </div>
    </div>
  )
}
