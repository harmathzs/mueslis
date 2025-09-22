import React from 'react';

import MueslisPage from './pages/MueslisPage';
import AboutPage from './pages/AboutPage';

import './App.css';



export default class App extends React.Component {
  state = {
    menuItemSelected: 'products',
    menuExpanded: false
  }

  handleNavEnter = e => this.setState({menuExpanded: true})
  handleNavLeave = e => this.setState({menuExpanded: false})

  render() {
    return (
      <div className='page-container'>
        <nav id="navbar" title="Toggle menu width" className={this.state.menuExpanded ? "expanded" : ""}
          onMouseEnter={this.handleNavEnter} onMouseLeave={this.handleNavLeave}
        >
          <div className="menu-item" tabIndex="0" data-content="products" onClick={e=>this.setState({menuItemSelected: 'products'})}>
            <span className="menu-icon">📦</span>
            <span className="menu-text">Products</span>
          </div>
          <div className="menu-item" tabIndex="0" data-content="prices">
            <span className="menu-icon">💰</span>
            <span className="menu-text">Prices</span>
          </div>
          <div className="menu-item" tabIndex="0" data-content="about" onClick={e=>this.setState({menuItemSelected: 'about'})}>
            <span className="menu-icon">ℹ️</span>
            <span className="menu-text">About</span>
          </div>
        </nav>

        {this.state.menuItemSelected=='products' && <MueslisPage />}
        {this.state.menuItemSelected=='about' && <AboutPage />}   
      </div>
    )
  }


}
