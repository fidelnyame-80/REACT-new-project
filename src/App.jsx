import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Details from './Pages/Details'
import Items from './Pages/Items'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Shop from './Pages/Shop'
import ErrorPage from './Pages/ErrorPage'
import NavBar from './Components/NavBar'

const App = () => {
  return (
   <>

   
   <NavBar />
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Details' element={<Details/>}/>
    <Route path='/Items' element={<Items/>}/>
    <Route path='/Shop' element={<Shop/>}/>
    <Route path='*' element={<ErrorPage/>}/>
   </Routes  >
   
   </>
  )
}

export default App