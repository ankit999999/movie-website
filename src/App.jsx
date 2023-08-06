import React from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Catalog from './pages/catalog/Catalog'
import Header from './components/header/Header'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Details />} />
        <Route path="/tv/:tvId" element={<Details />} />
        <Route path="/movie" element={<Catalog />} />
        <Route path="/tv" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
