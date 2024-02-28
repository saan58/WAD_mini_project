import React from 'react';
import './App.css';

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
      <nav className="sidebar">
        <ul>
          <li><a href="#">Homepage</a></li>
          <li><a href="#">Discuss</a></li>
          <li>
            <span className="parent-link">Resources</span>
            <ul className="sub-menu">
              <li><a href="#">FE</a></li>
              <li><a href="#">SE</a></li>
              <li><a href="#">TE</a></li>
              <li><a href="#">BE</a></li>
            </ul>
          </li>
          <li>
            <span className="parent-link">Profile</span>
            <ul className="sub-menu">
              <li><a href="#">Personal Login</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* Your main content code */}
    </div>
  );
}

export default App;