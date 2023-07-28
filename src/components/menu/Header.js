

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
  <div>

 
      <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>
          <header className="site-navbar site-navbar-target" role="banner">

<div className="container">
  <div className="row align-items-center position-relative">

    <div className="col-3 ">
      <div className="site-logo">
        <NavLink to="/cargaison">GP Du Monde</NavLink>
      </div>
    </div>

    <div className="col-9  text-right ">

      <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
        <ul className="site-menu main-menu js-clone-nav ml-auto ">
          <li >
          <NavLink style={{color:"white"}} to="/" className="nav-link font-weight-bold">Deconnexion</NavLink>
          </li>
        </ul>
      </nav>
    </div>

  </div>
</div>

</header>
        
        </div>
     
    )
  }
}
