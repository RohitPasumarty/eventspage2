import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

// import { BurgerIcon } from './'
import "./nav.module.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <p>Event Name</p>
        </div>
        <nav className="navcont">
          <ul className="nav">
            <NavLink activeClassName="active" to="/about">
              <li className="navitems">
                <a>About</a>
              </li>
            </NavLink>
            <NavLink activeClassName="active" to="/judgement">
              <li className="navitems">
                <a>Judgement Criteria</a>
              </li>
            </NavLink>
            <NavLink activeClassName="active" to="/rules">
              <li className="navitems">
                <a>Rules</a>
              </li>
            </NavLink>
            <NavLink activeClassName="active" to="/register">
              <li className="navitems">
                <a>Register</a>
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
