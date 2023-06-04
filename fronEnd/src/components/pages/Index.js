import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Login'
import Register from './Register'

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Index
