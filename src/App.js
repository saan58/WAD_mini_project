import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Discuss from './components/Discuss';
import Resources from './components/Resources';
import Home from './components/Home';
import Navbar from './components/navbar';
import "./App.css"

function App() {
  return (
    
      <div className="container">
        <header id="rs-header" className="rs-header">
          <div className="rs-header-top desktop">
            <div className="container">
              <div className="row">
                <div className="col-md-6 pr-0 mr-0 col-sm-12">
                  <div className="image1">
                    <img src="/pic.jpg" alt="logo" width="100" height="100" />
                    <div>
                      <div className="small-font">Society for Computer Technology and Research's</div>
                      <div className="large-font">PUNE INSTITUTE OF COMPUTER TECHNOLOGY</div>
                      <div className="small-font">AICTE APPROVED | NAAC A+ Grade | NBA [All Eligible UG Programs]</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 pl-0 m-0 text-right">
                  <div className="larger-font">Student Portal</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Navbar />
        
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Discuss" element={<Discuss />} />
          <Route path="/Resources" element={<Resources />} />
        </Routes> 
      </div>
    
  );
}

export default App;