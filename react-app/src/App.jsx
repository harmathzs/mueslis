import React from 'react';

import MueslisPage from './pages/MueslisPage';
import AboutPage from './pages/AboutPage';

import LeftSidebar from './components/LeftSidebar';

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
        <LeftSidebar />

        {this.state.menuItemSelected=='products' && <MueslisPage />}
        {this.state.menuItemSelected=='about' && <AboutPage />}   
      </div>
    )
  }


}
