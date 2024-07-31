import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import "./index.css"
import Details from './pages/details/Details';
import Bookseats from './pages/bookseats/Bookseats';
import Boardingpass from './pages/boarding/Boardingpass';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/flights' element={<List/>}/>
        <Route path='/flights/:id' element={<Details/>}/>
        <Route path='/flights/:id/seats' element={<Bookseats/>}/>
        <Route path='/flights/:id/seats/printboarding' element={<Boardingpass/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
