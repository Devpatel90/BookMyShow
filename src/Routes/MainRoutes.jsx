import React from 'react'
import { Routes,Route} from 'react-router'
import Home from '../Pages/Home'

export default function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
    </Routes>
  )
}
