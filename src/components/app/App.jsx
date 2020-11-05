import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Footer from '../footer/Footer';
import Home from '../home/Home';
import Navbar from '../navbar/Navbar';


import './App.scss';

export default function App() {
  return(
  <Router>
    <Navbar/>
    <Route to="/home" component={Home}/>

    <Footer/>

  </Router>

  )
}


