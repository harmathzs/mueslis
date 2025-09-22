import React from 'react';

import MueslisPage from './pages/MueslisPage';
import AboutPage from './pages/AboutPage';

import './App.css';



export default class App extends React.Component {


  render() {
    return (
      <div className='page-container'>
        <nav id="navbar" title="Toggle menu width">
          <div className="menu-item" tabIndex="0" data-content="products">
            <span className="menu-icon">📦</span>
            <span className="menu-text">Products</span>
          </div>
          <div className="menu-item" tabIndex="0" data-content="prices">
            <span className="menu-icon">💰</span>
            <span className="menu-text">Prices</span>
          </div>
          <div className="menu-item" tabIndex="0" data-content="about">
            <span className="menu-icon">ℹ️</span>
            <span className="menu-text">About</span>
          </div>
        </nav>

          <MueslisPage /> 
          <AboutPage />    
      </div>
    )
  }


}
