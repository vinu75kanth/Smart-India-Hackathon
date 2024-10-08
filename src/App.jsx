import {React,useState,useEffect} from 'react'
import './Components/Navbar/Navbar.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import JobsPage from './Components/JobsPage/JobsPage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Interview from './Components/Interview/Interview.jsx';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/JobsPage" element={<JobsPage/>}></Route>
        <Route path="/interview" element={<Interview/>}></Route>
      </Routes>
    </Router>
  )
}

export default App