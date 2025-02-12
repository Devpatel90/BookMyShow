import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AddForm from '../Pages/AddForm'
import EditForm from '../Pages/EditForm'

function MainRoute() {
  return (
    <>
    <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/addForm"} element={<AddForm/>}></Route>
        <Route path={"/editForm/:id"} element={<EditForm/>}></Route>
    </Routes>
    </>
  )
}

export default MainRoute