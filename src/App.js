import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import GetConnected from './components/getConnected/GetConnected'
import MyCareer from './components/myCareer/MyCareer'

let lastScrollTop = 0
let timeout
window.addEventListener('scroll', e => {
  const navbar = document.getElementById('navbar')
  const waveAnim = document.querySelector('.wave_anim')
  let st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    if (st < 70) {
      navbar.style.position = 'absolute'
      waveAnim.style.position = 'absolute'
      clearTimeout(timeout)
    } else {
      navbar.style.display = 'none';
      waveAnim.style.display = 'none';
    }
  } else {
    navbar.style.position = 'fixed'
    waveAnim.style.position = 'fixed'
    navbar.style.display = 'flex';
    waveAnim.style.display = 'block';
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      navbar.style.display = 'none';
      waveAnim.style.display = 'none';
    }, 5000);
    if (st < 70) {
      clearTimeout(timeout)
    }
  }
  lastScrollTop = st <= 0 ? 0 : st;
})

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/myCareer' element={<MyCareer />} />
        <Route path='/getConnected' element={<GetConnected />} />
      </Routes>
    </BrowserRouter>
  )
}
