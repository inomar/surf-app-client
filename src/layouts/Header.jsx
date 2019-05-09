import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  render() {
    return (
      <header className="container is-fluid">
        <nav className="navbar" role="navigation" ariaLabel="main navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <strong>LOGO</strong>
            </Link>

            <a role="button" className="navbar-burger burger" ariaLabel="menu" ariaExpanded="false" dataTarget="navbarBasicExample">
              <span ariaHidden="true"></span>
              <span ariaHidden="true"></span>
              <span ariaHidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to='/posts' className="navbar-item">
                Post
              </Link>

              <a className="navbar-item">
                Documentation
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
