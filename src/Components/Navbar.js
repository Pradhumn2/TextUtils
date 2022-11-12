import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar(props) {

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: props.mode === "dark" ? "black" : "#bcc9d5"}}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.mode === "dark" ? "light" : "dark"}`}  to="/">
            {props.name}
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link active text-${props.mode === "dark" ? "light" : "dark"}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active text-${props.mode === "dark" ? "light" : "dark"}`} to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-check form-switch mx-3">
          <input className="form-check-input" type="checkbox" onClick={props.changemode} role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.mode === "dark" ? "light" : "dark"}`} htmlFor="flexSwitchCheckDefault">DarkMode</label>
          </div>
      </nav>
    </div>
  );
}
