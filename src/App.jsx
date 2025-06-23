import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Editor from './pages/Editor'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/flows/:id' element={<Editor/>}/>
      </Routes>
    </div>
  )
}

export default App