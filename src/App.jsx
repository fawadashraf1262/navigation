import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Contact from './Contact'
import Gallery from './Gallery'
import About from './About'
import Header from './Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/abut' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App