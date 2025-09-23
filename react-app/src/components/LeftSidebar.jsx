import React from "react";

import '../App.css';

export default class LeftSidebar extends React.Component {
  state = {
    menuItemSelected: 'products',
    menuExpanded: false
  }

  handleNavEnter = e => this.setState({menuExpanded: true})
  handleNavLeave = e => this.setState({menuExpanded: false})

  handleProductsClick = e => this.props.onMenuItemSelected('products')
  handleAboutClick = e => this.props.onMenuItemSelected('about')

    render() {
        return <nav id="navbar" title="Switch page to" className={this.state.menuExpanded ? "expanded" : ""}
          onMouseEnter={this.handleNavEnter} onMouseLeave={this.handleNavLeave}
        >
          <div className="menu-item" tabIndex="0" data-content="products" onClick={this.handleProductsClick}>
            <span className="menu-icon">📦</span>
            <span className="menu-text">Products</span>
          </div>
          <div className="menu-item" tabIndex="0" data-content="prices">
            <span className="menu-icon">💰</span>
            <span className="menu-text">Prices</span>
          </div>
          <div className="menu-item" tabIndex="0" data-content="about" onClick={this.handleAboutClick}>
            <span className="menu-icon">ℹ️</span>
            <span className="menu-text">About</span>
          </div>
        </nav>
    }
}