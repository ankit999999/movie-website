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
        <Route path="/:category/:id" element={<Details />} />
        <Route path="/:category" element={<Catalog />} />
        <Route path="/:category/search/:keyword" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
