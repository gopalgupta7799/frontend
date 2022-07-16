import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import GetConnected from './components/getConnected/GetConnected'
import MyCareer from './components/myCareer/MyCareer'


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
